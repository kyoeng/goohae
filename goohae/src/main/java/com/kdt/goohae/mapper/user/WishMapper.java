package com.kdt.goohae.mapper.user;

import com.kdt.goohae.domain.user.WishVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface WishMapper {
    public String[] selectList(WishVO vo);
    public int insert(WishVO vo);
    public int delete(WishVO vo);
    public int checkedDelete(WishVO vo);
}
