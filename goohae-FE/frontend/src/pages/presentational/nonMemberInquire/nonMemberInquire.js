import React, { useState } from "react"
import { Link } from "react-router-dom";

import styles from "../../css/nonMemberInquire/nonMemberInquire.module.css";

import InputBox from '../../../common/singlePage/inputBox';
import SingleButton from '../../../common/singlePage/singleButton';
import SinglePageContainer from '../../../common/singlePage/singlePageContainer';
import ErrorMessage from "../../../common/singlePage/errorMessage";
import SinglePageHeader from "../../../common/singlePage/singlePageHeader";

export default function NonMemberInquire() {

    //이름, 이메일, 비밀번호, 비밀번호 확인

    const [nonMemberName, setNonMemberName] = useState("")
    const [nonMemberPhone, setNonMemberPhone] = useState("");
    const [nonMemberNumber, setNonMemberNumber] = useState("");

    //오류메시지 상태저장

    const [nonMemberNameMassage, setNonMemberNameMassage] = useState('')
    const [nonMemberPhoneMassage, setNonMemberPhoneMassage] = useState('')
    const [nonMemberNumberMassage, setNonMemberNumberMassage] = useState('')

    // 유효성 검사

    const [isNonMemberName, setIsNonMemberName] = useState(false);
    const [isNonMemberPhone, setIsNonMemberPhone] = useState(false);
    const [isNonMemberNumber, setIsNonMemberNumber] = useState(false);

    const [disabled, setDisabled] = useState(true);


    //이름 유효성검시
    const onChangeNonMemberName = (e) => {
        const currentName = e.target.value;
        setNonMemberName(currentName);
        if (currentName.length < 2) {
            setNonMemberNameMassage("이름을 입력해주세요");
            setIsNonMemberName(false);
        } else {
            setNonMemberNameMassage("");
            setIsNonMemberName(true);
        }
    };
    //휴대폰 유효성검사 
    const onChangeNonMemberPhone = (e) => {
        const currentPhone = e.target.value;
        setNonMemberPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (!phoneRegExp.test(currentPhone)) {
            setNonMemberPhoneMassage("올바른 형식이 아닙니다!");
            setIsNonMemberPhone(false);
        } else {
            setNonMemberPhoneMassage("");
            setIsNonMemberPhone(true);
        }
    };
    //주문번호 
    const onChangeNonMemberNumber = (e) => {
        const currentName = e.target.value;
        setNonMemberNumber(currentName);
        if (currentName.length < 10) {
            setNonMemberNumberMassage("주문번호를 입력해주세요");
            setIsNonMemberNumber(false);
        } else {
            setNonMemberNumberMassage("");
            setIsNonMemberNumber(true);
        }
    };
    function nonMember() {
        if (isNonMemberName && isNonMemberPhone && isNonMemberNumber) {
            return setDisabled(false);
        }
    }


    return (
        <SinglePageContainer>
            <SinglePageHeader isLogin={true}/>
            <InputBox type="text" id="nonMemberName" label="이름" name="nonMemberName" onChange={onChangeNonMemberName} required placeholder="국문으로 입력해 주세요" onkeyup="this.value=this.value.replace(/[^-ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'');" />
            <ErrorMessage>{nonMemberNameMassage}</ErrorMessage>
            
            <InputBox type="text" name="mobile" label="휴대전화" className={styles.nonMemberPhone} onChange={onChangeNonMemberPhone} minLength={11} maxLength={11} required onkeyup="this.value=this.value.replace(/[^-0-9]/g,'');" />
            <ErrorMessage>{nonMemberPhoneMassage}</ErrorMessage>
            
            <InputBox type="text" id="nonMemberEmail" label="주문번호" name="nonMemberEmail" onChange={onChangeNonMemberNumber} required placeholder="메일, 문자로 발송된 번호를 입력해 주세요" />
            <ErrorMessage>{nonMemberNumberMassage}</ErrorMessage>
            
            <SingleButton className={styles.nonMemberBtn} type="summit" onclick={nonMember} disabled={disabled} contents={"주문조회하기"}/>
        </SinglePageContainer>

    );

}
