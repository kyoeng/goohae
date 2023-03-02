
import { styled } from 'styled-components';











const MyOrderHistorContainer=styled.article`

    margin: 20px 0;

.myOrderSelectOrderCondition {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.myOrderSelectOrderCondition .myOrderInquireOrderCondition,
.myOrderSelectOrderCondition .myOrderNegativeOrderCondition {
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.5rem;
}

.myOrderSelectOrderCondition p span {
}

.myOrderSelectOrderCondition .myOrderInquireOrderCondition{
    border-bottom: 2px solid #505DD0;
    color: #505DD0;
}

/* .myOrderSelectOrderCondition p:first-of-type span {
} */

.myOrderSelectOrderCondition .myOrderNegativeOrderCondition {
    color: black;
}

.myOrderConditionWrap {
    width: 100%;
    height: 130px;
    border: solid 2px var(--LightGray);
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}

.myOrderConditionWrap>.myOrderCondition {
    display: inline-block;
    padding: 11px;
    width: 20%;
    height: 40px;
    font-size: 1.4rem
}

.OrderConditionDate {
    display: flex;
    flex-flow: row nowrap;
    padding: 0 10px;
    padding-right: 5px;
}

.OrderConditionDate .myOrderSelectConditionDate {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 36px;
    text-align: center;
    border: 1px solid black;
    font-size: 1.5rem;
    padding: 4px;
    margin-right: 5px;
}

.myOrderDateSelectContainer {
    display: flex;
    gap: 10px;
    align-items: center;
}

.myOrderDateSelectContainer>.myOrderSelectDate {
    display: inline-block;
    width: 200px;
    height: 40px;
    padding: 5px;
}

.myOrderDateSelectContainer #myOrderSelectDateBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 60px;
    border: 1px solid;
    font-size: 1.2rem;
    padding: 4px;
    background-color: black;
    color: white;
}

.myOrderHistory #myOrderHistoryNotices{
    margin-top: 10px;
    margin-bottom: 40px;
}

.myOrderHistory #myOrderHistoryNotices .myOrderHistoryNotice {
    margin: 5px 0;
    font-size: 1.5rem;
    color: #9497AB;
}`
const MyOrderHistory= ({ myPageSubLink, myPageSubLinkKr }) => (

<MyOrderHistorContainer>
                        <div className="myOrderSelectOrderCondition">
                            <p className="myOrderInquireOrderCondition">주문내역조회 0</p>
                            <p className="myOrderNegativeOrderCondition">취소&nbsp;·&nbsp;반품&nbsp;·&nbsp;교환 내역 0</p>
                        </div>
                        <div className="myOrderConditionWrap">
                            <select className="myOrderCondition" name="OrderCondition" >
                                <option value="totalOrderCondition">전체 주문처리상태</option>
                                <option value="beforePay">입금전</option>
                                <option value="readyDelivery">배송준비중</option>
                                <option value="deliveryProcess">배송중</option>
                                <option value="deliveryComplete">배송완료</option>
                                <option value="orderCancel">취소</option>
                                <option value="orderChange">교환</option>
                                <option value="orderReturn">반품</option>
                            </select>
                            <div className="OrderConditionDate">
                                <a className="myOrderSelectConditionDate">오늘</a>
                                <a className="myOrderSelectConditionDate">1주일</a>
                                <a className="myOrderSelectConditionDate">1개월</a>
                                <a className="myOrderSelectConditionDate">3개월</a>
                                <a className="myOrderSelectConditionDate">6개월</a>
                            </div>
                            <div className="myOrderDateSelectContainer">
                                <input type="date" className="myOrderSelectDate" />
                                <span>&nbsp;~&nbsp;</span>
                                <input type="date" className="myOrderSelectDate" />
                                <button type="submit" id="myOrderSelectDateBtn">조회</button>
                            </div>
                        </div>
                        </article>
);
export default myOrderHistory;