package com.kdt.goohae.service.user;

import com.kdt.goohae.domain.user.UserVO;

public interface UserService {

    /* 로그인 및 회원정보 */
    UserVO getUserData(UserVO vo);

    /* 회원가입 */
    int join(UserVO vo);

    /* 패스워드 수정 */
    int changePassword(UserVO vo);

    /* 배송지 수정 */
    int changeAddress(UserVO vo);

}
