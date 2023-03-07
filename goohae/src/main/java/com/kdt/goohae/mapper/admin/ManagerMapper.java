package com.kdt.goohae.mapper.admin;


import com.kdt.goohae.domain.admin.ManagerVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface ManagerMapper {
    ManagerVO selectOne(ManagerVO vo);
    ArrayList<ManagerVO> selectList();
    int insert(ManagerVO vo);
    int delete(ManagerVO vo);
    int update(ManagerVO vo);
}
