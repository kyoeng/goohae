import styled from '../CSS/modal.module.css';

export default function Modal({ infoData, modalOff, reqProdDel }) {

    return (
        <div className={styled.modalContainer} onClick={modalOff}>
            <div className={styled.modalWindow}>
                <div>상품명 : {infoData.product_name}</div>
                <div>가격 : {infoData.category_code}</div>
                <div>상품코드 : {infoData.product_code}</div>
                <img className={styled.modalImg} src={infoData.img} alt="이미지" />

                <div><button onClick={reqProdDel}>해당상품 삭제하기</button></div>
                <div><button>해당상품 수정하기</button></div>
            </div>

        </div>
    );
}