import { Link } from 'react-router-dom';
import '../../../css/myPage/shoppingCart/shoppingCart.css';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import ShoppingCartTable from '../../../../components/presentational/myPage/shoppingCart/shoppingCartTable';
export default function ShoppingCart() {

    return (
        <AppLayout>
            <div className="shoppingCartMain">
                {/* <section class="cartWrap"> */}
                <MyPageSubPageCategory myPageSubLinkKr="장바구니"/>
                <MyPsgeSubPageTitle myPsgeSubPageTitle="cart"/>
                <ShoppingCartTable/>
                {/* <article className="shoppingCartTableContainer">
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
                                    <label>
                                        <input type="checkbox" name="checkAll" className="shoppingCartCheck" checked="" value="selectAll" onclick="selectAll(this.checked)" />
                                    </label> 
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
                                        <p className="shoppingCartTableProductName shoppingCartTableFontSize">월넛 빈티지 우드 프레임 침대 + 클라우드 매트리스 Queen set</p>
                                        <p className="shoppingCartTableProductName shoppingCartTableFontSize">옵션: 화이트</p>
                                    </a>
                                </td>
                                <td className="shoppingCartTableRow">
                                    <span className="shoppingCartTableFontSize">1</span>
                                    <input type="button" className="shoppingCartTableCount shoppingCartTableFontSize" onclick="count(&quot;plus&quot;)" defaultValue="+" />
                                    <input type="button" className="shoppingCartTableCount shoppingCartTableFontSize" onclick="count(&quot;minus&quot;)" defaultValue="-" />
                                </td>
                                <td className="shoppingCartTableRow">
                                    <span className="shoppingCartTableFontSize"></span>
                                    <div>10000원</div>
                                </td>
                                <td className="shoppingCartTableRow">
                                    <button className="shoppingCartTableBtn">
                                        삭제
                                    </button>
                                </td>
                            </tr> */}
                           
                                {/* <tr class="productBox">
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
                                </tr>
                        </tbody>
                    </table>
                 </article>
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
                 </section> 
                 </article> */}
            </div> 
        </AppLayout>
    );
}