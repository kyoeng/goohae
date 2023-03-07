package com.kdt.goohae.service.admin;

import com.kdt.goohae.domain.admin.PostBoardVO;
import com.kdt.goohae.domain.forPaging.SearchCri;
import com.kdt.goohae.mapper.admin.PostBoardMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PostBoardServiceImpl implements PostBoardService {

    PostBoardMapper postBoardMapper;

    public PostBoardServiceImpl(PostBoardMapper postBoardMapper) {
        this.postBoardMapper = postBoardMapper;
    }

    public ArrayList<PostBoardVO> selectList(){return postBoardMapper.selectList();}

    public PostBoardVO selectOne(PostBoardVO vo) {return postBoardMapper.selectOne(vo); }

    public int insert(PostBoardVO vo){
        return postBoardMapper.insert(vo);
    }
    public int update(PostBoardVO vo){
        return postBoardMapper.update(vo);
    }

    public int delete(PostBoardVO vo){
        return postBoardMapper.delete(vo);
    }
    public int totalData(SearchCri cri){return postBoardMapper.totalData(cri);}
}
