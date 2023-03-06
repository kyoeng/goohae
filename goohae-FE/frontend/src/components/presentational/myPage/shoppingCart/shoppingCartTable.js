import React, { useCallback } from 'react';
import styles from '../../../CSS/myPage/shoppingCart/shoppingCartTable.module.css';

export default  function ShppingCartTable(){
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
        <article className={styles.shoppingCartTableWrap}>
            <table className={styles.shoppingCartTable}>
                <colgroup>
                    <col width="4%" />
                    <col width="14%" />
                    <col width="52%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                </colgroup>
                <thead className={styles.shoppingCartTitleThaed}>
                    <tr>
                        <th scope="col" className={styles.shoppingCartTitleTh}>
                            선택
                            {/* <label>
                        <input type="checkbox" name="checkAll" className={styles.shoppingCartCheck} checked="" value="selectAll" onclick="selectAll(this.checked)" />
                    </label> */}
                        </th>
                        <th scope="cos" className={styles.shoppingCartTitleTh}>이미지</th>
                        <th scope="col" className={styles.shoppingCartTitleTh}>상품정보</th>
                        <th scope="col" className={styles.shoppingCartTitleTh}>수량</th>
                        <th scope="col" className={styles.shoppingCartTitleTh}>상품금액</th>
                        <th scope="col" className={styles.shoppingCartTitleTh}>삭제</th>
                    </tr>
                </thead>
                <tbody className={styles.shoppingCartTableTbody}>
                    {orderInfo.map((data) => (
                        <tr className={styles.shoppingCartTableLine}>
                            <td className={styles.shoppingCartTableRow}>
                                <input type="checkbox" name="checkbox" className={styles.shoppingCartTableChoice} defaultValue={10000} onclick="Calculator()" />
                            </td>
                            <td className={styles.shoppingCartTableRow}>
                                <a href="#"><img src="../images/icon/HunkerBed1-1.jpg" alt="상품이미지" className={styles.shoppingCartTableProductImage} /></a>
                            </td>
                            <td className={styles.shoppingCartTableRow}>
                                <a href="#" className={styles.cartName}>
                                    <p className={[styles.shoppingCartTableProductName, styles.shoppingCartTableFontSize]}>{data.productName}</p>
                                </a>
                            </td>
                            <td className={styles.shoppingCartTableRow}>
                                <span className={styles.shoppingCartTableFontSize}  >{data.productEa}</span>
                                <input type="button" className={styles.shoppingCartTableCount} defaultValue="+" />
                                <input type="button" className={styles.shoppingCartTableCount} defaultValue="-" />
                            </td>
                            <td className={styles.shoppingCartTableRow}>
                                <span className={styles.shoppingCartTableFontSize}></span>
                                {data.price}
                            </td>
                            <td className={styles.shoppingCartTableRow}>
                                <button className={styles.shoppingCartTableBtn}>
                                    삭제
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* </article> */}
            <div className={styles.shoppingCartTotalPriceContainer}>
                <div className={styles.shoppingCartTotalPrcieInner}>
                    <p className={[styles.shoppingCartTotalPrice,styles.totals]} />
                    <p className={[styles.shoppingCartTotalPrice,styles.plusImg]}/>
                    <p className={[styles.shoppingCartTotalPrice,styles.equalImg]} />
                </div>
                <div className={styles.shoppingCartOrderButtonBox}>
                    <a className={[styles.btnDisabled, styles.shoppingCartOrderButton]} id={styles.shoppingCarSelectBtn} href="../memberPayment/memberPayment.html">선택상품 주문</a>
                    <a className={[styles.btnDisabled, styles.shoppingCartOrderButton]} id={styles.shoppingCartDeleteBtn}href="../memberPayment/memberPayment.html">전체상품 주문</a>
                </div>
            </div>
            {/* </section> */}
        </article>
    );
}
