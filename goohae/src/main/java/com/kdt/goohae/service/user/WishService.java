package com.kdt.goohae.service.user;

import com.kdt.goohae.domain.user.WishVO;

public interface WishService {

    public String[] selectList(WishVO vo);
    public int insert(WishVO vo);
    public int delete(WishVO vo);
    public int checkedDelete(WishVO vo);
}
