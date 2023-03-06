
import { styled } from 'styled-components';
import styles from '../../../CSS/myPage/myOrder/myOrderTop.module.css';

export default function MyOrderHistory({ myPageSubLink, myPageSubLinkKr }) {
return(
<article className={styles.myOrderHistorContainer}>
                        <div className={styles.myOrderSelectOrderCondition}>
                            <p className={styles.myOrderInquireOrderCondition}>주문내역조회 0</p>
                            <p className={styles.myOrderNegativeOrderCondition}>취소&nbsp;·&nbsp;반품&nbsp;·&nbsp;교환 내역 0</p>
                        </div>
                        <div className={styles.myOrderConditionWrap}>
                            <select className={styles.myOrderCondition} name="OrderCondition" >
                                <option value="totalOrderCondition">전체 주문처리상태</option>
                                <option value="beforePay">입금전</option>
                                <option value="readyDelivery">배송준비중</option>
                                <option value="deliveryProcess">배송중</option>
                                <option value="deliveryComplete">배송완료</option>
                                <option value="orderCancel">취소</option>
                                <option value="orderChange">교환</option>
                                <option value="orderReturn">반품</option>
                            </select>
                            <div className={styles.orderConditionDate}>
                                <a className={styles.myOrderSelectConditionDate}>오늘</a>
                                <a className={styles.myOrderSelectConditionDate}>1주일</a>
                                <a className={styles.myOrderSelectConditionDate}>1개월</a>
                                <a className={styles.myOrderSelectConditionDate}>3개월</a>
                                <a className={styles.myOrderSelectConditionDate}>6개월</a>
                            </div>
                            <div className={styles.myOrderDateSelectContainer}>
                                <input type="date" className={styles.myOrderSelectDate} />
                                <span>&nbsp;~&nbsp;</span>
                                <input type="date" className={styles.myOrderSelectDate} />
                                <button type="submit" id={styles.myOrderSelectDateBtn}>조회</button>
                            </div>
                        </div>
                        <ul id={styles.myOrderHistoryNotices}>
                            <li className={styles.myOrderHistoryNotice}>기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 지난 주문내역을 조회하실 수 있습니다.</li>
                            <li className={styles.myOrderHistoryNotice}>주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</li>
                        </ul>
                        </article>
);
}