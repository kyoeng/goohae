import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AppLayout from "../../../../common/layout/AppLayout";


import '../../../css/myPage/myPage/myPage.css';

export default function MyPage() {

    return (
        <AppLayout>
            <div className="myPageMain">
                <p className="myPageTitle">MY&nbsp;PAGE</p>
                <section className="myPageWrap">
                    <div className="myPageWMent">
                        <p className="myPageMentContent"><span className="myPageMentContentName">유정현</span>님 환영합니다.</p>
                        <p className="myPageInfoMent">일반회원으로 <span className="myPageInfoMenMinPrice">10,000</span>원 이상 구매 시 <span className="myPageInfoMenMinPrice">2%</span> 추가 적립을 받을 수 있습니다.</p>
                    </div>
                    {/* <div class="MyPoint">
                <p> 내 적립금 &#183 쿠폰</p>
                <div class="myMileageCoupon">
                <div class="myPossibleMileage">
                    <p>가용 적립금</p>
                    <p><strong>10,000</strong> 원</p>
                </div>
                <div class="myUsedMileage">
                    <p>사용 적립금</p>
                    <p><strong>0</strong> 원</p>
                </div>
                <div class="myTotalMileage">
                    <p>총 적립금</p>
                    <p><strong>10,000</strong> 원</p>
                </div>
                <div class="myCouponWrap">
                    <p>쿠폰</p>
                    <p><strong>6</strong> 개</p>
                </div>
                </div>
    
                <div class="myCouponMileageButtonWrap">
                <button class="myCouponMileageButton">내 적립금 조회</button>
                <button class="myCouponMileageButton">내 쿠폰 조회</button>
                </div>
            </div> */}
                    <article className="myPageMyOrder">
                        <div className="myPageOrederTitle">
                            <p className="myPageOrderTitleContent">나의 주문처리 현황</p>
                            <p className="myPageOrderTitleContent">최근 3개월 기준</p>
                        </div>

                        <div className="myPageOrderProcess">
                            <div className="mypagBeforePay myPageOrderProcessInnerContainer">
                                <p className="myPageOrderCaseTitle">입금 전</p>
                                <span className="myPageOrderCase">0</span>
                            </div>

                            <img src="./myPageMain/arrowRight.png" alt="" />
                            <div className="deliveryReady myPageOrderProcessInnerContainer">
                                <p className="myPageOrderCaseTitle">배송 준비 중</p>
                                <span className="myPageOrderCase">0</span>
                            </div>

                            <img src="./myPageMain/arrowRight.png" alt="" />
                            <div className="delieveryProcess myPageOrderProcessInnerContainer">
                                <p className="myPageOrderCaseTitle">배송 중</p>
                                <span className="myPageOrderCase">0</span>
                            </div>

                            <img src="./myPageMain/arrowRight.png" alt="" />
                            <div className="delieveryComplete myPageOrderProcessInnerContainer">
                                <p className="myPageOrderCaseTitle">배송 완료</p>
                                <span className="myPageOrderCase">0</span>
                            </div>

                            <div className="delieveryEtc myPageOrderProcessInnerContainer">
                                <p className="myPageOrderCaseTitle">주문 기타</p>
                                <ul className="myPageOrderOtherCase">
                                    <li className="myPageOrderOtherCaseTitle">취소&nbsp;&nbsp;&nbsp;<span className="myPageOrderOtherCaseList">0</span> 건</li>
                                    <li className="myPageOrderOtherCaseTitle">교환&nbsp;&nbsp;&nbsp;<span className="myPageOrderOtherCaseList">0</span> 건</li>
                                    <li className="myPageOrderOtherCaseTitle">환불&nbsp;&nbsp;&nbsp;<span className="myPageOrderOtherCaseList">0</span> 건</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>

                <article className="MyMenuWrap">
                    <div className="myPageMenuContainer">
                        <div className="myPageMenu">
                            <Link to="/myOrder">
                                <span className="myPageMenuTitle">주문 내역</span>
                            </Link>

                            <p className="myPageMenuContent">
                                고객님께서 주문하신 상품의 주문내역을 확인하실 수 있습니다.
                            </p>

                            <Link to="/myOrder" className="myPageOrderMenuMore">더보기&gt;</Link>
                        </div>

                        <div className="myPageMenu">
                            <Link to="/memberInfo">
                                <span className="myPageMenuTitle">내정보</span>
                            </Link>

                            <p className="myPageMenuContent">
                                회원이신 고객님의 개인정보를 관리하는 공간입니다.
                            </p>

                            <Link to="/memberInfo" className="myPageOrderMenuMore"> 더보기&gt;</Link>
                        </div>

                        <div className="myPageMenu">
                            <Link to="/shoppingCart" className="myPageMenuTitle">장바구니</Link>
                            <Link to="/shoppingCart">
                                <p className="myPageMenuContent">
                                    회원님의 장바구니를 관리하는 곳입니다.
                                </p>

                                <p className="myPageMenuContent">
                                    한번에 구매를 하실 수 있고, 삭제하실 수 있습니다.
                                </p>
                            </Link>

                            <Link to="/shoppingCart"><span className="myPageOrderMenuMore">더보기</span> &gt;</Link>
                        </div>

                        <div className="myPageMenu">
                            <Link to="/wishList" className="myPageMenuTitle" >위시리스트</Link>

                            <p className="myPageMenuContent">
                                관심상품으로 등록하신 상품의 목록을 보여드립니다.
                            </p>

                            <Link to="/wishList" className="myPageOrderMenuMore">더보기 &gt;</Link>
                        </div>
                        {/* <div>
                <a href="../mileage/mileage.html">
                <span><strong>MILEAGE</strong></span>
                <span>(적립금)</span>
                </a>
                <p><a href="../mileage/mileage.html">
                    적립금은 상품 구매 시 사용하실 수 있습니다.<br>
                    적립된 금액은 현금으로 환불되지 않습니다.
                </a></p>
            </div> */}
                        <div className="myPageMenu">
                            <Link to='/myCoupon'>쿠폰</Link>

                            <p className="myPageMenuContent">
                                보유하고 계신 쿠폰내역을 보여드립니다
                            </p>

                            <Link to='/myCoupon' className="myPageOrderMenuMore">더보기 &gt;</Link>
                        </div>

                        <div className="myPageMenu">
                            <Link to="/myPost">내 리뷰</Link>

                            <p className="myPageMenuContent">
                                고객님께서 작성하신 게시물을 관리하는 공간입니다.
                            </p>

                            <Link to="/myPost" className="myPageOrderMenuMore">더보기 &gt;</Link>
                        </div>

                        <div className="myPageMenu">
                            <Link to="/myAddress">
                                <span className="myPageMenuTitle">내 주소록</span>
                            </Link>

                            <p className="myPageMenuContent">
                                배송지를 등록하고 관리하실 수 있습니다.
                            </p>

                            <Link to="/myAddress" className="myPageOrderMenuMore">더보기 &gt;</Link>
                        </div>
                    </div>
                </article >
            </div >
        </AppLayout>
    );
}