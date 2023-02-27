import React, { useState } from "react"
import { Navigate } from "react-router-dom";
import axios from "axios";
import "../../css/login/login.css"
import { Link } from "react-router-dom";
import loginUser from "../../../dummyData/userData";

import InputBox from '../../../common/singlePage/inputBox';
import SingleButton from '../../../common/singlePage/singleButton';

export default function Login() {
    const [loginId, setLoginId] = useState()
    const [loginPw, setLoginPw] = useState();
    const [loginMessage, setLoginMessage] = useState('');
    const loginData = { loginUser }

    //비밀번호 아이지 value 관리
    function changeLoginId(e) { setLoginId(e.target.value) };
    function changeLoginPw(e) { setLoginPw(e.target.value) };


    function login() {
        console.log(loginId);
        console.log(loginPw);
        
        if (loginId != '' && loginPw != '') {
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
                            return <Navigate to="/" replace={true} />
                        } else {
                            return;
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setLoginMessage('로그인실패');
                })
        }else if(loginId ===''&& loginPw !== ''){
            setLoginMessage('아이디를 입력해주세요');
        }else{
            setLoginMessage('비밀번호를 입력해주세요');
        }
    }



    return (

        <div className="loginMain">
            <div className="loginContainer">
                <div className="loginInnerContainer">
                    <div className="loginHead">
                        <div className="loginHeadLogo">
                            <Link to="http://192.168.0.86:3000"> logo</Link>
                        </div>
                        <ul className="loginHeaderListWrap">
                            <li className="loginHeaderList">
                                <Link to="/Login" className="loginHeaderListLink">로그인</Link>
                            </li>
                            <li className="loginHeaderList">
                                <Link to="/nonMemberInquire" className="loginHeaderListLink">비회원 배송조회</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="loginBody">
                        <div className='loginIdPwForm'
                        >
                            <div className="loginInputContainer">
                                <InputBox
                                    type="text"
                                    id="loginId"
                                    // name="id"
                                    autofocus
                                    // required
                                    placeholder="아이디"
                                    value={loginId}
                                    // onKeyUp={ActiveIsPassedLogin}
                                    onChange={changeLoginId} />
                                <InputBox
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
                            <div className="loginErrorBox">
                                <p className="loginError">{loginMessage}</p>
                            </div>
                            <SingleButton
                                type="submit"
                                className={'loginButton  ${active ? "loginButtonActive" : "loginButtonUnActive"}'}
                                // disabled={adminValue === '' || loginPwValue === '' ? true : false}
                                // disabled={loading}
                                onClick={login}
                            >로그인</SingleButton>
                            <ul className="foot">
                                <li><Link to="/signUp" >회원가입</Link></li>
                                <li><Link to="/findId">아이디 비밀번호 찾기</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}