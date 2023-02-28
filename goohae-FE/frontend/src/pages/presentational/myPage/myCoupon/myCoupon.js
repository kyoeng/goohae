import { Link } from 'react-router-dom';
import '../../../css/myPage/myCoupon/myCoupon.css';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';

export default function myCoupon() {
    // const main = document.querySelector('main');
    return (

        <div className="myCouponMain">
            <div id="MyCouponListWrap">
            <MyPageSubPageCategory myPageSubLinkKr="쿠폰내역"/>
            <MyPsgeSubPageTitle myPsgeSubPageTitle="쿠폰"/>
                <article className="myCouponListTableWrap">
                    <table className="myCouponListTable">
                        <colgroup>
                            <col width="40%" />
                            <col width="10%" />
                            <col width="40%" />
                            <col width="10%" />
                        </colgroup>
                        <thead id="myCouponListTableThead">
                            <tr className="myCouponListTableLine">
                                <th scope="col" className="myCouponListTableTh">쿠폰명</th>
                                <th scope="col" className="myCouponListTableTh">할인액(율)</th>
                                <th scope="col" className="myCouponListTableTh">쿠폰 적용 상품 및 조건</th>
                                <th scope="col" className="myCouponListTableTh">유효기간</th>
                            </tr>
                        </thead>
                        <tbody id="myCouponListTableTbody">
                            <tr className="myCouponListTableLine">
                                <td className="myCouponListTableRow">천사리뷰어를 위한 특별한 쿠폰</td>
                                <td className="myCouponListTableRow">95%</td>
                                <td className="myCouponListTableRow">협탁 / 의자 ( 구매금액 100,000원 이상 )</td>
                                <td className="myCouponListTableRow">~2022-12-31</td>
                            </tr>
                            <tr className="myCouponListTableLine">
                                <td className="myCouponListTableRow">천사리뷰어를 위한 특별한 쿠폰</td>
                                <td className="myCouponListTableRow">95%</td>
                                <td className="myCouponListTableRow">협탁 / 의자 ( 구매금액 100,000원 이상 )</td>
                                <td className="myCouponListTableRow">~2022-12-31</td>
                            </tr>
                            <tr className="myCouponListTableLine">
                                <td className="myCouponListTableRow">천사리뷰어를 위한 특별한 쿠폰</td>
                                <td className="myCouponListTableRow">95%</td>
                                <td className="myCouponListTableRow">협탁 / 의자 ( 구매금액 100,000원 이상 )</td>
                                <td className="myCouponListTableRow">~2022-12-31</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="myCouponPageIdx">1</p>
                </article>
                <div className="myCouponSubmitCaution">
                    <div className="myCouponSubmitWrap" action>
                        <div className="myCouponSubmit">
                            <input type="text" id="myCouponSubmitInput" placeholder="  10~35자 일련번호 '-' 제외" />
                            <button type="summit" id="myCouponSubmitButton" disabled>쿠폰번호인증</button>
                        </div>
                        <p  className="myCouponCautionNotify">반드시 쇼핑몰에서 발행한 쿠폰번호만 입력해주세요.</p>
                    </div>
                    <div className="myCouponCautionWrap">
                        <p id="myCouponSubmitNotify">쿠폰 이용 안내</p>
                        <ul>
                            <li className="myCouponCautionList">1.쿠폰인증번호 등록하기에서 쇼핑몰에서 발행한 종이쿠폰/시리얼쿠폰/모바일쿠폰 등의 인증번호를 등록하시면 온라인쿠폰으로 발급되어 사용이
                                가능합니다.</li>
                            <li className="myCouponCautionList">2.쿠폰은 주문 시 1회에 한해 적용되며, 1회 사용 시 재 사용이 불가능합니다.</li>
                            <li className="myCouponCautionList">3.쿠폰은 적용 가능한 상품이 따로 적용되어 있는 경우 해당 상품 구매 시에만 사용이 가능합니다.</li>
                            <li className="myCouponCautionList">4.특정한 종이쿠폰/시리얼쿠폰/모바일쿠폰의 경우 단 1회만 사용이 가능할 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}