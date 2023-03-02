import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const wishListData=[
    {
    wishListLink:"",
    wishListProductImage:"",
    wishListProduct:"월넛 빈티지 우드 프레임 침대 + 클라우드 매트리스 Queen set",
    wishListOption:"화이트",
    wishListProductPrice:"1500000원",
    wishListDelevery:"3000원"
}
]

const WishListTableWrap = styled.article`
width: 100%;
margin: 0 auto;
margin-top: 50px;

.whishListTable {
    width: 100%;
    min-width: 700px;
    margin: 0 auto;
    border-collapse: collapse;
    font-size: 1.5rem;
}

.whishListTable #wishListThead,
.whishListTable #wishListTbody,
.whishListTable .wishListLine {
    border-bottom: 2px solid #1A1B23;
}

.wishListLine {
    height: 40px;
    border-bottom: 1px;
}

.wishListTh {
    text-align: center;
}

.wishListTd {
    text-align: center;
    height: 100px;
}

wishListTbody >.wishListTd:nth-of-type(2)>img {
    display: inline-block;
    width: 90%;
    height: 90%;
}

#wishListTbody>.wishListLine {
    height: 140px;
}

.wishListTd:nth-of-type(1) {
    width: 40px;
}

.whishListTable .wishListTd:nth-of-type(3) {
    text-align: left;
    font-weight: 700;
}

/* 마우스 오버  */
.whishListTable .wishListTd:nth-of-type(3) .wishListProductName :hover{
    color: #505DD0;
}

.whishListTable .wishListTd:nth-of-type(3) .wishListProductName:last-child {
    padding-top: 11px;
    opacity: 0.5;

}


.wishListRight {
    padding: 0 10px;
    text-align: right;
}

.whishListTable .wishListTd:last-of-type {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    text-decoration: underline;
    height: 83px;
    margin: 28.5px 0;
}

.whishlistButtonWrap {
    margin: 10px auto;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 150px;
}

.whishlistControlButtonWrap,
.whishlistOrderButton {
    display: flex;
    align-items: center;
    gap: 9px;
}

.whishlistButton{
    text-align: center;
    width: 160px;
    height: 36px;
    line-height: 36px;
    background-color: #F5F5F5;
    border: 1px solid #1A1B23;
}

.whishlistButtonWrap #whishListBlackButton {
    display: inline-block;
    background-color: #1A1B23;
    color: #F5F5F5;
} */


`;


// 사용 : <MyPageSubPageCategory myPageSubLinkKr="해당페이지 한글 이름"/>
const WishListTable = ({ wishListLink, wishListProductImage,wishListProduct,wishListOption,wishListProductPrice,wishListDelevery}) => (
    <WishListTableWrap>
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
                        <th scope="col" className="wishListTh wishListPrudctName">상품정보</th>
                        <th scope="col" className="wishListTh ">상품금액</th>
                        <th scope="col" className="wishListTh">배송비</th>
                        <th scope="col" className="wishListTh">선택</th>
                    </tr>
                </thead>
                <tbody id="wishListTbody">
                {wishListData.map((data) => (
                    <tr className="wishListLine">
                        <td className="wishListTd">
                            <input type="checkbox" className="wishListCheckBox" name="wishChk" cheked="cheked" />
                        </td>
                        <td className="wishListTd">
                            <a href={data.wishListLink}>{data.wishListProductImage}</a>
                        </td>
                        <td className="wishListTd">
                            <p className="wishListProductName">{data.wishListProduct}</p>
                            <p className="wishListProductName">{data.wishListOption}</p>
                        </td>
                        <td className="wishListTd wishListRight">
                            {data.wishListProductPrice}
                        </td>
                        <td className="wishListTd wishListRight">
                            {data.wishListDelevery}
                        </td>
                        <td className="wishListTd">
                            <button type="submit" className="whishListTdBtn">주문하기</button>
                            <button type="submit" className="whishListTdBtn">장바구니 담기</button>
                        </td>
                    </tr>
                ))}
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
    </WishListTableWrap>
)
export default WishListTable;