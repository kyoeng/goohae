import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import AddModal from './../../../components/presentational/addModal';


export default function AdminProduct() {
    const [modalTrigger, setModalTrigger] = useState(false);

    const reqAddProd = useOutletContext().reqAddProd;

    function prodModalTrigger() {
        setModalTrigger(pre => !pre);
    }

    return (
        <div className="productContainer">
            <div onClick={prodModalTrigger}>상품추가</div>
            {modalTrigger ? <AddModal modalTrigger={prodModalTrigger} /> : null}
        </div>
    );
}