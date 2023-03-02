import React from 'react';
import styled from 'styled-components';
const myPageProcessData = [
    {
        shoppingCartProduct: "월넛 빈티지 우드 프레임 침대 + 클라우드 매트리스 Queen set",
        shoppingCartAmount: 1,
        shoppingCartOption: "화이트",
        shoppingCartPrice: "100000",
    }
]

const MyPostTableWrap = styled.article`

    margin: 0 auto;

.myPostUpper #myPostTableSelect {
    font-size: 12px;
}

.myPostTableWrap .myPostTableOption,
.myPostTableWrap #myPostTableSelect  {
    color:#1A1B23;
}

.myPostTableWrap {
    width: 100%;
    /* margin: 50px auto;    */
    margin-bottom: 200px;
}

/* ====================Table=================== */
/* ====================Table=================== */
/* ====================Table=================== */


.myPostTable {
    width: 100%;
    margin: 10px auto;
    border-collapse: collapse;
}

.myPostTable .myPostTableTr {
    height: 40px;
    border-bottom: 1px solid #1A1B23;
}

.myPostTable .myPostTableTh {
    border-bottom: 2px solid #1A1B23;
    text-align: center;
}

.myPostTable .myPostTableRow {
    border-bottom: 2px solid #1A1B23;
    text-align: center;
}

.myPostTable .myPostTablTbody .myPostTableRow{
    height: 70px;
}

.myPostTable .myPostTableRow .myPostSubject:hover{
    color: #505DD0;
}

.nondisplay{
    display: none;
}
`
// const plus  

const ShppingCartTable = ({ shoppingCartProduct, shoppingCartAmount, shoppingCartPrice }) => (
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
                {myPageProcessData.map((data) => (
                    <tr className="shoppingCartTableLine">
                        <td className="shoppingCartTableRow">
                            <input type="checkbox" name="checkbox" className="shoppingCartTableChoice" defaultValue={10000} onclick="Calculator()" />
                        </td>
                        <td className="shoppingCartTableRow">
                            <a href="#"><img src="../images/icon/HunkerBed1-1.jpg" alt="상품이미지" className="shoppingCartTableProductImage" /></a>
                        </td>
                        <td className="shoppingCartTableRow">
                            <a href="#" className="cartName">
                                <p className="shoppingCartTableProductName shoppingCartTableFontSize">{data.shoppingCartProduct}</p>
                                <p className="shoppingCartTableProductName shoppingCartTableFontSize">{data.shoppingCartOption}</p>
                            </a>
                        </td>
                        <td className="shoppingCartTableRow">
                            <span className="shoppingCartTableFontSize">{data.shoppingCartAmount}</span>
                            <input type="button" className="shoppingCartTableCount shoppingCartTableFontSize" onclick="count(&quot;plus&quot;)" defaultValue="+" />
                            <input type="button" className="shoppingCartTableCount shoppingCartTableFontSize" onclick="count(&quot;minus&quot;)" defaultValue="-" />
                        </td>
                        <td className="shoppingCartTableRow">
                            <span className="shoppingCartTableFontSize"></span>
                            {data.shoppingCartPrice}
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
    </article>
)
export default ShppingCartTable