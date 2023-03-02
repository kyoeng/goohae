import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 아미페이지 서브페이지 메뉴 링크 
const myPageData = [
    {
        myPageSubPageLink: "/myOrder",
        myPageMenuTitle: "주문 내역",
        myPageMenuBoxContent: "고객님께서 주문하신 상품의 주문내역을 확인하실 수 있습니다.",
    },
    {
        myPageSubPageLink: "/memberInfo",
        myPageMenuTitle: "내정보",
        myPageMenuBoxContent: "회원이신 고객님의 개인정보를 관리하는 공간입니다.",
    },
    {
        myPageSubPageLink: "/shopppingCart",
        myPageMenuTitle: "장바구니",
        myPageMenuBoxContent: "회원님의 장바구니를 관리하는 곳입니다."
    },
    {
        myPageSubPageLink: "/wishList",
        myPageMenuTitle: "위시리스트",
        myPageMenuBoxContent: "관심상품으로 등록하신 상품의 목록을 보여드립니다.",
    },
    {
        myPageSubPageLink: "/myPost",
        myPageMenuTitle: "내 리뷰",
        myPageMenuBoxContent: "고객님께서 작성하신 게시물을 관리하는 공간입니다.",
    },
    {
        myPageSubPageLink: "/myAddress",
        myPageMenuTitle: "내 주소록",
        myPageMenuBoxContent: " 배송지를 등록하고 관리하실 수 있습니다.",
    },
]



const MyMenuWrap = styled.article`
`;

const MyPageMenuContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 900px;
    display: grid;
    grid-template: 30% 30% 30% / 30% 30% 30%;
    row-gap: 3.3%;
    column-gap: 3.3%;
    justify-content: space-between;
    margin-bottom: 100px;
`; 

const MyPageMenuBoxContent = styled.div` 
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 0 25px;
    padding-top: 34px;
    border: 1px solid;

    // 서브페이지 제목 
    .myPageMenuTitle {
        font-size: 2rem;
        font-family: Nanum Myeongjo;
        color: #1A1B23;
        font-weight: 800;
    }

    // 서브페이지 설명 
    .myPageMenuContent {
        font-size: 1.4rem;
        line-height:2rem;
        color: #9497AB;
    }

    //더보기 링크 
    .myPageOrderMenuMore{
        font-size: 1.4rem;
        font-weight: bold;
    }
;`

//사용 : <MyPageMenuBox myPageSubPageLink ="서브 페이지 링크" myPageMenuTitle="메뉴제목" myPageMenuBoxContent="서브페이지 설명 입력"/>
const MyPageMenuBox = ({ myPageSubPageLink, myPageMenuBoxContent, myPageMenuTitle }) => (
    <MyMenuWrap>
        <MyPageMenuContainer>
            {myPageData.map((data) => (
                <MyPageMenuBoxContent>
                    <Link to={data.myPageSubPageLink} className="myPageMenuTitle">{data.myPageMenuTitle}</Link>
                    <Link to={data.myPageSubPageLink}>
                        <p className="myPageMenuContent">
                            {data.myPageMenuBoxContent}
                        </p>
                    </Link>
                    <Link to={data.myPageSubPageLink} className="myPageOrderMenuMore">더보기&gt;</Link>
                </MyPageMenuBoxContent>
            ))}
        </MyPageMenuContainer>
    </MyMenuWrap>
);

export default MyPageMenuBox;