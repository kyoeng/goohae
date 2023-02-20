package com.kdt.goohae.mapper;


import com.kdt.goohae.domain.TestVO;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface TestMapper {

    TestVO test();

}
