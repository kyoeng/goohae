package com.kdt.goohae.service.admin;


import com.kdt.goohae.domain.admin.ManagerVO;

import java.util.ArrayList;

public interface ManagerService {

    ArrayList<ManagerVO> selectList();
    ManagerVO selectOne(ManagerVO vo);
    int insert(ManagerVO vo);
    int delete(ManagerVO vo);
    int update(ManagerVO vo);



}
