import styles from '../../../css/myPage/memeberInfo/memeberInfo.module.css';
import { Link } from 'react-router-dom';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import InputBox from '../../../../common/singlePage/inputBox';

export default function Memberinfo() {



    return (
        <AppLayout>
            <div className={styles.memberInfonMain}>
                <section id={styles.memberInfoWrap}>
                <MyPageSubPageCategory myPageSubLinkKr="내 정보"/>
                <MyPsgeSubPageTitle myPsgeSubPageTitle="내 정보"/>
                    <div className={styles.Ment}>
                        <p className={styles.memberInfoHeadText}><strong className={styles.memberInfoHeadTextName}>유정현</strong> 님 환영합니다.</p>
                        <p><span className={styles.memberInfoMemberGrade}>일반회원</span>으로 <strong className={styles.memberInfoPoint}>10,000원 이상 구매 시 2% 추가 적립</strong>을 받을 수 있습니다.</p>
                    </div>
                    <article className={styles.FormWrap}>
                        <form className={styles.memberInfoForm} action="server.html" name="memberJoin">
                            <div className={styles.memberInfoIdInputWrap}>
                                <p>아이디</p>
                                <input type="text" className={styles.memberInfoIdInput} name="id" defaultValue="dbdb1114" disabled />
                                <p className={styles.infoGuide}>오류 메세지 입니다.</p>
                            </div>
                            <div className={styles.memberInfoEmailInputWrap}>
                                <p>이메일</p>
                                <input className={styles.memberINfoEmailIdInput} type="text" name="e_mailId" />
                                <p className={styles.infoGuide}>오류 메세지 입니다.</p>
                            </div>
                            <div className={styles.memberInfoPwInputWrap}>
                            <InputBox label="비밀번호"/>
                                <input className={styles.memberInfoPwInput} type="password" name="psw" minLength={10} maxLength={16} placeholder=" 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합" />
                                <p className={styles.infoGuide}>오류 메세지 입니다.</p>
                            </div>
                            <div className={styles.memberInfoPwConfirmInputWrap}>
                                <InputBox label="비밀번호 확인"/>
                                <input className={styles.memberInfoPwConfirmInput} type="password" name="psw" minLength={7} maxLength={15} />
                                <p className={styles.infoGuide}>오류 메세지 입니다.</p>
                            </div> 
                            <div className={styles.memberInfoNameInputWrap}>
                            <InputBox label="이름"/>
                                <input className={styles.memberInfoNameInput} type="text" name="Name" />
                                <p className={styles.infoGuide}>오류 메세지 입니다.</p>
                            </div>
                            <div className={styles.memberInfoTellInputWrap}>
                                <p>휴대전화</p>
                                <input className={styles.memberInfoTellInput} type="text" name="lastPhoneNum" />
                                <p className={styles.infoGuide}>오류 메세지 입니다.</p>
                            </div>
                            <div className={styles.emailGetRadio}>
                                <div>
                                    <input type="radio" name="EmailGet" id={styles.emailGet} defaultValue="Get" />
                                    <label htmlFor="emailGet"><span className={styles.radioImg}></span></label>
                                    <label htmlFor="emailGet">이메일 수신함</label>
                                </div>
                                <div>
                                    <input type="radio" name="EmailGet" id={styles.emailNoGet} defaultValue="NoGet" defaultChecked />
                                    <label htmlFor="emailNoGet"><span className={styles.radioImg}></span></label>
                                    <label htmlFor="emailNoGet">이메일 수신안함</label>
                                </div>
                            </div>
                            <div className={styles.buttonWrap}>
                                <button className={styles.memberInfoBtn}>
                                    취소
                                </button>
                                <button className={styles.memberInfoBtn} id={styles.memberInfoSubmitBtn} type="submit">
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