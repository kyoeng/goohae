import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../../css/myPage/myPage/myPage.css';

import MyPageProcessBox from "../../../../components/presentational/myPage/myPage/myPageOrderProcessInnerContainer";
import MyPageMenuBox from "../../../../components/presentational/myPage/myPage/myPageMenuBox";
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';




export default function MyPage() {

    return (

        <div className="myPageMain">
            <MyPsgeSubPageTitle myPsgeSubPageTitle="MY PAGE"/>
            <section className="myPageWrap">
                <div className="myPageWMent">
                    <p className="myPageMentContent"><span className="myPageMentContentName">유정현</span>님 환영합니다.</p>
                    <p className="myPageInfoMent">일반회원으로 <span className="myPageInfoMenMinPrice">10,000</span>원 이상 구매 시 <span className="myPageInfoMenMinPrice">2%</span> 추가 적립을 받을 수 있습니다.</p>
                </div>

                <article className="myPageMyOrder">
                    <div className="myPageOrederTitle">
                        <p className="myPageOrderTitleContent">나의 주문처리 현황</p>
                        <p className="myPageOrderTitleContent">최근 3개월 기준</p>
                    </div>
                    <div className="myPageOrderProcess">
                        <MyPageProcessBox myPageCaseTitle="myPageCaseTitle" myPageCase="myPageCase" />
                    </div>
                </article>
            </section>
            <article className="MyMenuWrap">
                <div className="myPageMenuContainer">
                    <MyPageMenuBox myPageSubPageLink="/myPageSubPageLink" myPageMenuTitle="myPageMenuTitle"
                        myPageMenuBoxContent="myPageMenuBoxContent">
                    </MyPageMenuBox>
                </div>
            </article >
        </div >
    );
}