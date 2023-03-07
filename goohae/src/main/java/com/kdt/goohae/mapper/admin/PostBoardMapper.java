package com.kdt.goohae.mapper.admin;

import com.kdt.goohae.domain.admin.PostBoardVO;
import com.kdt.goohae.domain.forPaging.SearchCri;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface PostBoardMapper {

    public ArrayList<PostBoardVO> selectList();

    public PostBoardVO selectOne(PostBoardVO vo);

    public int insert(PostBoardVO vo);
    public int update(PostBoardVO vo);

    public int delete(PostBoardVO vo);
    public int totalData(SearchCri cri);
}
