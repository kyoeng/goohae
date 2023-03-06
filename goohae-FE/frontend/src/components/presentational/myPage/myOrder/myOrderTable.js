import React from 'react'
import { useState } from 'react';
import styles from '../../../CSS/myPage/myOrder/myOrderTable.module.css'

export default function MyOrderTable() {

    const data = [
        {
            orderSeq: 11111,
            orderDate: "2022-10-20",
            img: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: 1,
            price: 1200000,
            deliStatus: "배송전",
            myOrderOther: ''
        },
        {
            orderSeq: 11112,
            orderDate: "2022-10-20",
            img: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: "1",
            price: 1200000,
            deliStatus: "입금전",
            myOrderOther: ''
        },
        {
            orderSeq: 11113,
            orderDate: "2022-10-20",
            img: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: "1",
            price: 1200000,
            deliStatus: "배송완료",
            myOrderOther: ''
        },
        {
            orderSeq: 11114,
            orderDate: "2022-10-20",
            img: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
            ProductName: "에스커82 소파  옵션: 화이트",
            productEa: "1",
            price: 1200000,
            deliStatus: "배송완료",
            myOrderOther: ''
        },
        {
            orderSeq: 111115,
            orderDate: "2022-10-20",
            img: <img src="./bed_1.png" alt="" />,
            ProductName: "카르톨로라제 침대",
            productEa: "1",
            price: 1200000,
            deliStatus: "결제 취소",
            // myOrderOther: "취소 완료"
        }
    ]

    return (
        <>
            <table className={styles.myOrderTable}>
                <thead className={styles.myOrderTableHead}>
                    <tr className={styles.myOrderTableLine}>
                        <th scope="col" className={styles.myOrderTableTitleTh}>주문일자</th>
                        <th scope="cos" className={styles.myOrderTableTitleTh}>이미지</th>
                        <th scope="col" className={styles.myOrderTableTitleTh}>상품정보</th>
                        <th scope="col" className={styles.myOrderTableTitleTh}>수량</th>
                        <th scope="col" className={styles.myOrderTableTitleTh}>상품구매금액</th>
                        <th scope="col" className={styles.myOrderTableTitleTh}>주문처리상태</th>
                        <th scope="col" className={styles.myOrderTableTitleTh}>취소/교환/반품</th>
                    </tr>

                </thead>
                <tbody className={styles.myOrderTableBody}>
                    {data.map((data) => (
                        <tr className={styles.myOrderTableLine}>
                            <td className={styles.myOrderTableRow}>
                                {data.orderDate}
                            </td>
                            <td className={styles.myOrderTableRow}>
                                <a href="#"><img src={data.img} alt="상품이미지" className={styles.myOrderTableProductImage} /></a>
                            </td>
                            <td className={styles.myOrderTableRow}>
                                <a href="#" className={styles.cartName}>
                                    <p className={[styles.myOrderProductPrice]}>{data.ProductName}</p>
                                </a>
                            </td>
                            <td className={styles.myOrderTableRow}>
                                <span className={styles.myOrderTableFontSize}>{data.productEa}</span>
                            </td>
                            <td className={styles.myOrderTableRow}>
                                <span className={styles.myOrderTableFontSize}></span>
                                {data.price}
                            </td>
                            <td className={styles.myOrderTableRow}>
                                {data.deliStatus}
                            </td>
                            <td className={styles.myOrderTableRow}>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
//------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// // import { getManageApplication } from '../../Utils/api';
// import MyOrderTableRow from "./myOrderTableRow";

// export default function MyOrderTable({ props }) {
//     const headerData = [
//         '주문일자',
//         '이미지',
//         '상품정보',
//         '수량',
//         '상품구매금액',
//         '주문처리상태',
//         '취소/교환/반품'
//     ]

// const tableData = [
//     {
//         orderSeq: 11111,
//         orderDate: "2022-10-20",
//         img: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
//         ProductName: "에스커82 소파  옵션: 화이트",
//         productEa: 1,
//         price: 1200000,
//         deliStatus: "배송전",
//         myOrderOther: ''
//     },
//     {
//         orderSeq: 11112,
//         orderDate: "2022-10-20",
//         img: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
//         ProductName: "에스커82 소파  옵션: 화이트",
//         productEa: "1",
//         price: 1200000,
//         deliStatus: "입금전",
//         myOrderOther: ''
//     },
//     {
//         orderSeq: 11113,
//         orderDate: "2022-10-20",
//         img: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
//         ProductName: "에스커82 소파  옵션: 화이트",
//         productEa: "1",
//         price: 1200000,
//         deliStatus: "배송완료",
//         myOrderOther: ''
//     },
//     {
//         orderSeq: 11114,
//         orderDate: "2022-10-20",
//         img: <img src="../../../stores/images/Esker82Sofa2-1.jpg" alt="" />,
//         ProductName: "에스커82 소파  옵션: 화이트",
//         productEa: "1",
//         price: 1200000,
//         deliStatus: "배송완료",
//         myOrderOther: ''
//     },
//     {
//         orderSeq: 111115,
//         orderDate: "2022-10-20",
//         // img: <img src="./bed_1.png" alt="" />,
//         ProductName: "카르톨로라제 침대",
//         productEa: "1",
//         price: 1200000,
//         deliStatus: "결제 취소",
//         // myOrderOther: "취소 완료"
//     }
// ]
//     return (
//         <>
//             <div>
//                 {tableData.length !== 0 && (
//                     <table>
//                         <thead>
//                             <tr>
//                                 {headerData.map(i => <th>{i}</th>)}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {tableData.map((d, i) => {
//                                 return (<MyOrderTableRow key={i} data={d} />);
//                             }
//                             )}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </>
//     );
// }