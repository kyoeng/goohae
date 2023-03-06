import Modal from "../../../common/modal/modal";

export default function ProdModal() {
    return(
        <Modal>
            <h2>상품정보</h2>
            <p>상품명 : {}</p>
            <p>상품가격 : {}</p>
            <p>할인율 : {}%</p>
            <p>할인가 : {}</p>
            <img src="" alt="" />
        </Modal>
    );
}