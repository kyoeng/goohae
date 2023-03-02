import React from 'react';
import styled from 'styled-components';
import MyPageProcessBox from "./myPageProcessInnerContainer";

const MyPageWrap = styled.section`
.myPageWMent{
    text-align: center;
}

.myPageMentContent,
.myPageMentContentName {
    font-size: 2rem;
    font-family: NanumMyeongjo;
    font-weight: bold;
}

.myPageMentContent>.myPageMentContentName {
    color: #505DD0;
}

.myPageInfoMent {
    margin: 40px 0;
    font-size: 1.5rem;
}

.myPageInfoMenMinPrice {
    font-size: 1.5rem;
    color: #505DD0;
}
;`

const MyPageTopWrap = () => (
    <MyPageWrap>
        <div className="myPageWMent">
            <p className="myPageMentContent"><span className="myPageMentContentName">유정현</span>님 환영합니다.</p>
            <p className="myPageInfoMent">일반회원으로 <span className="myPageInfoMenMinPrice">10,000</span>원 이상 구매 시 <span className="myPageInfoMenMinPrice">2%</span> 추가 적립을 받을 수 있습니다.</p>
        </div>
        {/* 주문현황박스 */}
        <MyPageProcessBox myPageCaseTitle="myPageCaseTitle" myPageCase="myPageCase" />
    </MyPageWrap>
);

export default MyPageTopWrap;