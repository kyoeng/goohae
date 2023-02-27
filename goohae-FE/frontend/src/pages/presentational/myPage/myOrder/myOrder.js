import { Link } from 'react-router-dom';
import '../../../css/myPage/myOrder/myOrder.css';

export default function MyOrder(){


    //   const myOrderWrap = document.querySelector(".MyOrderWrap"),
    //   historyBtnWrap = myOrderWrap.querySelector(".SelectOrderCondition"),
    //   orderConditionWrap = myOrderWrap.querySelector(".OrderConditionWrap "),
    //   orderSelectedAproxiDate = myOrderWrap.querySelector(".OrderConditionDate"),
    //   orderSelectedAproxiDateToday = orderSelectedAproxiDate.querySelector('a'),
    //   orderSelectedDate = orderConditionWrap.querySelectorAll(".OrderDateSelect > input"),
    //   orderCinditionSelectOption = orderConditionWrap.querySelectorAll(".OrderCondition > option"),
    //   orderCondition = orderConditionWrap.querySelector(".OrderCondition"),
    //   orderConditionCheckBtn = orderConditionWrap.querySelector(".OrderDateSelect > a"),
    //   [orderHistoryBtn, orderCancelHistoryBtn] = myOrderWrap.querySelectorAll(".SelectOrderCondition>p>span"),
    //   orderTable = myOrderWrap.querySelector("tbody"),
    //   orderProductList = orderTable.querySelectorAll("tr");
    
    // let cancelOrderProduct = new Array();
    
    // console.log(orderCinditionSelectOption)
    
    // for (let i = 0; i < orderProductList.length; i++) {
    //   if (orderProductList[i].lastElementChild.innerText == "") {
    //     cancelOrderProduct.push(orderProductList[i]);
    //   }
    // }
    
    // historyBtnWrap.addEventListener("click", function (e) {
    //   const target = e.target.closest("p");
    
    //   if (target == orderHistoryBtn.parentNode) {
    //     orderCancelHistoryBtn.parentNode.style.borderBottom = "none";
    //     orderCancelHistoryBtn.style.color = "var(--DarkGray)";
    //     orderHistoryBtn.parentNode.style.borderBottom =
    //       "2px solid var(--PurpleBlue)";
    //     orderHistoryBtn.style.color = "var(--PurpleBlue)";
    //     for (let i = 0; i < cancelOrderProduct.length; i++) {
    //       cancelOrderProduct[i].style.display = "table-row";
    //     }
        
    //   } else if (target == orderCancelHistoryBtn.parentNode) {
    //     orderHistoryBtn.parentNode.style.borderBottom = "none";
    //     orderHistoryBtn.style.color = "var(--DarkGray)";
    //     orderCancelHistoryBtn.parentNode.style.borderBottom =
    //       "2px solid var(--PurpleBlue)";
    //     orderCancelHistoryBtn.style.color = "var(--PurpleBlue)";
    //     for (let i = 0; i < cancelOrderProduct.length; i++) {
    //       cancelOrderProduct[i].style.display = "none";
    //     }
    
        
    //   }
    // });
    
    // orderConditionCheckBtn.addEventListener("click", function (e) {
    //   const selecDate1 = new Date(orderSelectedDate[0].value.toString()),
    //     selecDate2 = new Date(orderSelectedDate[1].value.toString());
    
    //   e.preventDefault();
    
    //   for (let i = 0; i < orderProductList.length; i++) {
    //     if (
    //       new Date(orderProductList[i].firstElementChild.innerText) < selecDate1 ||
    //       new Date(orderProductList[i].firstElementChild.innerText) > selecDate2
    //     ) {
    //       orderProductList[i].style.display = "none";
    //     } else {
    //       orderProductList[i].style.display = "table-row";
    //       switch (orderCondition.value) {
    //         case "beforePay":
    //           checkValue("입금전");
    //           break;
      
    //         case "readyDelivery":
    //           checkValue("배송준비중");
    //           break;
      
    //         case "deliveryProcess":
    //           checkValue("배송중");
    //           break;
      
    //         case "deliveryComplete":
    //           checkValue("배송완료");
    //           break;
      
    //         case "orderCancel":
    //           checkValue("취소");
    //           break;
      
    //         case "orderChange":
    //           checkValue("교환");
    //           break;
      
    //         case "orderReturn":
    //           checkValue("반품");
    //           break;
      
    //         default:
    //           break;
    //       }
    //     }
    
    //   }
    
    //   orderCondition.value;
    // });
    
    // function checkValue(params) {
    //   if (orderCondition.value.includes("order")) {
    //     for (let i = 0; i < orderProductList.length; i++) {
    //       if (!orderProductList[i].lastElementChild.innerText.includes(`${params}`)) {
    //         orderProductList[i].style.display = "none";
    //       } else {
    //         orderProductList[i].style.display = "table-row";
    //       }
    //     }
    //   } else {
    //     for (let i = 0; i < orderProductList.length; i++) {
    //       if (!orderProductList[i].children[5].innerText.includes(`${params}`)) {
    //         orderProductList[i].style.display = "none";
    //       } else {
    //         orderProductList[i].style.display = "table-row";
    //       }
    //     }
    //   }
    // }
    
    // let beforOrderSelectedDateBtn = orderSelectedAproxiDateToday ;
    
    // orderSelectedAproxiDate.addEventListener("click", function (e) {
    //   e.preventDefault();
    //   let today = new Date();
    
    //     switch (`${e.target.innerText}`) {
    //       case "오늘": 
    //         beforOrderSelectedDateBtn.style.border = '1px solid var(--DarkGray)'
    //         beforOrderSelectedDateBtn.style.color = 'var(--DarkGray)'
    //         e.target.style.border = '1px solid var(--PurpleBlue)'
    //         e.target.style.color = 'var(--PurpleBlue)'
    //         orderSelectedDate[0].value = convertDateFormat(new Date());
    //         orderSelectedDate[1].value = convertDateFormat(new Date());
    //         beforOrderSelectedDateBtn = e.target;
    //         break;
    //       case "1주일":
    //         beforOrderSelectedDateBtn.style.border = '1px solid var(--DarkGray)'
    //         beforOrderSelectedDateBtn.style.color = 'var(--DarkGray)'
    //         e.target.style.border = '1px solid var(--PurpleBlue)'
    //         e.target.style.color = 'var(--PurpleBlue)'
    //         orderSelectedDate[0].value = convertDateFormat(new Date(today.setDate(today.getDate() - 7)));
    //         orderSelectedDate[1].value = convertDateFormat(new Date());
    //         beforOrderSelectedDateBtn = e.target;
    //         break;
    //       case "1개월":
    //         beforOrderSelectedDateBtn.style.border = '1px solid var(--DarkGray)'
    //         beforOrderSelectedDateBtn.style.color = 'var(--DarkGray)'
    //         e.target.style.border = '1px solid var(--PurpleBlue)'
    //         e.target.style.color = 'var(--PurpleBlue)'
    //         orderSelectedDate[0].value = convertDateFormat(new Date(today.setMonth(today.getMonth() - 1)));
    //         orderSelectedDate[1].value = convertDateFormat(new Date());
    //         beforOrderSelectedDateBtn = e.target;
    //         break;
    //       case "3개월":
    //         beforOrderSelectedDateBtn.style.border = '1px solid var(--DarkGray)'
    //         beforOrderSelectedDateBtn.style.color = 'var(--DarkGray)'
    //         e.target.style.border = '1px solid var(--PurpleBlue)'
    //         e.target.style.color = 'var(--PurpleBlue)'
    //         orderSelectedDate[0].value = convertDateFormat(new Date(today.setMonth(today.getMonth() - 3)));
    //         orderSelectedDate[1].value = convertDateFormat(new Date());
    //         beforOrderSelectedDateBtn = e.target;
    //         break;
    //       case "6개월":
    //         beforOrderSelectedDateBtn.style.border = '1px solid var(--DarkGray)'
    //         beforOrderSelectedDateBtn.style.color = 'var(--DarkGray)'
    //         e.target.style.border = '1px solid var(--PurpleBlue)'
    //         e.target.style.color = 'var(--PurpleBlue)'
    //         orderSelectedDate[0].value = convertDateFormat(new Date(today.setMonth(today.getMonth() - 6)));
    //         orderSelectedDate[1].value = convertDateFormat(new Date());
    //         beforOrderSelectedDateBtn = e.target;
    //         break;
    
    //         default:
    //         break;
    //     }
    // });
    
    // function convertDateFormat(date) {
    //   return date
    //     .toLocaleDateString()
    //     .replace(/\./g, "")
    //     .split(" ")
    //     .map((v, i) => (i > 0 && v.length < 2 ? "0" + v : v))
    //     .join("-");
    // }
  
    return(
        <div className="myOrderMain">
            <div className="OrderHistoryCategory">
                <a href="http://localhost:3000">홈&nbsp;&nbsp;&gt;</a>
                <Link to="/MyPage" className="myPageLink">&nbsp;&nbsp;마이쇼핑&nbsp;&nbsp;&gt;</Link>
                <Link to="/MyOrder" className="myOrderLink">&nbsp;&nbsp;주문조회&nbsp;&nbsp;</Link>
            </div>
            <section className="myOrderWrap">
                <p className="myOrderTitle">주문내역</p>
                <article className="myOrderHistory">
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
                            <input type="date" className="myOrderSelectDate"/>
                            <button type="submit" id="myOrderSelectDateBtn">조회</button>
                        </div>
                    </div>
                    <ul id="myOrderHistoryNotices">
                        <li className="myOrderHistoryNotice">기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 지난 주문내역을 조회하실 수 있습니다.</li>
                        <li className="myOrderHistoryNotice">주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</li>
                    </ul>
                </article>
                <article className="myOrderTableWrap">
                    <table className="myOrderTable">
                        <colgroup>
                            <col width="10%" />
                            <col width="10%" />
                            <col width="30%" />
                            <col width="7%" />
                            <col width="13%" />
                            <col width="13%" />
                            <col width="13%" />
                        </colgroup>
                        <thead id="myOrderTableThead">
                            <tr className="myOrderTableLine">
                                <th scope="col">주문일자</th>
                                <th scope="col">이미지</th>
                                <th scope="col">상품정보</th>
                                <th scope="col">수량</th>
                                <th scope="col">상품구매금액</th>
                                <th scope="col">주문처리상태</th>
                                <th scope="col">취소/교환/반품</th>
                            </tr>
                        </thead>
                        <tbody id="myOrderTableTbody">
                            <tr className="myOrderTableLine">
                                <td className="myOrderTableRow orderDate">2022-10-20</td>
                                <td className="myOrderTableRow myOrderProductImage"><img src="./Esker82Sofa2-1.jpg" alt="" /></td>
                                <td className="myOrderTableRow"> 
                                    <p className="myOrderProductName">에스커82 소파</p>
                                    <p>옵션: <span className="myOrderProductOption">화이트</span></p>
                                </td>
                                <td className="myOrderTableRow myOrderProductEA">1개</td>
                                <td className="myOrderTableRow myOrderProductPrice">1,200,000</td>
                                <td className="omyOrderTableRow rderProduct">배송준비중</td>
                                <td className="myOrderTableRow"> </td>
                            </tr>
                            <tr className="myOrderTableLine">
                                <td className="myOrderTableRow orderDate">2022-10-20</td>
                                <td className="myOrderTableRow myOrderProductImage"><img src="./Esker82Sofa2-1.jpg" alt="" /></td>
                                <td  className="myOrderTableRow">
                                    <p className="myOrderProductName">에스커82 소파</p>
                                    <p>옵션: <span className="myOrderProductOption">화이트</span></p>
                                </td>
                                <td className="myOrderTableRow myOrderProductEA">1개</td>
                                <td className="myOrderTableRow myOrderProductPrice">1,200,000</td>
                                <td className=" myOrderTableRow myOrderProduct">입금전</td>
                                <td className="myOrderTableRow"> </td>
                            </tr>
                            <tr className="myOrderTableLine">
                                <td className="myOrderTableRow orderDate">2022-10-20</td>
                                <td className="myOrderTableRow orderProductImage"><img src="./Esker82Sofa2-1.jpg" alt="" /></td>
                                <td className="myOrderTableRow">
                                    <p className="myOrderProductName">에스커82 소파</p>
                                    <p>옵션: <span className="myOrderProductOption">화이트</span></p>
                                </td>
                                <td className="myOrderTableRow myOrderProductEA">1개</td>
                                <td className="myOrderTableRow myOrderProductPrice">1,200,000</td>
                                <td className="myOrderTableRow myOrderProduct">배송완료</td>
                                <td className="myOrderTableRow"> </td>
                            </tr>
                            <tr className="myOrderTableRow myOrderTableLine">
                                <td className="myOrderTableRow orderDate">2022-10-20</td>
                                <td className="myOrderTableRow myOrderProductImage"><img src="./bed_1.png" alt="" /></td>
                                <td className="myOrderTableRow">
                                    <p className="myOrderProductName">카르톨로라제 침대</p>
                                    <p>옵션: <span className="myOrderProductOption">미드나잇 그린</span></p>
                                </td>
                                <td className="myOrderTableRow myOrderProductEA">1개</td>
                                <td className="myOrderTableRow myOrderProductPrice">1,200,000</td>
                                <td className="myOrderTableRow myOrderProduct">결제 취소</td>
                                <td className="myOrderTableRow"> 취소 완료</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </section>
        </div>
        
    );
}