import { Link } from "react-router-dom";
import "../../css/findId/findId.css"



export default function FindID() {


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
                        <label htmlFor="findId_id" className="findIdLabel">이름</label>
                        <input type="text" id="fiName" name="fiName" className="findIdInput" required placeholder="이름" />
                        <p className="findIdWarning hidden">이름을 입력해주세요</p>
                        <label htmlFor="findiw_name" className="findIdLabel">이메일</label>
                        <div className="findIEemailWrap">
                            <input type="text" id="fiEmail" name="fiEmail" className="findIdInput" minLength={5} autofocus required />
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
                        <label htmlFor="findId_phone" className="findIdLabel">휴대전화</label>
                        <div className="findIdPhoneWrap">
                            <input type="text" name="mobile1" className="findIdInput fiMobile" required readOnly />
                            -
                            <input type="text" name="mobile2" className="findIdInput fiMobile" minLength={4} maxLength={4} required onkeyup="this.value=this.value.replace(/[^-0-9]/g,'');" />
                            -
                            <input type="text" name="mobile3" className="findIdInput fiMobile" minLength={4} maxLength={4} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
                        </div>
                        <p className="findIdWarning hidden">휴대전화를 입력해주세요</p>
                        <button type="submit" className="findIdBtn">아이디 찾기</button>
                    </div>
                    <Link to="/Login" className="findIdLinkToLogin">로그인으로 돌아가기</Link>

                </div>
            </div>
        </div>
    );



}