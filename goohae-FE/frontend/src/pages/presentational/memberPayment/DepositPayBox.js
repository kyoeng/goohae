import SelectBox from "./SelectBox";
import styled from 'styled-components';

export default function DepositPayBox({cashBills, setCashBills, cashBillNumber , depositeName,depositeBank}) {

    const banksOption = ["은행을 선택하세요","카카오뱅크", "우리은행", "농협은행", "외환응행", "하나은행", "국민은행", "신한은행"]
    
    const SelectStyle = {
        border: "1px solid rgb(80, 93, 208)",
        color: "rgb(80, 93, 208)"
    }

    return(
        <div style={{display:"flex", flexDirection:"column" ,gap:"20px", marginTop:"20px"}}>
            <PayMethDiv>
                <PayMethLabel>은행선택</PayMethLabel>
                <SelectBox options={banksOption} directInput={false} postMemo1={depositeBank}/>
            </PayMethDiv>
            <PayMethDiv>
                <PayMethLabel>입금자명</PayMethLabel>
                <input onChange={(e) => depositeName.current=e.target.value} style={{width:"150px", height:"40px"}}/>
            </PayMethDiv>
            <div>
                <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                    <CashBillSt style={cashBills === "Individual" ? SelectStyle : {} } onClick={() => setCashBills("Individual")}>소득공제</CashBillSt>
                    <CashBillSt style={cashBills === "Business" ? SelectStyle : {} } onClick={() => setCashBills("Business")}>지출증빙</CashBillSt>
                    <CashBillSt style={cashBills === "" ? SelectStyle : {} } onClick={() => setCashBills("")}>신청안함</CashBillSt>
                </div>
                {cashBills === "Individual" ? <input onChange={(e)=> cashBillNumber.current = e.target.value } style={{marginTop:"20px", display:"inline-block" , width:"220px", height:"40px"}} placeholder="핸드폰 번호를 입력하세요."/> :""}
                {cashBills === "Business" ? <input onChange={(e)=> cashBillNumber.current = e.target.value } style={{marginTop:"20px", display:"inline-block" , width:"220px", height:"40px"}} placeholder="사업자 등록 번호를 입력하세요."/>:""}
            </div>
        </div>
    );
}

const PayMethDiv = styled.div`
    display :flex;
    flex-direction: row;
    align-items: center;
`
const PayMethLabel = styled.label`
    display: inline-block;
    width: 100px;
    color: black;
    font-size: 13px;
`
const CashBillSt = styled.span`
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
    font-size:12px; 
    width:80px; 
    height:40px;
    border:1px solid black;
`