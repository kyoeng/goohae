import '../../../css/myPage/memeberInfo/memeberInfo.css';
import { Link } from 'react-router-dom';
import AppLayout from './../../../../common/layout/AppLayout';

export default function Memberinfo() {



    return (
        <AppLayout>
            <div className="memberInfonMain">
                <section id="memberInfoWrap">
                    <div className="myInfoCategory">
                        <Link to="/" className="myPageLink">홈 &gt;</Link>
                        <Link to="/myPage" className="myPageLink">마이쇼핑 &gt;</Link>
                        <Link to="/memberInfo" className="myPageLink" id="myPageSubLink">내 정보</Link>
                    </div>
                    <p className="memberInfoTitle">내 정보</p>
                    <div className="Ment">
                        <p className='memberInfoHeadText'><strong className="memberInfoHeadTextName">유정현</strong> 님 환영합니다.</p>
                        <p><span className="memberInfoMemberGrade">일반회원</span>으로 <strong className="memberInfoPoint">10,000원 이상 구매 시 2% 추가 적립</strong>을 받을 수 있습니다.</p>
                    </div>
                    <article className="FormWrap">
                        <form className="memberInfoForm" action="server.html" name="memberJoin">
                            <div className="memberInfoIdInputWrap">
                                <p>아이디</p>
                                <input type="text" className="memberInfoIdInput" name="id" defaultValue="dbdb1114" disabled />
                                <p className="infoGuide">오류 메세지 입니다.</p>
                            </div>
                            <div className="memberInfoEmailInputWrap">
                                <p>이메일</p>
                                <input className="memberINfoEmailIdInput" type="text" name="e_mailId" />
                                <p className="infoGuide">오류 메세지 입니다.</p>
                            </div>
                            <div className="memberInfoPwInputWrap">
                                <p>비밀번호</p>
                                <input className="memberInfoPwInput" type="password" name="psw" minLength={10} maxLength={16} placeholder=" 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합" />
                                <p className="infoGuide">오류 메세지 입니다.</p>
                            </div>
                            <div className="memberInfoPwConfirmInputWrap">
                                <p>비밀번호 확인</p>
                                <input className="memberInfoPwConfirmInput" type="password" name="psw" minLength={7} maxLength={15} />
                                <p className="infoGuide">오류 메세지 입니다.</p>
                            </div>
                            <div className="memberInfoNameInputWrap">
                                <p>이름</p>
                                <input className="memberInfoNameInput" type="text" name="Name" />
                                <p className="infoGuide">오류 메세지 입니다.</p>
                            </div>
                            <div className="memberInfoTellInputWrap">
                                <p>휴대전화</p>
                                <input className="memberInfoTellInput" type="text" name="lastPhoneNum" />
                                <p className="infoGuide">오류 메세지 입니다.</p>
                            </div>
                            <div className="emailGetRadio">
                                <div>
                                    <input type="radio" name="EmailGet" id="emailGet" defaultValue="Get" />
                                    <label htmlFor="emailGet"><span className="radioImg"></span></label>
                                    <label htmlFor="emailGet">이메일 수신함</label>
                                </div>
                                <div>
                                    <input type="radio" name="EmailGet" id="emailNoGet" defaultValue="NoGet" defaultChecked />
                                    <label htmlFor="emailNoGet"><span className="radioImg"></span></label>
                                    <label htmlFor="emailNoGet">이메일 수신안함</label>
                                </div>
                            </div>
                            <div className="ButtonWrap">
                                <button className="memberInfoBtn">
                                    취소
                                </button>
                                <button className="memberInfoBtn " id="memberInfoSubmitBtn" type="submit">
                                    회원정보 수정
                                </button>
                            </div>
                        </form>
                    </article>
                </section>
            </div>
        </AppLayout>
    );
}