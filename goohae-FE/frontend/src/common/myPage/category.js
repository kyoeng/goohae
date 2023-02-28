import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyPageSubPageCategoryBlock=styled.div`
margin: 158px 14px 0 12px;

.myPageLink{
    margin-top: 158px;
    font-size: 1.2rem;
}
#myPageSubLink{
    color: #505DD0;
    font-weight: bold;
}
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const MyPageSubPageCategory = ({ myPageSubLink,myPageSubLinkKr}) => (
    <MyPageSubPageCategoryBlock>
        <Link to="/" className="myPageLink">홈&nbsp;&nbsp;&gt;</Link>
        <Link to="/MyPage" className="myPageLink">&nbsp;&nbsp;마이페이지&nbsp;&nbsp;&gt;</Link>
        <Link to={myPageSubLink} className="myPageLink" id="myPageSubLink">&nbsp;&nbsp;{myPageSubLinkKr}&nbsp;&nbsp;</Link>
    </MyPageSubPageCategoryBlock>
);

export default MyPageSubPageCategory;