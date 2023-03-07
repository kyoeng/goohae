import FinPayAgree from "./FinPayAgree"
import styled from "styled-components"
import styles from "../../../CSS/myPage/memberPayments/FinPay.module.css"

export default function FinPay({orderProductData,allAgree, setAllAgree, agree1,setAgree1,agree2,setAgree2,agree3,setAgree3, }) {

    let finPrice = 0;
    let finPostFee = 0;

    const FinPriceCal = orderProductData.map((v,i)=>{
        finPrice += parseInt(JSON.stringify(v.price));
        finPostFee += parseInt(JSON.stringify(v.post_fee));
        return (
            <p key={`product_${i}`} style={{paddingLeft:"10px", display:"flex",justifyContent:"space-between"}}>
                <span style={{color:"black",fontWeight:"bold"}}>{v.title}</span>
                <span style={{color:"black",fontWeight:"bold"}}>{v.price}</span>
            </p>
        )
    })

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <p style={{width:"100%",textAlign:"start",fontSize:"20px", color:"black", fontWeight:"bold"}}>최종 결제금액</p>
            <PayPriceWrap style={{flexDirection:"column", gap:"10px"}}>
                <PayPriceTag>상품금액</PayPriceTag>
                {FinPriceCal}
            </PayPriceWrap>
            <PayPriceWrap>
                <PayPriceTag>배송비</PayPriceTag>
                <span style={{color:"black",fontWeight:"bold"}}>{finPostFee}</span>
            </PayPriceWrap>
            <PayPriceWrap>
                <PayPriceTag style={{color:"black"}}>총 결제 예상금액</PayPriceTag>
                <span style={{fontSize:"18px", color:"black", fontWeight:"bold"}}>{finPrice + finPostFee}</span>
            </PayPriceWrap>
            <FinPayAgree allAgree={allAgree} setAllAgree={setAllAgree} agree1={agree1} setAgree1={setAgree1} 
            agree2={agree2} setAgree2 = {setAgree2} agree3 = {agree3} setAgree3 = {setAgree3}/>
            <p className={styles.FinPayBtn} >주문하기</p>
        </div>
    )
}

const PayPriceTag = styled.span`
    font-size: 15px;
    font-weight: bold;
`
const PayPriceWrap = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`