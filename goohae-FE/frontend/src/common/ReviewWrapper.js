import { useState } from "react";
import reviewProData from "../dummyData/reviewProData.json";
import ReviewContainer from './ReviewContainer';
import ReviewBox from './ReviewBox';
import ReviewPopUp from './ReviewPopUp';

export default function ReviewWrapper() {

    // const mainReview = { }
    const [OnoffPopUp, setOnoffPopUp] = useState(-1);       // 팝업이 보이고 안보이고를 결정할 State변수

    // 리뷰 팝업 on/off 함수
    function PopUpOnoff(e) {
        e.preventDefault();
        if (e.target.tagName === "A") {
            setOnoffPopUp(+e.target.id.split(".")[1]);
        } else {
            const evt = e.target.closest("button");
            setOnoffPopUp(+evt.id.split(".")[1]);
        }
    }
    // 팝업의 버튼 클릭시 이벤트 함수
    function changePopUp(e) {
        const evt = +e.target.id.split(".")[1];
        if (evt > 0) {
            setOnoffPopUp(OnoffPopUp + 1);
        } else {
            setOnoffPopUp(OnoffPopUp - 1);
        }
    }

    return (
        <>
            <ReviewContainer>
                <ReviewBox reviewProData={reviewProData} PopUpOnoff={PopUpOnoff} />
            </ReviewContainer>

            <ReviewPopUp reviewProData={reviewProData} OnoffPopUp={OnoffPopUp} PopUpOnoff={PopUpOnoff} changePopUp={changePopUp} />
        </>
    );
}