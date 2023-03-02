import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

import data2 from "../../../../dummyData/data2.json"
// import makeData from './makeData'
import Product_Box from './../../../../common/Product_Box';
const data = [
        {
            orderDate: "2022-10-20",
            myOrderImage: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: 1,
            price: 1200000,
            deliStatus: "배송준비중",
            myOrderOther:''
        },
        {
            orderDate: "2022-10-20",
            myOrderImage:  <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: 1,
            price: 1200000,
            deliStatus: "배송전",
            myOrderOther:''
        },       
        {
            orderDate: "2022-10-20",
            myOrderImage:  <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: "1",
            price: 1200000,
            deliStatus: "입금전",
            myOrderOther:''
        },       
        {
            orderDate: "2022-10-20",
            myOrderImage:  <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: "1",
            price: 1200000,
            deliStatus: "배송완료",
            myOrderOther:''
        },
        {
            orderDate: "2022-10-20",
            myOrderImage: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: "1",
            price: 1200000,
            deliStatus: "배송완료",
            myOrderOther:''
        },
        {
            orderDate: "2022-10-20",
            myOrderImage: <img src="./bed_1.png" alt="" />,
            ProductName: "카르톨로라제 침대",
            productEa: "1",
            price: 1200000,
            deliStatus: "결제 취소",
            myOrderOther:"취소 완료"
        }
    ]

const MyOrderTableWrap = styled.article`
    .myOrderTable{
        width: 100%;
        margin: 0 auto;
        border-collapse: collapse;
    }

    .myOrderTableHead,
    .myOrderTableBody {
        border-bottom: 2px solid #1A1B23;
    }

    .myOrderTableHead{
        height: 40px;
        text-align: center;
        font-size: 1.4rem;  
    }
    .myOrderTableBodyLine{
        height: 70px;
        font-size: 1.4rem;
        font-weight: 400;
        overflow: hidden;
    }

    .myOrderTableLine:not(:last-of-type) {
        border-bottom: 1px solid #1A1B23;
    }
// ------

.myOrderTable th {
    text-align: center;
    font-size: 1.5rem;
}

>.myOrderTableLine {
    font-size: 1.4rem;
    font-weight: 400;
    overflow: hidden;
}

.myOrderTableRow {
    font-size: 1.4rem;
}

.myOrderTableRow:first-of-type{
    padding: 0 10px;
}

.myOrderTableRow:nth-of-type(n+3):nth-of-type(-n+7){
    padding: 0 10px;
    text-align: right;
    box-sizing: border-box;
}
.myOrderTableLine>th:first-of-type {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
}

.myOrderTableLine>img {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.myOrderTableRow:nth-of-type(3)  {
    padding-left: 30px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
}

.myOrderProductPrice{
    color: #1A1B23;
    font-size: 1.4rem;
    font-weight : 700;
    margin-bottom: 11px;
}

.myOrderTable .myOrderTableRow {
    text-align: center;
    height: 100px;
}

`
// const remove=useCallback((userId) => {
    
//   },
//   [second],
// )

function OrderTable({ img,title }) {

    return (
        <MyOrderTableWrap>
            <table className="myOrderTable">
                <thead className="myOrderTableHead">
                    <tr className="myOrderTableLine">
                        <th scope="col" className="myOrderTableTitleTh">주문일자</th>
                        <th scope="cos" className="myOrderTableTitleTh">이미지</th>
                        <th scope="col" className="myOrderTableTitleTh">상품정보</th>
                        <th scope="col" className="myOrderTableTitleTh">수량</th>
                        <th scope="col" className="myOrderTableTitleTh">상품구매금액</th>
                        <th scope="col" className="myOrderTableTitleTh">주문처리상태</th>
                        <th scope="col" className="myOrderTableTitleTh">취소/교환/반품</th>
                    </tr>

                </thead>
                <tbody className="myOrderTableBody">
                {data.map((data) => (
                    <tr className="myOrderTableLine">
                        <td className="myOrderTableRow">
                            {data.orderDate}
                        </td>
                        <td className="myOrderTableRow">
                            <a href="#"><img src={img} alt="상품이미지" className="myOrderTableProductImage" /></a>
                        </td>
                        <td className="myOrderTableRow">
                            <a href="#" className="cartName">
                                <p className="myOrderProductPrice myOrderTableFontSize">{data.ProductName}</p>
                            </a>
                        </td>
                        <td className="myOrderTableRow">
                            <span className="myOrderTableFontSize">{data.productEa}</span>
                        </td>
                        <td className="myOrderTableRow">
                            <span className="myOrderTableFontSize"></span>
                            {data.price}
                        </td>
                        <td className="myOrderTableRow">
                            {data.deliStatus}
                        </td>
                        <td className="myOrderTableRow">
                            
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </MyOrderTableWrap>
    )
}
export default OrderTable;