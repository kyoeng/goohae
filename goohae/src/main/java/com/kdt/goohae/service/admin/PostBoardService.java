package com.kdt.goohae.service.admin;

import com.kdt.goohae.domain.admin.PostBoardVO;
import com.kdt.goohae.domain.forPaging.SearchCri;

import java.util.ArrayList;


public interface PostBoardService {

    public ArrayList<PostBoardVO> selectList();
    public PostBoardVO selectOne(PostBoardVO vo);
    public int insert(PostBoardVO vo);
    public int update(PostBoardVO vo);
    public int delete(PostBoardVO vo);
    public int totalData(SearchCri cri);

}
