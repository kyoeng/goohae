package com.kdt.goohae.controller;


import com.kdt.goohae.service.TestService;
import com.kdt.goohae.domain.TestVO;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    private final TestService testService;

    public TestController(@Qualifier("testServiceImpl") TestService testService) {
        this.testService = testService;
    }


    @GetMapping("/test")
    public List<TestVO> test() {
        return testService.test();
    }

}
