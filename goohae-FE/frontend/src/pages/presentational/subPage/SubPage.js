import AppLayout from "../../../common/layout/AppLayout";
import SubPageBannerContainer from "../../../common/SubBannerContainer";
import bedCategory from "../../../dummyData/bedCategory.json"
import Product_container_4ea from "../../../common/Product_container_4ea";
import { useState } from 'react';
import Product_container_8ea from "../../../common/Product_container_8ea";
import Product_Box from '../../../common/Product_Box';
import data from "../../../dummyData/data.json"
import data2 from "../../../dummyData/data2.json"

export default function SubPage() {

    // const [selectedNavCon, setSelectedNavCon] = useState(-1);

    // Banner 밑에 Nav바 클릭 이벤트를 주기 위한 useState 
    const [selectedNavCon, setSelectedNavCon] = useState(0);

    return (
        <AppLayout>
            <SubPageBannerContainer productCategory={bedCategory} selectedNavCon={selectedNavCon} setSelectedNavCon={setSelectedNavCon} />
            <div style={{width:"1200px", margin:"0 auto"}}>
                <Product_container_4ea title={"Best Product"}>
                    <Product_Box data={data}/>
                </Product_container_4ea>
                <Product_container_8ea title={"Product"}>
                    <Product_Box data={data2}/>
                </Product_container_8ea>
            </div>
        </AppLayout>
    );
}