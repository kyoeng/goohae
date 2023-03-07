import SelectBox from '../../../../pages/presentational/memberPayment/SelectBox';

export default function CreditCardBox({cardBrand,cardMonthly}) {

    const cardOption = [
        "카드를 골라주세요.","신한카드","국민카드","현대카드","농협카드","우리은행카드","삼성카드"
    ]

    const monthlyOption = [
        "일시불", "3개월", "6개월", "12개월"
    ]

    return (
        <div style={{marginTop:"20px", display:"flex", flexDirection:"column",gap:"10px"}}>
            <SelectBox options={cardOption} memo1={cardBrand}/>
            <SelectBox options={monthlyOption} memo1={cardMonthly}/>
        </div>
    );
}