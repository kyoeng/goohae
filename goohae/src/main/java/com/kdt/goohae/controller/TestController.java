package com.kdt.goohae.controller;


import com.kdt.goohae.jwt.JwtService;
import com.kdt.goohae.service.TestService;
import com.kdt.goohae.domain.TestVO;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    private final TestService testService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public TestController(@Qualifier("testServiceImpl") TestService testService, JwtService jwtService, PasswordEncoder passwordEncoder) {
        this.testService = testService;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }


    @GetMapping("/test")
    public String test(@RequestBody TestVO vo) {
        String pw = vo.getPassword();

        vo = testService.test();

        if (vo != null) {
            if (passwordEncoder.matches(pw, vo.getPassword())) {
                String token = jwtService.createToken(vo.getId(), vo.getAuth(), (2 * 60 * 1000));
                return token;
            } else {
                return "error";
            }
        } else{
            return "error";
        }

    }

}
