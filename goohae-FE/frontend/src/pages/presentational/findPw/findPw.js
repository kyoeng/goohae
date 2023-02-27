import { Link } from "react-router-dom";
import "../../css/findPw/findPw.css"

export default function FindPw() {
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
                            <label htmlFor="findPw_id" className="findPwLabel">아이디</label>
                            <input type="id" id="fpId" className="findPwInput" name="fpId" required placeholder="아이디" />
                            <span className="hidden">아이디를 입력해주세요</span>
                            <label htmlFor="findPw_name" className="findPwLabel">이름</label>
                            <input type="text" id="fpName" className="findPwInput" name="fpName" required placeholder="이름" />
                            <span className="hidden">이름을 입력해주세요</span>
                            <label htmlFor="findPw_phone" className="findPwLabel">휴대전화</label>
                            <div className="findPwPhone">
                                <input type="text" name="mobile1" className="findPwInput fpMobile" required readOnly />
                                -
                                <input type="text" name="mobile2" className="findPwInput fpMobile" minLength={4} maxLength={4} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
                                -
                                <input type="text" name="mobile3" className="findPwInput fpMobile" minLength={4} maxLength={4} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
                            </div>
                            {/* <input type="email" name="fdEmail" id="fdEmail" required placeholder="이메일"> */}
                            <span className="hidden">휴대전화를 <span className="nonDisplay">정확하게</span> 입력해주세요</span>
                            <label htmlFor="findPw_email" className="findPwLabel">이메일</label>
                            <div className="findPwPhoneEmail">
                                <input type="email" className="findPwEmail findPwInput" name="fpFw" minLength={5} autofocus required />
                                @
                                <select className="findPwInput findPwEmailSel">
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
                            <button type="submit" className="findPwBtn">비밀번호 찾기</button>
                        </div>
                        <Link to="/Login" className="findPwLinkToLogin">로그인으로 돌아가기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}