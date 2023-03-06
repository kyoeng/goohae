import React from 'react';
import styles from '../../../CSS/myPage/wishList/wishListTable.module.css';
import { Link } from 'react-router-dom';
import data2 from "../../../../dummyData/data2.json"

export default function WishListTable() {
    return (
        <>
            <article className={styles.whishListTableWrap}>
                <table className={styles.whishListTable}>
                    <colgroup>
                        <col width="4%" />
                        <col width="14%" />
                        <col width="52%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                    </colgroup>
                    <thead id={styles.wishListThead}>
                        <tr className={styles.wishListLine}>
                            <th scope="col" className={styles.wishListTh}>
                                <input type="checkbox" className={styles.wishListCheckBox} name="wishChkAll" chacked="chacked" onclick="allselect(this.checked);" />
                            </th>
                            <th scope="col" className={styles.wishListTh}>이미지</th>
                            <th scope="col" className={[styles.wishListTh, styles.wishListPrudctName]}>상품정보</th>
                            <th scope="col" className={styles.wishListTh}>상품금액</th>
                            <th scope="col" className={styles.wishListTh}>배송비</th>
                            <th scope="col" className={styles.wishListTh}>선택</th>
                        </tr>
                    </thead>
                    <tbody id={styles.wishListTbody}>
                        {data2.map((data) => (
                            <tr className={styles.wishListLine}>
                                <td className={styles.wishListTd}>
                                    <input type="checkbox" className={styles.wishListCheckBox} name="wishChk" cheked="cheked" />
                                </td>
                                <td className={styles.wishListTd}>
                                    <a href={data.wishListLink}><img src={data.img} alt="상품이미지" className={styles.myOrderTableProductImage} /></a>
                                </td>
                                <td className={styles.wishListTd}>
                                    <p className={styles.wishListProductName}>{data.productName}</p>
                                </td>
                                <td className={[styles.wishListTd, styles.wishListRight]}>
                                    {data.price}
                                </td>
                                <td className={[styles.wishListTd, styles.wishListRight]}>
                                    {data.wishListDelevery}
                                </td>
                                <td className={styles.wishListTd}>
                                    <button type="submit" className={styles.whishListTdBtn}>주문하기</button>
                                    <button type="submit" className={styles.whishListTdBtn}>장바구니 담기</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
            <article className={styles.whishlistButtonWrap}>
                <div className={styles.whishlistControlButtonWrap}>
                    <span className={styles.whishlistButtonLeftText}>선택한 상품</span>
                    <button className={styles.whishlistButton} id={[styles.whishListBlackButton]}>삭제하기</button>
                    <button className={styles.whishlistButton}>장바구니 담기</button>
                </div>
                <button className={styles.whishlistButton} id="whishListBlackButton">
                    전체 상품 주문
                    {/* <a href="#">관심상품 비우기</a> */}
                </button>
            </article>
        </>
    )
}