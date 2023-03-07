import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../pages/css/findId/findId.module.css";

import InputBox from '../../../common/singlePage/inputBox';
import SingleButton from '../../../common/singlePage/singleButton';
import SinglePageFindContainer from '../../../common/singlePage/singlePageFindContainer';
import SinglePageFindHeader from './../../../common/singlePage/singlePageFindHeader';
import EmailInput from "../../../common/singlePage/emailInput";
import ErrorMessage from "../../../common/singlePage/errorMessage";

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
        <SinglePageFindContainer className="styles.container">
            <SinglePageFindHeader />
            <div className={styles.findIdForm} action method="post">
                <InputBox type="text" id="fiName" name="fiName" label="이름" className={styles.findIdInput} onChange={onChangeFindIdName} required placeholder="이름" />
                <ErrorMessage>이름을 입력해주세요</ErrorMessage>
                <EmailInput />
                <ErrorMessage>이메일을 입력해주세요</ErrorMessage>
                <InputBox type="text" name="mobile" label="휴대전화" className={[styles.findIdInput, styles.fiMobile]} onChange={onChangeFindIdPhone} minLength={11} maxLength={11} required />
                <ErrorMessage>휴대전화를 입력해주세요</ErrorMessage>
                <SingleButton type="submit" className={styles.findIdBtn} onClick={findIdBtn}>아이디 찾기</SingleButton>
            </div>
            <a href="/Login" className={styles.findIdLinkToLogin}>로그인으로 돌아가기</a>

        </SinglePageFindContainer>
    );



}