package com.kdt.goohae.controller.admin;

import com.kdt.goohae.domain.admin.ManagerVO;
import com.kdt.goohae.domain.user.UserVO;
import com.kdt.goohae.mapper.admin.ManagerMapper;
import com.kdt.goohae.mapper.user.UserMapper;
import com.kdt.goohae.service.admin.ManagerService;
import com.kdt.goohae.service.jwt.JwtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@Slf4j
@RestController
public class ManagerController {

    private final JwtService jwtService;
    // id / auth
    private final ManagerService managerService;
    private final PasswordEncoder passwordEncoder;

    public ManagerController(JwtService jwtService, ManagerService managerService, PasswordEncoder passwordEncoder) {
        this.jwtService = jwtService;
        this.managerService = managerService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping( value="/api/admin/valid/manager/list")
    public ResponseEntity<ArrayList> list( HttpServletRequest httpServletRequest ){
        // manager List는 권한이 'S'인지 확인하면 됨
        // 따라서 request에 담아준 auth 값을 꺼내어 확인 후 담아서 보내준다.
        // auth 정보 저장.
        String auth = (String) httpServletRequest.getAttribute("auth");

        // 해당 토큰의 auth가 S등급인지 확인 후 맞으면 selectList() 실행
        if("S".equals(auth)){
            return ResponseEntity.status(HttpStatus.OK).body(managerService.selectList());
        }
        return null;
    }

    @PostMapping( value = "/api/admin/valid/manager/detail")
    public ResponseEntity<?> detail ( @RequestBody ManagerVO vo, HttpServletRequest httpServletRequest){
//        public ResponseEntity<HashMap> detail (String loginIdAuth, String id, ManagerVO vo, String token){
        /*  계정 상세정보
         *   0. 요청 정보 : 해당 id의 id, 로그인 id의 토큰 (auth , id)
         *       => vo에는 조회하는 유저의 id로 초기화 돼서 들어옴.
         *   1. 로그인 계정의 토큰 유효한지 검사.
         *   2. 로그인 계정이 최고권한이거나,
         *      로그인 계정과 조회하고자 하는 계정이 같다면
         *   3. Json형식으로 전달
         * */
        String id = vo.getId();

        String auth = (String) httpServletRequest.getAttribute("auth");

        vo = managerService.selectOne(vo);

        if( vo != null && ("S".equals(auth) || id.equals(vo.getAuth())) ){
            return ResponseEntity.status(200).body(vo);
        }
        return ResponseEntity.status(500).body(null);
    }

    @PostMapping(value = "/api/admin/login")
    public ResponseEntity<String> login(@RequestBody ManagerVO vo) {

        // 받아온 password를 저장.
        String postPassword = vo.getPassword();

        // 받아온 id로 db의 정보 가져옴.
        vo = managerService.selectOne(vo);
        log.info("로그인 요청 ID : {}",vo.getId());
        if(vo != null){
            if( passwordEncoder.matches(postPassword,vo.getPassword())){
                String token = jwtService.createToken(vo.getId(),vo.getAuth(), (1000*30*60));
                return ResponseEntity.status(200).body(token);
            } else {
                return ResponseEntity.status(500).body("pwError");
            }
        } else {
            return ResponseEntity.status(500).body("idError");
        }
    }

    @PostMapping(value = "/api/admin/valid/manager/insert")
//    public String join(@RequestBody ManagerVO vo) {
    public ResponseEntity<String> join ( @RequestBody  ManagerVO vo ,  HttpServletRequest httpServletRequest) {
        /** vo만 붙여줘도, 같은 컬럼명 값으로 자동으로 들어감.
         * @RequestBody를 이용시 json 형식으로 받은 모든 값이 vo에 저장됨.
         * 로그인을 한 관리자의 권한이 "S"인지 확인해야함.
         * id 중복체크를 한 뒤에 중복이 아니면, ( 중복 check는 selectOne으로 ) */

        String auth = (String) httpServletRequest.getAttribute("auth");
        /**
         *  로그인 아이디의 권한이 최고권한( S )이고, 추가하려는 vo가 null이 아닐 때
         *  로직 수행
         * */

        if ( "S".equals(auth) ) {

            // 중복 ID 체크
            if(managerService.selectOne(vo) != null) {
                return ResponseEntity.status(400).body("duplicatedId");
            }
            // 패스워드 인코딩
            vo.setPassword(passwordEncoder.encode(vo.getPassword()));

            // insert 실행
            if (managerService.insert(vo) > 0) {
                return ResponseEntity.status(200).body("joinSuccess");
            } else {
                return ResponseEntity.status(500).body("null");
            }
        } else {
            // auth가 "s"가 아니므로 권한 없음.
            return ResponseEntity.status(500).body("unAuthorized");
        }
    }

    @PostMapping(value = "/api/admin/valid/manager/delete")
    public ResponseEntity<String> delete (@RequestBody  ManagerVO vo, HttpServletRequest httpServletRequest) {
        /**
         *  login한 ID의 권한이 "S"인지 확인
         **/
        String auth = (String) httpServletRequest.getAttribute("auth");
        if ( "S".equals(auth) ) {
            if(managerService.delete(vo) > 0){
                return ResponseEntity.status(200).body("deleteSuccess");
            }
        } else {
            return ResponseEntity.status(500).body("unAuthorized");
        }
        return ResponseEntity.status(500).body("null");
    }

    @PostMapping(value = "/api/admin/valid/manager/update")
    public ResponseEntity<String> update (@RequestBody  ManagerVO vo, HttpServletRequest httpServletRequest ){
        /*
         *   1)로그인한 계정 권한 확인 ( "S")
         *     업데이트 계정을 가져와서 존재하는지 확인.
         *     현재 있는 계정인지 확인 후
         *     패스워드 인코딩해서 다시 저장
         */

        String auth = (String) httpServletRequest.getAttribute("auth");

        ManagerVO postVo = managerService.selectOne(vo);

        if( "S".equals(auth) ){
            if(postVo != null ) {
                vo.setPassword(passwordEncoder.encode(vo.getPassword()));
                if (managerService.update(vo) > 0) {
                    return ResponseEntity.status(200).body("updateSuccess");
                }
            }
            return ResponseEntity.status(500).body("wrongId");
        }
        return ResponseEntity.status(500).body("unAuthorized");
    }

}
