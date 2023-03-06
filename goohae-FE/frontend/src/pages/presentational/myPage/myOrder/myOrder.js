import { Link } from 'react-router-dom';
import { useMemo } from "react";
import  styles from '../../../css/myPage/myOrder/myOrder.module.css';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import OrderTable from '../../../../components/presentational/myPage/myOrder/myOrderTable';
import MyOrderHistory from '../../../../components/presentational/myPage/myOrder/myOrderTop';
export default function MyOrder() {

    const columns = useMemo(
        () => [
            {
                accessor: "myOrderDate",
                Header: "주문일자",
            },
            {
                accessor: "myOrderImage",
                Header: "이미지",
            },
            {
                accessor: "myOrderProductInfo",
                Header: "상품정보",
            },
            {
                accessor: "myOrderQuantity",
                Header: "수량",
            },
            {
                accessor: "myOrderPrice",
                Header: "상품구매금액",
            },
            {
                accessor: "myOrderState",
                Header: "주문처리상태",
            },
            {
                accessor: "myOrderOther",
                Header: "취소/교환/반품",
            },
        ],
        []
    );

    // const data = [
    //     {
    //         myOrderDate: "2022-10-20",
    //         myOrderImage: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
    //         myOrderProductInfo: "에스커82 소파  옵션: 화이트",
    //         myOrderQuantity: "1",
    //         myOrderPrice: "1,200,000",
    //         myOrderState: "배송준비중",
    //         myOrderOther:''
    //     },
    //     {
    //         myOrderDate: "2022-10-20",
    //         myOrderImage:  <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
    //         myOrderProductInfo: "에스커82 소파  옵션: 화이트",
    //         myOrderQuantity: "1",
    //         myOrderPrice: "1,200,000",
    //         myOrderState: "배송전",
    //         myOrderOther:''
    //     },       
    //     {
    //         myOrderDate: "2022-10-20",
    //         myOrderImage:  <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
    //         myOrderProductInfo: "에스커82 소파  옵션: 화이트",
    //         myOrderQuantity: "1",
    //         myOrderPrice: "1,200,000",
    //         myOrderState: "입금전",
    //         myOrderOther:''
    //     },       
    //     {
    //         myOrderDate: "2022-10-20",
    //         myOrderImage:  <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
    //         myOrderProductInfo: "에스커82 소파  옵션: 화이트",
    //         myOrderQuantity: "1",
    //         myOrderPrice: "1,200,000",
    //         myOrderState: "배송완료",
    //         myOrderOther:''
    //     },
    //     {
    //         myOrderDate: "2022-10-20",
    //         myOrderImage: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
    //         myOrderProductInfo: "에스커82 소파  옵션: 화이트",
    //         myOrderQuantity: "1",
    //         myOrderPrice: "1,200,000",
    //         myOrderState: "배송완료",
    //         myOrderOther:''
    //     },
    //     {
    //         myOrderDate: "2022-10-20",
    //         myOrderImage: <img src="./bed_1.png" alt="" />,
    //         myOrderProductInfo: "카르톨로라제 침대",
    //         myOrderQuantity: "1",
    //         myOrderPrice: "1,200,000",
    //         myOrderState: "결제 취소",
    //         myOrderOther:"취소 완료"
    //     }
    // ]

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



    return (
        <AppLayout>
            <div className="myOrderMain">
                <div className="OrderHistoryCategory">
                    <MyPageSubPageCategory myPageSubLinkKr="주문 내역" />
                </div>
                <section className="myOrderWrap">
                    <MyPsgeSubPageTitle myPsgeSubPageTitle="주문 내역" />
                    <MyOrderHistory />
                    <OrderTable columns={columns} />
                </section>
            </div>
        </AppLayout>

    );
}