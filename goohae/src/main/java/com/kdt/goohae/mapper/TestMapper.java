package com.kdt.goohae.mapper;


import com.kdt.goohae.domain.TestVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TestMapper {

    List<TestVO> test();

}
