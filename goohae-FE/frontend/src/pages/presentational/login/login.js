import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../css/login/login.module.css"
import { Link } from "react-router-dom";
import loginUser from "../../../dummyData/userData";

import InputBox from '../../../common/singlePage/inputBox';
import SingleButton from '../../../common/singlePage/singleButton';
import SinglePageContainer from '../../../common/singlePage/singlePageContainer';
import ErrorMessage from './../../../common/singlePage/errorMessage';
import SinglePageHeader from "../../../common/singlePage/singlePageHeader";

export default function Login() {
    const [loginId, setLoginId] = useState("")
    const [loginPw, setLoginPw] = useState("");
    const [errorMessage, setErrorMassage] = useState('');
    // const loginData = { loginUser }
    console.log(loginUser.id)
    //비밀번호 아이디 value  관리
    function changeLoginId(e) { setLoginId(e.target.value) };
    function changeLoginPw(e) { setLoginPw(e.target.value) };
    
    const navigate = useNavigate();

    function login() {
        if (loginId != '' && loginPw != '') {
            axios.post('/api/user/login', {
                id: loginId,
                password: loginPw,
            })
                .then((response) => {
                    const accessToken = response.data;
                    if (accessToken == "error") {
                        console.log(accessToken)
                        setErrorMassage('로그인실패');
                        setLoginId();
                        setLoginPw();                        
                    } else {
                        console.log(accessToken)
                        axios.defaults.headers.common[
                            "Authorization"
                        ] = `Bearer ${accessToken}`;
                        return navigate('/')
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setErrorMassage('로그인실패');
                })
        }


        // if (loginId != "" && loginPw != "") {
        //     if (loginId == loginUser.id) {
        //         if (loginPw == loginUser.password) {
        //             console.log('로그인성공');
        //         }
        //     }
        //     else {
        //         console.log('로그인실패');

        //     }

        // } else if (loginId === '' && loginPw !== '') {
        //     setLoginMessage('아이디를 입력해주세요');
        //     setLoginId("");

        // } else if (loginId !== '' && loginPw === '') {
        //     setLoginMessage('비밀번호를 입력해주세요');
        //     setLoginPw("");
        // } else {
        //     setLoginMessage('아이디와 비밀번호를 입력해주세요');
        // }

    }


    return (
        <SinglePageContainer className={styles.loginContainer}>
            <SinglePageHeader isLogin={"login"} />
            <div className={styles.loginInputContainer}>
                <InputBox className={styles.pupleLink}
                    type="text"
                    autofocus
                    placeholder="아이디"
                    value={loginId}
                    onChange={changeLoginId} 
                    />
                <InputBox
                    type="password"
                    id="loginPw"
                    name="password" autoFocus
                    placeholder="비밀번호"
                    value={loginPw}
                    onChange={changeLoginPw}
                />
            </div>
            <div className={styles.idCheck}>
                <input type="idCheckbox" className={styles.idCheckInput} name="loginCheck" />
                <p>아이디저장</p>
            </div>
            <ErrorMessage errorMessage={errorMessage}/>
            <SingleButton
                type="submit"
                className={styles.loginButton}
                // className={[styles.loginButton, active ? styles.loginButtonActive : styles.loginButtonUnActive]}
                // disabled={adminValue === '' || loginPwValue === '' ? true : false}
                // disabled={loading}
                onClick={login}
                contents="로그인"/>
            <ul className={styles.foot}>
                <li><Link to="/signUp" >회원가입</Link></li>
                <li><Link to="/findId">아이디 비밀번호 찾기</Link></li>
            </ul>
        </SinglePageContainer>
    );
}




