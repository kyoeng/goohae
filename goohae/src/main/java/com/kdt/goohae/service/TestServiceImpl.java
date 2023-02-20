package com.kdt.goohae.service;

import com.kdt.goohae.mapper.TestMapper;
import com.kdt.goohae.domain.TestVO;
import org.springframework.stereotype.Service;



@Service
public class TestServiceImpl implements TestService {

    private final TestMapper mapper;

    public TestServiceImpl(TestMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public TestVO test() {
        return mapper.test();
    }
}
