import styles from "./CSS/SubBannerNav.module.css"

export default function SubHeaderNav ({productCategory,setSelectedNavCon,selectedNavCon}) {

    // Nav메뉴
    let NavCon = [];
    function categoryFilter ( classify ){
        console.log(classify)
        if(classify === "L") {
            NavCon = ["소파","테이블","의자","TV콘솔" ]
            return "거실"
        } else if(classify === "B") {
            NavCon = ["침대","매트리스","협탁","TV콘솔" ]
            return "침실"
        } else if(classify === "K") {
            NavCon = ["식탁", "의자" ]
            return "주방"
        } else if(classify === "D") {
            NavCon = [ "헹거","수납장","화장대" ]
            return "드레스룸"
        } 
    }

    const selectStyle = {
        color: "#505DD0",
        fontWeight: "bold",
        fontSize: "1.4rem"
    }

    const noSelecStyle = {
        color: "black",
        fontSize: "1.4rem"
    }

    categoryFilter(productCategory.classify)
    
    const onClickFunc = (e) =>{
        setSelectedNavCon(+e.target.id.split(".")[1]);
    }
    
    const NavHeader = NavCon.map((v,idx)=>{
        if ( selectedNavCon === idx ){
            return (
                <span 
                onClick={(e)=>onClickFunc(e)}
                className={styles.NavContents}
                key={`Navcon.${idx}`} 
                id={`NavconId.${idx}`} 
                style={selectStyle} >{v}</span> );
            } else {
            return (
                <span 
                onClick={(e)=>onClickFunc(e)}
                className={styles.NavContents}
                key={`Navcon.${idx}`} 
                id={`NavconId.${idx}`} 
                style={noSelecStyle} >{v}</span> );
        }
    });

    return(
        <div className={styles.NavContainer}>
            {NavHeader}
        </div>
    );
}