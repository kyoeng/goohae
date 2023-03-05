import styled from "styled-components"; // 임포트 해줘야함
import OrderInfo from "./OrderInfo";
import OrderProductInfo from "./OrderProductInfo"
import PayMethod from "./PayMethod";
import { useRef, useState, useEffect } from 'react';
import orderProductData from "../../../dummyData/orderProductData.json"
import AppLayout from '../../../common/layout/AppLayout';
import FinPay from "./FinPay";
import { all } from "axios";

export default function MemberPayment() {
    const [
        postName,                              // 배송받는 사람 이름
        [orderPhone1,orderPhone2,orderPhone3], // 핸드폰번호
        [postNum, postAddress1,postAddress2],  // 우편번호, 기본주소, 상세주소
        [postMemo1,postMemo2],                 // 배송메모
    ] = [
        useRef(),
        [useRef(),useRef(),useRef()],
        [useRef(),useRef(),useRef()],
        [useRef(),useRef()],
    ]

    const
    [ [creditCard, setCreditCard],[depositPay, setDepositPay],[phonePay, setPhonePay],[kakaoPay, setKakaoPay], [clicked,setClicked], [cashBills,setCashBills],cashBillNumber,depositeName,depositeBank,cardBrand,cardMonthly ] = 
    [ useState(true),useState(false),useState(false),useState(false),useState("신용카드"),useState(""),useRef(),useRef(),useRef(),useRef(),useRef()]

    const [[allAgree, setAllAgree], [agree1,setAgree1], [agree2,setAgree2],[agree3,setAgree3]]
        = [useState(false),useState(false),useState(false),useState(false)]

        useEffect(()=>{
            if( agree1 && agree2 && agree3  ) setAllAgree(true);
            else setAllAgree(false);
        }, [agree1,agree2,agree3])
        useEffect(()=>{
            if(allAgree){
                setAgree1(true);
                setAgree2(true);
                setAgree3(true);
            } else {
                setAgree1(false);
                setAgree2(false);
                setAgree3(false);
            }

        }, allAgree)
    return (
        <>
        <AppLayout>
            <body>
                <div style={{width:"1100px", margin: "0 auto"}}>
                    <FinPayWrap >
                        <FinPay orderProductData={orderProductData} allAgree={allAgree} setAllAgree={setAllAgree} agree1={agree1} setAgree1={setAgree1} 
                        agree2={agree2} setAgree2 = {setAgree2} agree3 = {agree3} setAgree3 = {setAgree3}/>
                    </FinPayWrap>
                    <PaymentTag>주문/결제</PaymentTag>
                    <OrderInfo 
                        postName ={postName}
                        orderPhone1 = {orderPhone1}
                        orderPhone2 = {orderPhone2}
                        orderPhone3 = {orderPhone3}
                        postNum = {postNum}
                        postAddress1 = {postAddress1}
                        postAddress2 = {postAddress2}
                        postMemo1 = {postMemo1}
                        postMemo2 = {postMemo2}
                    />
                    <OrderProductInfo orderProductData = {orderProductData}/>
                    <PayMethod
                        creditCard ={creditCard} 
                        setCreditCard = {setCreditCard}
                        depositPay = {depositPay} 
                        setDepositPay = {setDepositPay} 
                        phonePay = {phonePay} 
                        setPhonePay = {setPhonePay} 
                        kakaoPay = {kakaoPay} 
                        setKakaoPay = {setKakaoPay} 
                        clicked = {clicked}
                        setClicked = {setClicked}
                        cashBills = {cashBills}
                        setCashBills = {setCashBills}
                        cashBillNumber = {cashBillNumber} 
                        depositeName = {depositeName}
                        depositeBank = {depositeBank}
                        cardBrand = {cardBrand}
                        cardMonthly={cardMonthly}
                        allAgree = {allAgree}
                        setAllAgree = {setAllAgree}
                        agree1 = {agree1}
                        setAgree1 = {setAgree1}
                        agree2 = {agree2}
                        setAgree2 = {setAgree2}
                        agree3 = {agree3}
                        setAgree3 = {setAgree3}
                    />
                </div>
            </body>
        </AppLayout>
        </>
    );
}

const PaymentTag = styled.p`
    font-family: NanumMyeongjo;
    font-size: 2rem;
    font-weight: 800;
    color: #1A1B23;
    margin-bottom: 50px;
`

const FinPayWrap = styled.div`
    display: inline-block;
    position: sticky;
    padding: 10px;
    width: 350px;
    left: 830px;
    top: 250px;
`