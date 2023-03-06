import React from 'react';
import styles from "../../../CSS/myPage/myPage/myPageProcessInnerContainer.module.css"
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

]

//사용 : <MyPageProcessBox myPageOrderCaseTitle ="프로세스제목" myPageOrderCase="프로세스당 건 수"/>
export default function MyPageProcessBox({ myPageCaseTitle, myPageCase }) {
    return (
        <div  class={styles.myPageMyOrder}>
            {/* 박스 타이틀 */}
            <div className={styles.myPageOrederWrap}>
                <p className={styles.myPageOrederTitle}>나의 주문처리 현황</p>
                <p className={styles.myPageOrderTitleContent}>최근 3개월 기준</p>
            </div>

            {/* 프로세스 컨테이너 */}
            <div className={styles.myPageProcessContainer}>
                {myPageProcessData.map((data) => (
                    <div className={styles.myPageOrderProcessInnerContainer}>

                        {/* 프로세스 제목 */}
                        <p className={styles.myPageCaseTitle}>{data.myPageCaseTitle}</p>

                        {/* 프로세스당 건 수 */}
                        <span className={styles.myPageCase}>{data.myPageCase}</span>
                    </div>
                ))}

                {/* 주문기타 리스트*/}
                <div className={styles.myPageOrderProcessLastInnerContainer}>
                    <p className={styles.myPageCaseTitle} id="myPageLastCaseTitle">주문 기타</p>
                    <ul>
                        <li className={styles.myPageOrderOtherCaseList}>취소&nbsp;&nbsp;&nbsp;<span className={styles.myPageOrderOtherCase}>0</span> 건</li>
                        <li className={styles.myPageOrderOtherCaseList}>교환&nbsp;&nbsp;&nbsp;<span className={styles.myPageOrderOtherCase}>0</span> 건</li>
                        <li className={styles.myPageOrderOtherCaseList}>환불&nbsp;&nbsp;&nbsp;<span className={styles.myPageOrderOtherCase}>0</span> 건</li>
                    </ul>
                </div>
            </div>
        </div>
    );

}