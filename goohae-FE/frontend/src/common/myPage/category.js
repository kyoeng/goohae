import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//홈링크
const MyPageSubPageCategoryBlock=styled.div`
margin: 158px 14px 0 12px;

//마이페이지 링크
.myPageLink{
    margin-top: 158px;
    font-size: 1.2rem;
}

// 해당페이지 링크
#myPageSubLink{
    color: #505DD0;
    font-weight: bold;
}
`;

// 사용 : <MyPageSubPageCategory myPageSubLinkKr="해당페이지 한글 이름"/>
const MyPageSubPageCategory = ({ myPageSubLink,myPageSubLinkKr}) => (
    <MyPageSubPageCategoryBlock>
        
        {/* 홈링크 */}
        <Link to="/" className="myPageLink">홈&nbsp;&nbsp;&gt;</Link>
        
        {/* 마이페이지 링크 */}
        <Link to="/MyPage" className="myPageLink">&nbsp;&nbsp;마이페이지&nbsp;&nbsp;&gt;</Link>
        
        {/*  해당페이지 링크 */}
        <Link to={myPageSubLink} className="myPageLink" id="myPageSubLink">&nbsp;&nbsp;{myPageSubLinkKr}&nbsp;&nbsp;</Link>
    </MyPageSubPageCategoryBlock>
);

export default MyPageSubPageCategory;