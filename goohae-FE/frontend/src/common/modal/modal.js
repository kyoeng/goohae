import styled from '../CSS/modal.module.css';

export default function Modal({ infoData, modalOff, reqProdDel }) {

    return (
        <div className={styled.modalContainer} onClick={modalOff}>
            <div className={styled.modalWindow}>
                <div>상품명 : {infoData.title}</div>
                <div>가격 : {infoData.price}</div>
                <div>원가 : {infoData.orig_price}</div>
                <img className={styled.modalImg} src={infoData.img} alt="이미지" />

                <div><button onClick={reqProdDel}>해당상품 삭제하기</button></div>
                <div><button>해당상품 수정하기</button></div>
            </div>

        </div>
    );
}