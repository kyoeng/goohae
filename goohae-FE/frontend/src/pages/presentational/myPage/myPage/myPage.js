import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from  '../../../css/myPage/myPage/myPage.module.css';

import MyPageProcessBox from "../../../../components/presentational/myPage/myPage/myPageProcessInnerContainer";
import MyPageMenuBox from "../../../../components/presentational/myPage/myPage/myPageMenuBox";
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import MyPageTopWrap from '../../../../components/presentational/myPage/myPage/myPageTopWrap';

export default function MyPage() {

    return (
        <div className="myPageMain" >
            <MyPsgeSubPageTitle myPsgeSubPageTitle="MY PAGE" />
            <MyPageTopWrap/>
            <MyPageMenuBox 
                myPageSubPageLink="/myPageSubPageLink" 
                myPageMenuTitle="myPageMenuTitle"
                myPageMenuBoxContent="myPageMenuBoxContent">
            </MyPageMenuBox>
        </div>
    );
}