package com.kdt.goohae.service;

import com.kdt.goohae.mapper.TestMapper;
import com.kdt.goohae.domain.TestVO;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TestServiceImpl implements TestService {

    private final TestMapper mapper;

    public TestServiceImpl(TestMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public List<TestVO> test() {
        return mapper.test();
    }
}
