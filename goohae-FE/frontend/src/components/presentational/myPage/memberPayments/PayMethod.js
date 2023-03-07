import SubFormTitle from "./SubFormTitle";
import CreditCardBox from "./CreditCardBox";
import DepositPayBox from "./DepositPayBox";
import PhonePayBox from "./PhonePayBox";
import KakaoPayBox from "./KakaoPayBox";
import styled from "styled-components";
// import FinPay from "../../../../stores/images/icon/";

export default function PayMethod ({
    creditCard, setCreditCard,  depositPay, setDepositPay, phonePay, setPhonePay, kakaoPay, setKakaoPay, clicked, setClicked,
    cashBills, setCashBills,cashBillNumber,depositeName,depositeBank,cardBrand,cardMonthly, allAgree, setAllAgree,agree1 ,
    setAgree1 ,agree2 ,setAgree2,agree3 ,setAgree3}) {

    // 결제수단 버튼 객체
    const payMethBtn = [
        {
            "title" : "신용카드",
            "icon" : "../../../../stores/images/icon/credit-cards.png"
        },
        {
            "title" : "무통장 입금",
            "icon" : "../../../../stores/images/icon/transaction.png"
        },
        {
            "title" : "핸드폰 결제",
            "icon" : "../../../../stores/images/icon/smartphone-call.png"
        },
        {
            "title" : "카카오페이",
            "icon" : "../../../../stores/images/icon/kakao-talk.png"
        },
    ]
    
    // 다른 버튼 눌렀을때 이전에 눌린 버튼들 효과 해제함수
    function postBtnOff () {
        if(creditCard) setCreditCard(false);
        else if(depositPay) setDepositPay(false);
        else if(phonePay) setPhonePay(false);
        else if(kakaoPay) setKakaoPay(false);
    }

    // 누른 버튼에 효과 주기 위한 함수 
    function switchBtn (title) {
        postBtnOff()
        setClicked(title);
        switch (title) {
            case "신용카드":
                setCreditCard(true);
                break;
            case "무통장 입금":
                setDepositPay(true);
                break;
            case "핸드폰 결제":
                setPhonePay(true);
                break;
            case "카카오페이":
                setKakaoPay(true);
                break;
            default:
                break;
        }
    }

    const iconBtn = payMethBtn.map((v,i)=>{
        return (
            <PayMethBtnSt key={v.title + i} onClick={()=> switchBtn(v.title) } style={{border:`${v.title === clicked ? "1px solid rgb(80, 93, 208)":"1px solid black" }`}} >
                <PayMethBtnImg src={v.icon} alt="img" style={{ filter: `${v.title === clicked ? "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)":""}`  }}/>
                <span style={{fontSize:"15px",color:`${v.title === clicked ? "rgb(80, 93, 208)":"" }`}}>{v.title}</span>
            </PayMethBtnSt>
        )
    })

    return (
        <>
            <SubFormTitle title={"결제수단"}/>
            <div style={{marginTop:"20px"}}>
                <PayMethBtnWrap>{iconBtn}</PayMethBtnWrap>
            </div>
            {creditCard&&<CreditCardBox cardBrand={cardBrand} cardMonthly={cardMonthly}/>}
            {depositPay&&<DepositPayBox cashBills={cashBills} setCashBills={setCashBills} cashBillNumber={cashBillNumber} depositeName = {depositeName} depositeBank={depositeBank}/>}
            {phonePay&&<PhonePayBox/>}
            {kakaoPay&&<KakaoPayBox/>}
        </>
    );
}

const PayMethBtnWrap = styled.div`
    justify-content:space-between;
    display:flex;
    flex-direction:row; 
    width:700px;
`

const PayMethBtnSt = styled.div`
    width:170px;
    padding:10px;
    border-radius:10;
    height:80px; 
    display:flex;
    align-items:center;
    gap:10px;
`
const PayMethBtnImg = styled.img`
    display:inline-block;
    width:60px;
    height:60px;
`