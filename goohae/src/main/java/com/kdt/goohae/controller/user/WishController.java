package com.kdt.goohae.controller.user;

import com.kdt.goohae.domain.user.WishVO;
import com.kdt.goohae.service.user.WishService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@Slf4j
public class WishController {


    private final WishService wishService;

    public WishController(WishService wishService) {
        this.wishService = wishService;
    }


    /**
     * 유저의 위시리스트를 가져오는 로직 메소드
     * */
    @PostMapping(value = "/api/user/valid/wish/list")
    public ResponseEntity<?> selectList(HttpServletRequest httpServletRequest, WishVO vo){
        vo.setUserId((String) httpServletRequest.getAttribute("id"));
        return ResponseEntity.status(200).body(wishService.selectList(vo));
    }

    /**
     * 위시리스트에 추가 메서드
     * */
    @PostMapping(value = "/api/user/valid/wish/insert")
    public ResponseEntity<String> insert (@RequestBody WishVO vo, HttpServletRequest httpServletRequest) {
        vo.setUserId((String)httpServletRequest.getAttribute("id"));
        if(wishService.insert(vo)>0) {
            return ResponseEntity.status(200).body("isertSuccess");
        }
        return ResponseEntity.status(500).body("error");
    }

    /**
     * 위시리스트의 해당 상품을 삭제하는 메소드 ( 하나 기준 )
     * */
    @PostMapping(value = "/api/user/valid/wish/delete")
    public ResponseEntity<String> delete (@RequestBody WishVO vo, HttpServletRequest httpServletRequest){
        vo.setUserId((String)httpServletRequest.getAttribute("id"));
        if(wishService.delete(vo)>0) {
            return ResponseEntity.status(200).body("deleteSuccess");
        }
        return ResponseEntity.status(500).body("error");
    }

    /**
     * 위시리스트의 체크된 상품을 삭제하는 메소드 ( 하나 기준 )
     * 들어오는 값은 체크된 상품들의 코드를 배열로 가져옴.
     * */
    @PostMapping(value = "/api/user/valid/wish/checkeddelete")
    public ResponseEntity<String> checkedDelete (@RequestBody WishVO vo,  HttpServletRequest httpServletRequest){
        vo.setUserId((String) httpServletRequest.getAttribute("id"));
        if(wishService.checkedDelete(vo)>0) {
            return ResponseEntity.status(200).body("deleteSuccess");
        }
        return ResponseEntity.status(500).body("error");
    }

//    @PostMapping(value = "/api/user/valid/wish/checkedlist")
//    public ResponseEntity<?> checkedList (@RequestBody WishVO vo, HttpServletRequest httpServletRequest){
//        vo.setUserId((String) httpServletRequest.getAttribute("id"));
//        ArrayList<WishVO> result = new ArrayList<WishVO>();
//        result = wishService.checkedList();
//        return ResponseEntity.status(500).body("error");
//    }

}
