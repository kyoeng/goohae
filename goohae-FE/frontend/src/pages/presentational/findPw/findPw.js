import React, { useState } from "react"
import { Link } from "react-router-dom";
import "../../css/findPw/findPw.css";
import InputBox from '../../../common/singlePage/inputBox';
import SingleButton from '../../../common/singlePage/singleButton';

export default function FindPw() {

    //이름, 이메일, 비밀번호, 비밀번호 확인
    const [findPwName, setFindPwName] = useState("")
    const [findPwPhone, setFindPwPhone] = useState("");
    const [findPwEmail, setFindPwEmail] = useState("");

    //오류메시지 상태저장
    const [findPwNameMassage, setFindPwNameMassage] = useState("")
    const [findPwPhoneMassage, setFindPwPhoneMassage] = useState("");
    const [findPwEmailMassage, setFindPwEmailMassage] = useState("");

    // 유효성 검사
    const [isFindPwName, setIsFindPwName] = useState(false);
    const [isFindPwrPhone, setIsFindPwPhone] = useState(false);
    const [isFindPwEmail, setISFindPWEmail] = useState("");

    const [disabled, setDisabled] = useState(true);


    //이름 유효성검시
    const onChangeFindPwName = (e) => {
        const currentName = e.target.value;
        setFindPwName(currentName);
        if (currentName.length < 2) {
            setFindPwNameMassage("이름을 입력해주세요");
            setIsFindPwName(false);
        } else {
            setFindPwNameMassage("");
            setIsFindPwName(true);
        }
    };
    //휴대폰 유효성검사 
    const onChangeFindPwEmail = (e) => {
        const currentPhone = e.target.value;
        setFindPwPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (!phoneRegExp.test(currentPhone)) {
            setFindPwPhoneMassage("올바른 형식이 아닙니다!");
            setIsFindPwPhone(false);
        } else {
            setFindPwPhoneMassage("");
            setIsFindPwPhone(true);
        }
    };
    //전화번호 
    const onChangeFindPwPhone = (e) => {
        const currentPhone = e.target.value
        setFindPwEmail(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setFindPwEmailMassage("주문번호를 입력해주세요");
            setISFindPWEmail(false);
        } else {
            setFindPwEmailMassage("");
            setISFindPWEmail(true);
        }
    };
    function findPwBtn() {
        if (isFindPwName && isFindPwrPhone && isFindPwEmail) {
            return setDisabled(false);
        }
    }

    return (
        <div className="findIdMain">
            <div className="container">
                <div className="innerContainer">
                    <div className="findPwHead">
                        <div className="findPwHeadLogo">
                            <Link to="/">
                                logo
                            </Link>
                        </div>
                        <ul className="findPwHeadListWrap">
                            <li className="findPwHeadList">
                                <Link to="/findId" className="findIdLink">아이디 찾기</Link>
                            </li>
                            <li className="findPwHeadList">
                                <Link to="/findPw" className="findPwLink">비밀번호 찾기</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="findPwFormContainer">
                        <div className="findPwForm" action method="post">
                            <InputBox type="id" id="fpId" label="아이디" className="findPwInput" name="fpId" required placeholder="아이디" />
                            <span className="hidden">아이디를 입력해주세요</span>
                            <InputBox type="text" id="fpName" label="이름" className="findPwInput" name="fpName" required placeholder="이름" />
                            <span className="hidden">이름을 입력해주세요</span>
                            <InputBox type="text" name="mobile" label="휴대전화" className="findPwInput fpMobile" minLength={11} maxLength={11} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
                            {/* <input type="email" name="fdEmail" id="fdEmail" required placeholder="이메일"> */}
                            <span className="hidden">휴대전화를 <span className="nonDisplay">정확하게</span> 입력해주세요</span>
                            <label htmlFor="findPw_email" className="findPwLabel">이메일</label>
                            <div className="findPwEmail">
                                <input type="email" className="findPwInput" id="findPwEmail" name="fpFw" minLength={5} autofocus required />
                                @
                                <select className="findPwEmailSel">
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="hanmail.net">hanmail.net</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="outlook.com">outlook.com</option>
                                    <option value="icloud.com">icloud.com</option>
                                    {/* <option value="_manual">집적입력</option> */}
                                </select>
                            </div>
                            <p className="findPwWarning hidden">이메일을 입력해주세요</p>
                            <SingleButton type="submit" className="findPwBtn" onClick={findPwBtn}>비밀번호 찾기</SingleButton>
                        </div>
                        <Link to="/Login" className="findPwLinkToLogin">로그인으로 돌아가기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}