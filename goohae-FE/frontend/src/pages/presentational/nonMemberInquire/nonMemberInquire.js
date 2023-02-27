import { Link } from "react-router-dom";
import "../../css/nonMemberInquire/nonMemberInquire.css"


export default function nonMemberInquire() {
    
    function nonMember(){
        
    
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
                            <label htmlFor="nonMem_id" className="nonMemberLabel">이름</label>
                            <input type="text" id="nonMemberName" name="nonMemberName" required placeholder="국문으로 입력해 주세요" onkeyup="this.value=this.value.replace(/[^-ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'');" />
                            <p className="nonMemberWarning hidden">이름을 입력해주세요</p>
                            <label htmlFor="nonMem_phone" className="nonMemberLabel">휴대전화</label>
                            <div className="nonMemberPhoneBox">
                                <input type="text" name="mobile1" className="nonMemberPhone" required   />
                                -
                                <input type="text" name="mobile2" className="nonMemberPhone" minLength={4} maxLength={4} required onkeyup="this.value=this.value.replace(/[^-0-9]/g,'');" />
                                -
                                <input type="text" name="mobile3" className="nonMemberPhone" minLength={4} maxLength={4} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
                            </div>
                            <p className="nonMemberWarning hidden">휴대전화를입력해주세요</p>
                            <label htmlFor="nonMem_OrderNumber" className="nonMemberLabel">주문번호</label>
                            <input type="text" id="nonMemberEmail" name="nonMemberEmail" required placeholder="메일, 문자로 발송된 번호를 입력해 주세요" />
                            <p className="nonMemberWarning hidden">주문번호를 입력해주세요</p>
                            <button className="nonMemberBtn"type="summit" onclick={nonMember} disabled>
                                주문조회하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
