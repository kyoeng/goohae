import React, { useState } from "react"
import { Navigate } from "react-router-dom";
import axios from "axios";
import "../../css/login/login.css"
import { Link } from "react-router-dom";
import UserData from "../../../dummyData/userData";


export default function Login() {
    const [loginId, setLoginId] = useState()
    const [loginPw, setLoginPw] = useState();
    const [loginMessage, setLoginMessage] = useState('');
    const loginData = { loginUser }
    console.log(loginData);
    function changeLoginId(e) { setLoginId(e.target.value) };
    function changeLoginPw(e) { setLoginPw(e.target.value) };

    function login() {
        if (loginId !== '' && loginPw !== '') {
            axios.post('/test', {
                id: loginId,
                password: loginPw,
            })
                .then((response) => {
                    const { aceessToken } = response.data;
                    if (!aceessToken) {
                        setLoginMessage('로그인실패');
                        setLoginId();
                        setLoginPw();
                    } else {
                        if (response.status === 200) {
                            axios.defaults.headers.common[
                                "Authorization"
                            ] = `Bearer ${aceessToken}`;
                            return <Navigate to="/adminmain" replace={true} />
                        } else {
                            return;
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setLoginMessage('로그인실패');
                    setLoginId();
                    setLoginPw();
                })
        }
    }



    return (

        <main>
            <div className="loginContainer">
                <div className="loginInnerContainer">
                    <div className="loginHead">
                        <div className="loginHeadLinkMain">
                            <Link to="http://192.168.0.86:3000"> logo</Link>
                        </div>
                        <ul>
                            <li>
                                <a href="#">로그인</a>
                            </li>
                            <li>
                                <Link to="../nonMemberInquire/nonlMemberInquire.js">비회원 배송조회</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="loginBody">
                        <div className='loginIdPwForm'
                        >
                            <div className="loginBodyInput">
                                <input
                                    type="text"
                                    id="loginId"
                                    // name="id"
                                    autofocus
                                    // required
                                    placeholder="아이디"
                                    value={loginId}
                                    // onKeyUp={ActiveIsPassedLogin}
                                    onChange={changeLoginId} />
                                <input
                                    type="password"
                                    id="loginPw"
                                    name="password" autoFocus
                                    // required 
                                    placeholder="비밀번호"
                                    value={loginPw}
                                    // onKeyUp={ActiveIsPassedLogin}
                                    onChange={changeLoginPw}
                                />
                            </div>
                            <div className="idCheck">
                                <input type="idCheckbox" className="idCheckInput" name="loginCheck" />
                                <p>아이디저장</p>
                            </div>
                            <p className="loginError">{loginMessage}</p>
                            <button
                                type="submit"
                                className={'loginButton  ${active ? "loginButtonActive" : "loginButtonUnActive"}'}
                                // disabled={adminValue === '' || loginPwValue === '' ? true : false}
                                // disabled={loading}
                                onClick={login}
                            >로그인</button>
                            <ul className="foot">
                                <li><a href="../signUp/pj_signup.html">회원가입</a></li>
                                <li><a href="../findId/findId.html">아이디 비밀번호 찾기</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}