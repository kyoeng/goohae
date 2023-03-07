import styled from 'styled-components';

export default function FinPayAgree({allAgree, setAllAgree, agree1,setAgree1,agree2,setAgree2,agree3,setAgree3, }) {

    const agreeTitle = [
        "(필수)구매조건 확인 및 결제진행 동의 ",
        "(필수)개인정보 수집 및 이용동의",
        "(필수)개인정보 제3자 제공동의"
    ]

    const agreeArray = [setAgree1,agree1,setAgree2,agree2,setAgree3,agree3];    

    function check(e){
        let target = e.target.closest("div");
        let i = target.id.split("_")[1];
        console.log(target)
        switch (i) {
            case "0":
                setAgree1(!agree1)
                break;

            case "1":
                setAgree2(!agree2)
                break;

            case "2":
                setAgree3(!agree3)
                break;

            default:
                break;
        }
    }

    function allCheck() {
        setAllAgree(!allAgree)
        if ( allAgree ){
            setAgree1(true);
            setAgree2(true);
            setAgree3(true);
        } else {
            setAgree1(false);
            setAgree2(false);
            setAgree3(false);
        }
    }
    
    const agreeMap = agreeTitle.map((v,i) => {
        return (
            <div  id={`agreeCheck_${i}`}   key={`agreeCheck_${i}`} style={{marginBottom:"5px", display:"flex", alignItems:"center", gap:"10px", cursor:"pointer"}}>
                <CheckImag onClick={(e)=>{check(e)}} src={require(`../../../../stores/images/icon/${agreeArray[(i+1)*2-1]?"checked":"unChecked"}.png`)} alt="img" />
                <span onClick={(e)=>{check(e)}} style={{color:"black"}}>
                    {v}
                </span>
            </div>
        );
    })

    

    return (
        <AgreeWrap>
            <p style={{fontSize:"15px", marginBottom:"10px", display:"flex", alignItems:"center", gap:"10px", cursor:"pointer"}}>
                <AllCheckImag onClick={()=>allCheck()} src={require(`../../../../stores/images/icon/${allAgree?"checked":"unChecked"}.png`)} alt="img" />
                <span onClick={()=>allCheck()} style={{color:"black"}}>전체 동의하기</span>
            </p>
            <div>
                {agreeMap}
            </div>
        </AgreeWrap>
    );
}

const AllCheckImag = styled.img`
    display: inline-block;
    width: 20px;
    height: 20px;
`

const CheckImag = styled.img`
    display: inline-block;
    width: 15px;
    height: 15px;
`

const AgreeWrap = styled.div`
    /* justify-content: baseline; */
    width: 100%;
    align-items: baseline;
    margin-top: 10px;
`