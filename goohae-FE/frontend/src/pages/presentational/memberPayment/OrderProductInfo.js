import SubFormTitle from "./SubFormTitle";
import styles from "./OrderProductInfo.module.css"


export default function OrderProductInfo({orderProductData}) {
    console.log(orderProductData);
    return (
        <>
            <SubFormTitle title={"상품정보"}/>
            {
                orderProductData.map((v,i)=>{
                    return (
                        <div key={v.title+i} className={styles.paymentProductInfo} style={{display:"flex", width:"700px", flexWrap: "no-wrap"}}>
                            <img src={v.img} style={{width:"100px"}}/>
                            <div style={{flex:2}}>
                                <p>{v.title}</p>
                                <p>{v.option}</p>
                            </div>
                            <p style={{flex:.5}}>
                                {v.ea} 개
                            </p>
                            <div style={{flex:.5}}>
                                <p>상품 가격</p>
                                <p>{v.price}</p>
                            </div>
                            <div style={{flex:.5}}>
                                <p>배송료</p>
                                <p>{v.post_fee}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}