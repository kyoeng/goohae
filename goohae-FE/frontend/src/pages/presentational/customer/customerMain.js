import customerStyled from '../../css/customer/customer.module.css';

export default function CustomerMain() {
    return (
        <>
            <h1 className={customerStyled.csTitle}>고객 지원 안내</h1>
            <div className={customerStyled.customerMainContainer}>
                <ul className={customerStyled.phoneBox}>
                    <li>
                        <strong>고객센터 문의</strong>
                        <span>1577 - 5670</span>
                    </li>
                    <li>
                        <p>전화로 문의 시 월, 화요일 / 공휴일 다음날은 상담전화가 많아 일정이 다소 지연될 수 있습니다.</p>
                        <span>1:1문의 주시면 순차적으로 답변드리겠습니다.</span>
                    </li>
                    <li>
                        <span className='day'>평일</span>
                        <span>9 : 30 ~ 18 : 30</span>
                        <span className='lunch'>( 점심시간</span>
                        <span>13 : 20 ~ 14 : 10 )</span>
                        <span className='day'>토요일</span>
                        <span>9 : 30 ~ 12 : 30 <br /></span>
                        <div>일요일 및 법정 공휴일 휴무</div>
                    </li>
                </ul>
            </div>

        </>
    );
}