import React, { useState } from "react"
import { Link } from "react-router-dom";
import styles from "../../css/findPw/findPw.module.css";
import InputBox from '../../../common/singlePage/inputBox';
import SingleButton from '../../../common/singlePage/singleButton';
import SinglePageFindContainer from '../../../common/singlePage/singlePageFindContainer';
import SinglePageFindHeader from "../../../common/singlePage/singlePageFindHeader";
import EmailInput from "../../../common/singlePage/emailInput";
import ErrorMessage from "../../../common/singlePage/errorMessage";


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
        <SinglePageFindContainer>
            <SinglePageFindHeader />
            <div className={styles.findPwFormContainer}>
                <div className={styles.findPwForm} action method="post">
                    <InputBox type="id" id="fpId" label="아이디" className={styles.findPwInput} name="fpId" required placeholder="아이디" />
                    <span className={styles.hidden}>아이디를 입력해주세요</span>
                    <InputBox type="text" id="fpName" label="이름" className={styles.findPwInput} name="fpName" required placeholder="이름" />
                    <span className={styles.hidden}>이름을 입력해주세요</span>
                    <InputBox type="text" name="mobile" label="휴대전화" className={[styles.findPwInput, styles.fpMobile]} minLength={11} maxLength={11} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
                    <span className={styles.hidden}>휴대전화를 <span className={styles.nonDisplay}>정확하게</span> 입력해주세요</span>
                    <EmailInput/>
                    <ErrorMessage></ErrorMessage>
                    <SingleButton type="submit" className={styles.findPwBtn} onClick={findPwBtn}>비밀번호 찾기</SingleButton>
                </div>
                <Link to="/Login" className={styles.findPwLinkToLogin}>로그인으로 돌아가기</Link>
            </div>
        </SinglePageFindContainer>
    );
}