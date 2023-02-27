import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/findId/findId.css";

import InputBox from '../../../common/singlePage/inputBox';
import SingleButton from '../../../common/singlePage/singleButton';

export default function FindID() {
    //이름, 이메일, 비밀번호, 비밀번호 확인
    const [findIdName, setFindIdName] = useState("")
    const [findIdPhone, setFindIdPhone] = useState("");
    const [findIdEmail, setFindIdEmail] = useState("");

    //오류메시지 상태저장
    const [findIdNameMassage, setFindIdNameMassage] = useState("")
    const [findIdPhoneMassage, setFindIdPhoneMassage] = useState("");
    const [findIdEmailMassage, setFindIdEmailMassage] = useState("");

    // 유효성 검사
    const [isFindIdName, setIsFindIdName] = useState(false);
    const [isFindIdrPhone, setIsFindIdPhone] = useState(false);
    const [isFindIdEmail, setISFindIdEmail] = useState("");

    const [disabled, setDisabled] = useState(true);


    //이름 유효성검시
    const onChangeFindIdName = (e) => {
        const currentName = e.target.value;
        setFindIdName(currentName);
        if (currentName.length < 2) {
            setFindIdNameMassage("이름을 입력해주세요");
            setIsFindIdName(false);
        } else {
            setFindIdNameMassage("");
            setIsFindIdName(true);
        }
    };
    //휴대폰 유효성검사 
    const onChangeFindIdEmail = (e) => {
        const currentPhone = e.target.value;
        setFindIdEmail(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (!phoneRegExp.test(currentPhone)) {
            setFindIdPhoneMassage("올바른 형식이 아닙니다!");
            setIsFindIdPhone(false);
        } else {
            setFindIdPhoneMassage("");
            setIsFindIdPhone(true);
        }
    };
    //전화번호 
    const onChangeFindIdPhone = (e) => {
        const currentPhone = e.target.value
        setFindIdPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setFindIdEmailMassage("주문번호를 입력해주세요");
            setISFindIdEmail(false);
        } else {
            setFindIdEmailMassage("");
            setISFindIdEmail(true);
        }
    };
    function findIdBtn() {
        if (isFindIdName && isFindIdrPhone && isFindIdEmail) {
            return setDisabled(false);
        }
    }


    return (

        <div className="findIdMain">
            <div className="findIdContainer">
                <div className="findIdInnerContainer">
                    <div className="findIdHead">
                        <div className="findIdHeadLogo">
                            <Link to="/">
                                logo
                            </Link>
                        </div>
                        <ul className="findIdHeadListWrap">
                            <li className="findIdHeadList">
                                <Link to="/findId" className="findIdLink">아이디 찾기</Link>
                            </li>
                            <li className="findIdHeadList">
                                <Link to="/findPw" className="findPwLink">비밀번호 찾기</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="findIdForm" action method="post">
                        <InputBox type="text" id="fiName" name="fiName" label="이름" className="findIdInput" onChange={onChangeFindIdName} required placeholder="이름" />
                        <p className="findIdWarning hidden">이름을 입력해주세요</p>
                        <label htmlFor="findiw_name" className="findIdLabel">이메일</label>
                        <div className="findIEemailWrap">
                            <input type="text" id="fiEmail" name="fiEmail" className="findIdInput" onChange={onChangeFindIdEmail} minLength={5} autofocus required />
                            @
                            <select className="fpInput">
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
                        </div><p className="findIdWarning hidden">이메일을 입력해주세요</p>
                        <InputBox type="text" name="mobile" label="휴대전화" className="findIdInput fiMobile" onChange={onChangeFindIdPhone} minLength={11} maxLength={11} required />
                        <p className="findIdWarning hidden">휴대전화를 입력해주세요</p>
                        <SingleButton type="submit" className="findIdBtn" onClick={findIdBtn}>아이디 찾기</SingleButton>
                    </div>
                    <Link to="/Login" className="findIdLinkToLogin">로그인으로 돌아가기</Link>

                </div>
            </div>
        </div>
    );



}