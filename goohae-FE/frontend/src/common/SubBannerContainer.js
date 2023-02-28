import CategoryPath from "./CategoryPath"
import SubBannerNav from "./SubBannerNav"

export default function SubPageBanner({selectedNavCon,setSelectedNavCon, productCategory }) {

    return (
        <div style={{width:"1200px", margin: "0 auto"}}>
            <CategoryPath productCategory={productCategory}/>
            <SubBannerNav  productCategory={productCategory} setSelectedNavCon={setSelectedNavCon} selectedNavCon={selectedNavCon}/>
        </div>
    );
}
