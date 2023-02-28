import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const myPageProcessData = [
    {
        myPageCaseTitle: "입금전",
        myPageCase: "0",
    },
    {
        myPageCaseTitle: "배송 준비 중",
        myPageCase: "0",
    },
    {
        myPageCaseTitle: "배송 중",
        myPageCase: "0",
    },
    {
        myPageCaseTitle: "배송 완료",
        myPageCase: "0",
    },
    //     {
    //         myPageCaseTitle: "주문 기타",
    //         myPageCaseList: [{
    //             myPageCaseList: "취소",
    //             myPageCaseList:"교환",
    //             myPageCaseList:"환불"
    //         }
]
const myPageotherProcessData = [
    {

    }
]
const MyPageProcessContainer = styled.div` 
    width:100%;
    display: flex;
    // flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 34px;
    
    //프로세스컨테이너
    .myPageOrderProcessInnerContainer{
        width: 15%;
        height: 80px;
        border-right: 1px solid #9497AB;
        float:lest;
    }

    
    // 프로세스 제목
    .myPageCaseTitle {
        font-size: 1.4rem;
        margin-bottom: 20px;
        font-weight: bold;
    }
    
    // 프로세스당 건 수
    .myPageCase {
        display: inline-block;
        font-size: 1.6rem;
        font-weight: bold;
        color: #505DD0;
    }
    //
    .myPageLastCaseTitle{
        font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 5px;
    }
  
    //주문 기타 컨테이너
    .myPageOrderProcessLastInnerContainer{
        width: 15%;
        height: 80px;
        float:lest;
    }

    //주문 기타 리스트
    #myPageOrderOtherCaseList{
        margin-bottom: 5px;
        font-size: 1.4rem;
        color: #9497AB;
        // font-size: 1.3rem;
        // color: #9497AB;
        // margin-bottom: 5px;
    }

    //주문 기타 건수 
    .myPageOrderOtherCase{
        color: #505DD0;
    }
;`

//사용 : <MyPageProcessBox myPageOrderCaseTitle ="프로세스제목" myPageOrderCase="프로세스당 건 수"/>
const MyPageProcessBox = ({ myPageCaseTitle, myPageCase }) => (
    <MyPageProcessContainer>
        {
            myPageProcessData.map((data) => (
                <>
                    <div className="myPageOrderProcessInnerContainer">

                        {/* 프로세스 제목 */}
                        <p className="myPageCaseTitle">{data.myPageCaseTitle}</p>

                        {/* 프로세스당 건 수 */}
                        <span className="myPageCase">{data.myPageCase}</span>


                    </div>
                    {/* <img src="./myPageMain/arrowRight.png" alt="" /> */}
                </>
            ))
        }
        {/* 주문기타 리스트*/}
        <div className="myPageOrderProcessLastInnerContainer">
            <p className="myPageCaseTitle" id="myPageLastCaseTitle">주문 기타</p>
            <ul>
                <li className="myPageOrderOtherCaseList">취소&nbsp;&nbsp;&nbsp;<span className="myPageOrderOtherCase">0</span> 건</li>
                <li className="myPageOrderOtherCaseList">교환&nbsp;&nbsp;&nbsp;<span className="myPageOrderOtherCase">0</span> 건</li>
                <li className="myPageOrderOtherCaseList">환불&nbsp;&nbsp;&nbsp;<span className="myPageOrderOtherCase">0</span> 건</li>
            </ul>
        </div>
    </MyPageProcessContainer>
);

export default MyPageProcessBox;