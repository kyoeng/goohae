import React from 'react';
import styles from '../../../CSS/myPage/myPage/myPageTopWrap.module.css'
import MyPageProcessBox from "./myPageProcessInnerContainer";

export default function MyPageTopWrap() {
    return (
        <section className={styles.myPageWrap}>
            <div className={styles.myPageWMent}>
                <p className={styles.myPageMentContent}><span className={styles.myPageMentContentName}>유정현</span>님 환영합니다.</p>
                <p className={styles.myPageInfoMent}>일반회원으로 <span className={styles.myPageInfoMenMinPrice}>10,000</span>원 이상 구매 시 <span className={styles.myPageInfoMenMinPrice}>2%</span> 추가 적립을 받을 수 있습니다.</p>
            </div>
            {/* 주문현황박스 */}
            <MyPageProcessBox myPageCaseTitle="myPageCaseTitle" myPageCase="myPageCase" />
        </section>
    );
}
