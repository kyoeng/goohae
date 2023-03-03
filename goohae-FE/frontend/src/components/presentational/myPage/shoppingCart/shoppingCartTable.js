import React, { useCallback } from 'react';
import styled from 'styled-components';


const ShoppingCartTableWrap = styled.article`

    margin: 0 auto;

.myPostUpper #shoppingCartTableSelect {
    font-size: 12px;
}

.shoppingCartTableWrap .shoppingCartTableOption,
.shoppingCartTableWrap #shoppingCartTableSelect  {
    color:#1A1B23;
}

.shoppingCartTableWrap {
    width: 100%;
    /* margin: 50px auto;    */
    margin-bottom: 200px;
}

/* ====================Table=================== */
/* ====================Table=================== */
/* ====================Table=================== */


.shoppingCartTable {
    width: 100%;
    margin: 10px auto;
    border-collapse: collapse;
}


.shoppingCartTitleThaed {
    border-bottom: 2px solid #1A1B23;
    text-align: center;
    height: 40px;
}

.shoppingCartTableLine {
    border-bottom: 1px solid #1A1B23;
    height: 140px;
}

.shoppingCartTableRow {
    border-bottom: 2px solid #1A1B23;
    text-align: center;
    height: 70px;
}

.shoppingCartTableRow:nth-of-type(3){
    text-align: left;
    font-weight: 700;
    padding-left: 10px;
}
.shoppingCartTableRow:nth-of-type(4){
    text-align: center;
}
.shoppingCartTableCount{
    text-align:center;
    padding:0;
    width: 15px;
    height: 20px;
}

.shoppingCartTableRow:nth-of-type(5){
    padding:0 10px;
    text-align: right; 
} 

 .myPostSubject:hover{
    color: #505DD0;
}

.nondisplay{
    display: none;
}
`

const ShppingCartTable = () => {
    const orderInfo = [
        {
            orderSeq: 1,
            productName: "월넛 빈티지 우드 프레임 침대 + 클라우드 매트리스 Queen set",
            productEa: 1,
            price: "100000",
        }
    ]

    // //상품 수량 +-버튼 핸들러
    // const amountInputHandler = event => {
    //     onChangeProps(orderInfo.orderSeq, 'productEa', +event.target.value);
    // };

    // const amountIncreaseHandler = event => {
    //     event.preventDefault();
    //     onChangeProps(orderInfo.orderSeq, 'productEa', orderInfo.productEa + 1);
    // };

    // const amountDecreaseHandler = event => {
    //     event.preventDefault();
    //     onChangeProps(orderInfo.orderSeq, 'productEa', orderInfo.productEa - 1);
    // };

    // //+-버튼 클릭시 상품수량 체크
    // useEffect(() => {
    //     setIsBtnValid(orderInfo.productEa > 1);
    // }, [orderInfo.productEa]);

    // const onChangeProps = (orderSeq, key, value) => {
    //     setorderInfoList(prevState => {
    //         return prevState.map(obj => {
    //             if (obj.orderSeq === orderSeq) {
    //                 return { ...obj, [key]: value };
    //             } else {
    //                 return { ...obj };
    //             }
    //         });
    //     });
    // };



    return (
        <ShoppingCartTableWrap>
            <table className="shoppingCartTable">
                <colgroup>
                    <col width="4%" />
                    <col width="14%" />
                    <col width="52%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                </colgroup>
                <thead className="shoppingCartTitleThaed">
                    <tr>
                        <th scope="col" className="shoppingCartTitleTh">
                            선택
                            {/* <label>
                        <input type="checkbox" name="checkAll" className="shoppingCartCheck" checked="" value="selectAll" onclick="selectAll(this.checked)" />
                    </label> */}
                        </th>
                        <th scope="cos" className="shoppingCartTitleTh" style={{ display: 'none' }}>주문번호</th>
                        <th scope="cos" className="shoppingCartTitleTh">이미지</th>
                        <th scope="col" className="shoppingCartTitleTh">상품정보</th>
                        <th scope="col" className="shoppingCartTitleTh">수량</th>
                        <th scope="col" className="shoppingCartTitleTh">상품금액</th>
                        <th scope="col" className="shoppingCartTitleTh">삭제</th>
                    </tr>
                </thead>
                <tbody className="shoppingCartTableTbody">
                    {orderInfo.map((data) => (
                        <tr className="shoppingCartTableLine">
                            <td className="shoppingCartTableRow">
                                <input type="checkbox" name="checkbox" className="shoppingCartTableChoice" defaultValue={10000} onclick="Calculator()" />
                            </td>
                            <td className="shoppingCartTableRow" style={{ display: 'none' }} >
                                <p className="shoppingCartTableProductName shoppingCartTableFontSize">{data.orderSeq}</p>
                            </td>
                            <td className="shoppingCartTableRow">
                                <a href="#"><img src="../images/icon/HunkerBed1-1.jpg" alt="상품이미지" className="shoppingCartTableProductImage" /></a>
                            </td>
                            <td className="shoppingCartTableRow">
                                <a href="#" className="cartName">
                                    <p className="shoppingCartTableProductName shoppingCartTableFontSize">{data.productName}</p>
                                </a>
                            </td>
                            <td className="shoppingCartTableRow">
                                <span className="shoppingCartTableFontSize"  >{data.productEa}</span>
                                <input type="button" className="shoppingCartTableCount" defaultValue="+" />
                                <input type="button" className="shoppingCartTableCount" defaultValue="-" />
                            </td>
                            <td className="shoppingCartTableRow">
                                <span className="shoppingCartTableFontSize"></span>
                                {data.price}
                            </td>
                            <td className="shoppingCartTableRow">
                                <button className="shoppingCartTableBtn">
                                    삭제
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* </article> */}
            <div className="shoppingCartTotalPriceContainer">
                <div className="shoppingCartTotalPrcieInner">
                    <p className="shoppingCartTotalPrice totals" />
                    <p className="shoppingCartTotalPrice plusImg" />
                    <p className="shoppingCartTotalPrice equalImg" />
                </div>
                <div className="shoppingCartOrderButtonBox">
                    <a className="btnDisabled shoppingCartOrderButton" href="../memberPayment/memberPayment.html">선택상품 주문</a>
                    <a className="btnDisabled shoppingCartOrderButton" href="../memberPayment/memberPayment.html">전체상품 주문</a>
                </div>
            </div>
            {/* </section> */}
        </ShoppingCartTableWrap>
    );
}
export default ShppingCartTable