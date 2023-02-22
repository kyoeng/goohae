import { useState } from 'react';
export default function TableModal({ userData, modalTrigger, arrIdx, reqDelete }) {
    let totalData = userData;
    const [modalData, setModalData] = useState({ ...totalData[arrIdx] });

    return (
        <>
            <div className="modalContainer" onClick={modalTrigger} >
            </div>
            <div className="tableModal">
                <div>{modalData.userSeq}</div>
                <div>{modalData.id}</div>
                <div>{modalData.name}</div>
                <button
                    id="reqUserDelete"
                    onClick={reqDelete}>회원삭제</button>
            </div>
        </>
    );
}