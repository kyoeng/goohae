import { Link } from 'react-router-dom';
import '../../../css/myPage/shoppingCart/shoppingCart.css';

export default function ShppingCart() {
    // // -------------수량 변동에 따른 상품가격
    // const resultElement = document.getElementById('result');
    // const plusImg = document.querySelector(".plusImg"),
    //     equalImg = document.querySelector(".equalImg"),
    //     [selectedProductOrderBtn, allProductOrderBtn] = document.querySelectorAll('.orderButtonBox>a');
    // let checkbox = document.querySelectorAll('.checkbox');
    // let productPrice = document.querySelectorAll('.productPrice');
    // productPrice[0].textContent = `${checkbox[0].value}원`;

    // function count(type) {
    //     // 현재 화면에 표시된 값
    //     let number = resultElement.innerText;

    //     // productPrice.textContent = `${parseInt(checkbox.value)}원`
    //     // 더하기/빼기
    //     if (type === 'plus') {
    //         number = parseInt(number) + 1;
    //         // productPrice+=parseInt(checkbox[0].value);
    //     } else if (type === 'minus') {
    //         if (number <= 1) {
    //             number = 1
    //         } else {
    //             number = parseInt(number) - 1;
    //             // productPrice-=parseInt(checkbox[0].value);
    //         }
    //     }
    //     // 결과 출력
    //     resultElement.innerText = number;
    //     // productPrice[0].value=parseInt(checkbox[0].value) * number;
    //     productPrice[0].textContent = `${(parseInt(checkbox[0].value) * number)}원`;

    //     totals.innerHTML = `<strong>총 상품가격: ${parseInt(checkbox[0].value) * number}원</strong>`;
    //     plusImg.innerHTML = `<strong>배송비 : 3000원</strong>`;
    //     equalImg.innerHTML = `<strong>총 상품가격: ${(parseInt(checkbox[0].value) * number) + 3000}원</strong>`
    //     // Calculator();
    // }

    // // 제품명 호버------------------------------------------------
    // let cartName = document.querySelector('.cartName'),
    //     cartNameP = document.querySelector('.cartNameP');

    // cartName.addEventListener('mouseenter', function () {
    //     cartNameP.classList.add("hover");
    // });

    // cartName.addEventListener('mouseleave', function () {
    //     cartNameP.classList.remove("hover");
    // });

    // // 총상품가격------------------------------------------------------
    // let totals = document.querySelector(".totals");

    // function Calculator() {
    //     // count();
    //     console.log(equalImg)
    //     let tot = 0;

    //     for (let i = 0; i < checkbox.length; i++) {
    //         if (checkbox[i].checked == true) {
    //             // tot += parseInt(checkbox[i].value);
    //             tot += parseInt(productPrice[i].textContent);
    //         } else {

    //         }
    //     }

    //     totals.innerHTML = `<strong>총 상품가격: ${tot}원</strong>`;
    //     plusImg.innerHTML = '<strong>배송비 3000 원</strong>';
    //     equalImg.innerHTML = `<strong> 총 주문금액 ${tot + 3000} 원 </strong>`;

    //     if (checkbox[0].checked == false) {
    //         totalPriceInner.style.visibility = 'hidden'
    //         selectedProductOrderBtn.classList.add('btnDisabled');
    //         allProductOrderBtn.classList.add('btnDisabled');
    //     } else {
    //         totalPriceInner.style.visibility = 'visible'
    //         selectedProductOrderBtn.classList.remove('btnDisabled');
    //         allProductOrderBtn.classList.remove('btnDisabled');
    //     }
    // }

    // function selectAll(selectAll) {
    //     for (let i = 0; i < checkbox.length; i++) {
    //         checkbox[i].checked = selectAll;
    //     }
    // }




    // // 삭제버튼------------------------------------------

    // let del = document.querySelector('.del'),
    //     totalPriceInner = document.querySelector('.totalPriceInner');

    // del.addEventListener('mouseup', function () {
    //     del.parentElement.parentElement.remove();
    //     totalPriceInner.style.visibility = 'hidden'
    // });
    return (

        <div className="shoppingCartMain">
            {/* <section class="cartWrap"> */}
            <div className="ShoppingCartCategory">
                <Link to="/" className="myPageLink">홈&nbsp;&nbsp;&gt;</Link>
                <Link to="/MyPage" className="myPageLink">&nbsp;&nbsp;마이쇼핑&nbsp;&nbsp;&gt;</Link>
                <Link to="/MyCart" className="myPageLink" id="shoppingCartLink">&nbsp;&nbsp;쇼핑카트&nbsp;&nbsp;</Link>
            </div>
            <p className="shoppingCartTitle">cart</p>
            <article className="shoppingCartTableContainer">
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
                        <tr className="shoppingCartTableLine">
                            <th scope="col" className="shoppingCartTitleTh">
                                선택
                                {/* <label>
                                    <input type="checkbox" name="checkAll" className="shoppingCartCheck" checked="" value="selectAll" onclick="selectAll(this.checked)" />
                                </label> */}
                            </th>
                            <th scope="cos" className="shoppingCartTitleTh">이미지</th>
                            <th scope="col" className="shoppingCartTitleTh">상품정보</th>
                            <th scope="col" className="shoppingCartTitleTh">수량</th>
                            <th scope="col" className="shoppingCartTitleTh">상품금액</th>
                            <th scope="col" className="shoppingCartTitleTh">삭제</th>
                        </tr>
                    </thead>
                    <tbody className="shoppingCartTableTbody">
                        <tr className="shoppingCartTableLine">
                            <td className="shoppingCartTableRow">
                                <input type="checkbox" name="checkbox" className="shoppingCartTableChoice" defaultValue={10000} onclick="Calculator()" />
                            </td>
                            <td className="shoppingCartTableRow">
                                <a href="#"><img src="../images/icon/HunkerBed1-1.jpg" alt="상품이미지" className="shoppingCartTableProductImage" /></a>
                            </td>
                            <td className="shoppingCartTableRow">
                                <a href="#" className="cartName">
                                    <p className="shoppingCartTableProductName">월넛 빈티지 우드 프레임 침대 + 클라우드 매트리스 Queen set</p>
                                    <p className="shoppingCartTableProductName">옵션: 화이트</p>
                                </a>
                            </td>
                            <td className="shoppingCartTableRow">
                                <span id="shoppingCartTableCountNumber">1</span>
                                <input type="button" className="shoppingCartTableCount" onclick="count(&quot;plus&quot;)" defaultValue="+" />
                                <input type="button" className="shoppingCartTableCount" onclick="count(&quot;minus&quot;)" defaultValue="-" />
                            </td>
                            <td className="shoppingCartTableRow">
                                {/* <div>10000원</div> */}
                            </td>
                            <td className="shoppingCartTableRow">
                                <button className="shoppingCartTableBtn">
                                    삭제
                                </button>
                            </td>
                        </tr>
                        {/* 
                            <tr class="productBox">
                                <td class="productCheckbox">
                                    <input type="checkbox" name="checkbox" class="checkbox" checked="" value="10000"
                                        onclick="Calculator()">
                                </td>
                                <td class="productImg">
                                    <div class="productImgIn2">
                                        이미지
                                    </div>
                                </td>
                                <td class="productBoxName">
                                    <a href=" #">
                                        <strong>
                                            월넛 빈티지 우드 프레임 침대 + 클라우드 매트리스 Queen set
                                        </strong>
                                    </a>
                                    <div>[옵션: 화이트]</div>
                                </td>
                                <td class="productNumber">
                                    <span id='result' min="0">0</span>
                                    <input type='button' onclick='count("plus")' value='+' />
                                    <input type='button' onclick='count("minus")' value='-' />
                                </td>
                                <td class="productPrice">
                                    <div>10000원</div>
                                </td>
                                <td class="productBtn">
                                    <button>바로구매</button>
                                    <button>삭제하기</button>
                                </td>
                            </tr> */}
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
            </article></div>
    );
}