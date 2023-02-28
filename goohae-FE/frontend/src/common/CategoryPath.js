import styles from "./CSS/CategoryPath.module.css"


export default function CategoryPath ({productCategory}) {

    //기본경로 
    let imgPath ="../stores/images/sub/bedroom/BedroomTitle.png";

    function categoryFilter ( classify ){
        
        if(classify === "L") {
            imgPath += "living/livingTitle.png";
            return "거실"
        } else if(classify === "B") {
            // imgPath += "bedroom/BedroomTitle.png";
            console.log(imgPath);
            return "침실"
        } else if(classify === "K") {
            imgPath += "/dining/DiningTitle.png";
            return "주방"
        } else if(classify === "D") {
            imgPath += "Dressroom/DressroomTitle.png";
            return "드레스룸"
        } 
    }
    
    return (
        <>
            <div className={styles.categoryPath}>
                <span>홈 &gt; </span>
                <span>{categoryFilter(productCategory.classify)} &gt; </span>
                <span>{productCategory.category_name}</span>
            </div>
            <img className={styles.subHeader} src={imgPath} alt="img"/>
        </>

    )
}