package com.kdt.goohae.controller.admin;


import com.kdt.goohae.domain.admin.PostBoardVO;
import com.kdt.goohae.domain.forPaging.PageMaker;
import com.kdt.goohae.domain.forPaging.SearchCri;
import com.kdt.goohae.service.admin.PostBoardService;
import com.kdt.goohae.service.jwt.JwtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@Slf4j
public class PostBoardController {

    PostBoardService postBoardService;
    JwtService jwtService;

    public PostBoardController(PostBoardService postBoardService, JwtService jwtService) {
        this.postBoardService = postBoardService;
        this.jwtService = jwtService;
    }

    /**
     *  공지사항 등록을 위한 메서드
     * */
    @PostMapping(value = "/api/admin/valid/post/insert")
    public ResponseEntity<?> insert(@RequestBody PostBoardVO vo, HttpServletRequest httpServletRequest) {

        /**
         *   접근 가능 권한 : S,A,B,C
         *   1. 따라서 토큰이 유효한지만 확인 -- > filter에서 해줌.
         *   2. 제목이나 글 내용이 작성되었는지 확인
         *      --> 아니라면 500 (Status) / empty ( data )
         *   3. insertLogic 처리
         *      --> 성공시 200 ( Status ) / insertSuccess ( data )
         *      --> 실패시 500 ( Status ) / error ( data )
         */

        vo.setManagerId((String)httpServletRequest.getAttribute("id"));

        log.info(" vo : {}", vo);
        log.info(" managerId : {}", httpServletRequest.getAttribute("id"));
        log.info(" managerAuth : {}", httpServletRequest.getAttribute("auth"));
        // 2) 제목이나 글 내용이 작성되어있는지 확인
        if ( vo.getTitle().length() <= 0 || vo.getContent().length() <= 0 ){
            return ResponseEntity.status(500).body("empty");
        }

        // 3) insert 로직
        if (postBoardService.insert(vo)>0){
            return ResponseEntity.status(200).body("insertSuccess");
        } else {
            return ResponseEntity.status(500).body("error");
        }
    }

    /**
     *  공지사항 업데이트를 위한 메서드
     * */
    @PostMapping(value = "/api/admin/valid/post/update")
    public ResponseEntity<?> update( @RequestBody  PostBoardVO vo , HttpServletRequest httpServletRequest) {
        vo.setManagerId((String) httpServletRequest.getAttribute("id"));
        if (postBoardService.update(vo) > 0) return ResponseEntity.status(200).body("updateSuccess");
        return ResponseEntity.status(500).body("error");
    }

    /**
     *  공지사항 삭제를 위한 메서드
     * */
    @PostMapping(value = "/api/admin/valid/post/delete")
    public ResponseEntity<?> delete( int postSeq, PostBoardVO vo ) {
        if (postBoardService.delete(vo)>0){return ResponseEntity.status(200).body("deleteSuccess");}
        return ResponseEntity.status(500).body("error");
    }

    /**
     * 공지사항의 Detail은 누구나 볼 수 있어야하기때문에
     * */
    @PostMapping(value = "/api/post/detail")
    public ResponseEntity<?> detail(@RequestBody PostBoardVO vo){

        vo = postBoardService.selectOne(vo);

        if ( vo != null ) {
            HashMap<String, PostBoardVO> result = new HashMap<String,PostBoardVO>();
            result.put("detail",vo);
            return ResponseEntity.status(200).body(result);
        }
        HashMap<String, String> result = new HashMap<String,String>();
        result.put("detail","null");
        return ResponseEntity.status(500).body(result);
    }

    /**
     * 공지사항의 List token 필요x
     * pageMaker = 페이징을 위한 객체
     * cri = 상품 데이터 검색을 위한 객체
     * return = 상품 데이터 List, 페이징 객체
     * */
    @PostMapping(value = "/api/post/list")
    public ResponseEntity<?> list (PageMaker pageMaker, SearchCri cri){
        // 시작하는 인덱스 설정.
        // searchCri에서 criteria를 상속받기 때문에
        cri.setStartNum();

        Map<String, Object> map = new LinkedHashMap<>();

        map.put("post", postBoardService.selectList());

        pageMaker.setCriteria(cri);
        pageMaker.setTotalDataCount(postBoardService.totalData(cri));

        map.put("pageMaker", pageMaker);

        return ResponseEntity.status(200).body(map);
    }


}
