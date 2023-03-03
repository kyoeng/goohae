import SubFormTitle from "./SubFormTitle";
import styled from "styled-components";
import SelectBox from "./SelectBox";


export default function OrderInfo({postName, orderPhone1, orderPhone2, orderPhone3, postNum,postAddress1,postAddress2,postMemo1,postMemo2}) {

    const OrderMemoInfo  = ["직접입력","빠른 배송 부탁드려요", "부재시 문 앞에 놔주세요"];

    const inputStyle = (width, height) => {
        return{
                width: `${width}`,
                height: `${height}`
                }
    }

    return (
        <>
            <SubFormTitle title={"배송지 정보"}/>
            <FormRow>
                <Label style={{width:"100px"}} >받는 사람</Label>
                <input style={inputStyle("100px","40px")} onChange={e=>postName.current=e.target.value}/>
            </FormRow>
            <FormRow>
                <Label style={{width:"100px"}}>휴대폰번호</Label>
                <PhonNumWrap>
                    <input style={inputStyle("50px","40px")} onChange={e=>orderPhone1 = e.target.value } />-
                    <input style={inputStyle("50px","40px")} onChange={e=>orderPhone2 = e.target.value } />-
                    <input style={inputStyle("50px","40px")} onChange={e=>orderPhone3 = e.target.value } />
                </PhonNumWrap>
            </FormRow>
            <FormRow>
                <Label style={{width:"100px"}}>주소</Label>
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <div style={{width:"200px", display:"flex"}}>
                        <input style={inputStyle("100px","40px")} onChange={e=>postNum.current = e.target.value }/>
                        <PostNumBtn>우편번호 찾기</PostNumBtn>
                        </div>
                    <div>
                        <input style={inputStyle("300px","40px")}  onChange={e=> postAddress1.current = e.target.value}/>
                        <AddressMessage style={{marginLeft:"20px"}}>기본 주소를 입력해주세요</AddressMessage>
                    </div>
                    <div>
                        <input style={inputStyle("300px","40px")}  onChange={e=> postAddress2.current = e.target.value}/>
                        <AddressMessage style={{marginLeft:"20px"}}>상세 주소를 입력해주세요</AddressMessage>
                    </div>
                </div>
            </FormRow>
            <FormRow>
                <Label style={{width:"100px"}}>배송 메모</Label>
                {/* 모듈화 하면 될듯. */}
                <SelectBox options={OrderMemoInfo} directInput={"직접입력"} memo1={postMemo1} memo2={postMemo2}/>
            </FormRow>
        </>
    );
}

const Label = styled.span`
    color: black;
    font-size: 15px;
    width: 100px;
`

const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    margin-top: 20px;
`
const AddressMessage = styled.span`
    margin-left: 20px;
`
const PostNumBtn = styled.span`
    border:1px solid black;
    display: flex; 
    width:80px;
    height:40px; 
    box-sizing:border-box;
    justify-content:center;
    align-items:center;
    margin-left:20px; 
`
const PhonNumWrap = styled.div`
    width:400px;
    display:flex;
    gap:10px;
    font-size:20px;
    align-items:center;
`