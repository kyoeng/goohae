import React, { useState } from "react"
import { Link } from "react-router-dom";
import "../../css/nonMemberInquire/nonMemberInquire.css"

import InputBox from '../../../common/singlePage/inputBox';
import SingleButton from '../../../common/singlePage/singleButton';


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
        if (currentName.length < 2 ) {
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
    function nonMember(){
        if(isNonMemberName&&isNonMemberPhone&&isNonMemberNumber){
            return setDisabled(false);
        }   
    }


    return (
        <div className="nonMemberMain">
            <div className="nonMemberContainer">
                <div className="nonMemberInnerContainer">
                    <div className="nonMemberHead">
                        <div className="nonMemberHeadLogo">
                            <Link to="http://192.168.0.86:3000"> logo</Link>
                        </div>
                        <ul className="nonMemberListWrap">
                            <li className="nonMemberList">
                                <Link to="/Login" className="LoginLink">로그인</Link>
                            </li>
                            <li className="nonMemberList">
                                <Link to="/nonMemberInquire" className="nonMemberLink">비회원 배송조회</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nonMemBody">
                        <div className="nonMemberForm">
                            <InputBox type="text" id="nonMemberName" label="이름" name="nonMemberName" onChange={onChangeNonMemberName} required placeholder="국문으로 입력해 주세요" onkeyup="this.value=this.value.replace(/[^-ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'');" />
                            <p className="nonMemberWarning">{nonMemberNameMassage}</p>
                            <InputBox type="text" name="mobile" label="휴대전화" className="nonMemberPhone" onChange={onChangeNonMemberPhone} minLength={11} maxLength={11} required onkeyup="this.value=this.value.replace(/[^-0-9]/g,'');" />
                            <p className="nonMemberWarning">{nonMemberPhoneMassage}</p>
                            <InputBox type="text" id="nonMemberEmail" label="주문번호" name="nonMemberEmail" onChange={onChangeNonMemberNumber} required placeholder="메일, 문자로 발송된 번호를 입력해 주세요" />
                            <p className="nonMemberWarning">{nonMemberNumberMassage}</p>
                            <SingleButton className="nonMemberBtn" type="summit" onclick={nonMember} disabled={disabled}>
                                주문조회하기
                            </SingleButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
