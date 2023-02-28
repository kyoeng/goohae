import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/myPage/wishList/wishList.css';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';

export default function wishList() {
    // let wishChkAll = document.getElementsByName('wishChkAll'),
    //     wishChk = document.getElementsByName('wishChk');

    // console.log(wishChkAll);



    // let wishChk = document.getElementsByName("wishChk");
    // function allselect(allselect) {
    //     for (let i = 0; i < wishChk.length; i++) {
    //         wishChk[i].checked = allselect;
    //     }
    // }


    // let wlpdName = document.querySelector('.wlpdName'),
    //     nmP = document.querySelectorAll('.nmP');

    // wlpdName.addEventListener('mouseenter', function () {
    //     nmP[0].classList.add("hover");
    //     nmP[1].classList.add("hover");
    // });
    // wlpdName.addEventListener('mouseleave', function () {
    //     nmP[0].classList.remove("hover");
    //     nmP[1].classList.remove("hover");
    // });

    // let wlDel = document.querySelector('.wlDel');

    // wlDel.addEventListener('mouseup', function () {
    //     for (let i = 0; i < wishChk.length; i++) {
    //         if (wishChk[i].checked) {
    //             wishChk[i].parentElement.parentElement.remove();
    //         }
    //     }
    // })

    return (
        <AppLayout>
            <div id="wishListMain">
                <section id="myWhishListWrap">
                    <MyPageSubPageCategory myPageSubLinkKr="위시리스트"/>
                    <MyPsgeSubPageTitle myPsgeSubPageTitle="위시리스트"/>
                    <article className="whishListTableWrap">
                        <table className="whishListTable">
                            <colgroup>
                                <col width="4%" />
                                <col width="14%" />
                                <col width="52%" />
                                <col width="10%" />
                                <col width="10%" />
                                <col width="10%" />
                            </colgroup>
                            <thead id="wishListThead">
                                <tr className="wishListLine">
                                    <th scope="col" className="wishListTh">
                                        <input type="checkbox" className="wishListCheckBox" name="wishChkAll" chacked="chacked" onclick="allselect(this.checked);" />
                                    </th>
                                    <th scope="col" className="wishListTh">이미지</th>
                                    <th scope="col" className="wishListTh">상품정보</th>
                                    <th scope="col" className="wishListTh">상품금액</th>
                                    <th scope="col" className="wishListTh">배송비</th>
                                    <th scope="col" className="wishListTh">선택</th>
                                </tr>
                            </thead>
                            <tbody id="wishListTbody">
                                <tr className="wishListLine">
                                    <td className="wishListTd">
                                        <input type="checkbox" className="wishListCheckBox" name="wishChk" cheked="cheked" />
                                    </td>
                                    <td className="wishListTd">
                                        <a href="#"><img src="../../images/icon/HunkerBed1-1.jpg" alt="상품이미지" /></a>
                                    </td>
                                    <td className="wishListTd">
                                        <p className="wishListProductName">월넛 빈티지 우드 프레임 침대 + 클라우드 매트리스 Queen set</p>
                                        <p className="wishListProductName">옵션: 화이트</p>
                                    </td>
                                    <td className="wishListTd">
                                        150000원
                                    </td>
                                    <td className="wishListTd">
                                        6,000원
                                    </td>
                                    <td className="wishListTd">
                                        <button type="submit" className="whishListTdBtn">주문하기</button>
                                        <button type="submit" className="whishListTdBtn">장바구니 담기</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article className="whishlistButtonWrap">
                        <div className="whishlistControlButtonWrap">
                            <span className="whishlistButtonLeftText">선택한 상품</span>
                            <button className="whishlistButton" id="whishListBlackButton">삭제하기</button>
                            <button className="whishlistButton">장바구니 담기</button>
                        </div>
                        <button className="whishlistButton" id="whishListBlackButton">
                            전체 상품 주문
                            {/* <a href="#">관심상품 비우기</a> */}
                        </button>
                    </article>
                </section>
            </div>
        </AppLayout>


    );
}
