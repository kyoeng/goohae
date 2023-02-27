import styles from "./CSS/ReviewPopUp.module.css";
import { useRef } from "react";

// getData : 리뷰 데이터가 저장된 배열을 받음
// OnoffPopUp : 리뷰 팝업이 보이고 안보이고를 결정할 State변수값 받음
// PopUpOnoff : exitBtn에 적용할 OnoffPopUp값 바꿀 이벤트 함수 받음
// changePopUp : 팝업이 열릴 시 리뷰박스 넘길 버튼에 대한 이벤트 함수 받음
export default function ReviewPopUp({ reviewProData, OnoffPopUp, PopUpOnoff, changePopUp }) {
    const slideList = useRef([]);           // li 태그 참조

    // 팝업 of/off 스타일
    const onPage = {
        display: "flex"
    }, offPage = {
        display: "none"
    };

    // reviewPopUp 스타일(보이고 안보이고를 위한)
    const BoxOn = {
        zIndex: "110"
    }, BoxOff = {
        zIndex: "0"
    };

    // PopUp Btn 스타일
    const BtnStyleOn = {
        visibility: "visible"
    }, BtnStyleOff = {
        visibility: "hidden"
    };


    // 리뷰 팝업 박스 생성
    let outputReviewPopUp = [];

    reviewProData.forEach((v, i) => {
        outputReviewPopUp.push(
            <li key={`reviewPopUp${i}`} className={styles.reviewPopUp}
                ref={(e) => slideList.current[i] = e} style={i === OnoffPopUp ? BoxOn : BoxOff}>

                <img src={v.img} alt="Img" />

                <div className={styles.reviewPopUpInfo}>
                    <p className={styles.reviewPopUpProduct}>{v.product_name}</p>

                    <div className={styles.reviewPopUpIdScore}>
                        <span className={styles.reviewPopUpWriter}>{v.user_id}</span>
                        <span className={styles.reviewPopUpScore}>{v.point}</span>
                    </div>

                    <p className={styles.reviewPopUpTitle}>{v.title}</p>
                    <p className={styles.reviewPopUpContent}>{v.cotent}</p>
                </div>
            </li>
        );
    });


    return (
        <>
            <article className={styles.PopUpMainContainer} style={OnoffPopUp < 0 ? offPage : onPage}>
                <div className={styles.reviewPopUpContainer}>
                    <ul className={styles.reviewPopUpInner}>
                        {outputReviewPopUp}
                    </ul>

                    <button style={OnoffPopUp === 0 ? BtnStyleOff : BtnStyleOn}
                        className={styles.PopUpBtnLeft} id="PopUpslideBtn.0" onClick={(e) => changePopUp(e)}></button>

                    <button style={OnoffPopUp === (reviewProData.length - 1) ? BtnStyleOff : BtnStyleOn}
                        className={styles.PopUpBtnRight} id="PopUpslideBtn.1" onClick={(e) => changePopUp(e)}></button>
                </div>

                <p className={styles.PopUpSlideIdx}>{OnoffPopUp + 1} / {reviewProData.length}</p>

                <button className={styles.exitBtn} id="offPopUp.-1" onClick={(e) => PopUpOnoff(e)}>
                    <img src="./images/icon/cancel.png" alt="exitBtnImg" />
                </button>
            </article>
        </>
    );
}
