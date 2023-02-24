import { useState } from "react";
import { useAsyncError, useOutletContext } from "react-router-dom";
import axios from 'axios';

import TableBody from "../../components/tableBody";
import TableModal from "../../components/tableModal";

export default function AdminUser() {

    //최상단에서 받아온 전체 데이터
    const userData = useOutletContext().userData;
    const reqDelUser = useOutletContext().reqDelUser;

    //모달창 트리거
    const [trigger, setTrigger] = useState(false);
    //클릭한놈 인덱스 번호
    const [tableIndex, setTableIndex] = useState('');
    //전체 배열인덱스 데이터
    const [idxData, setIdxData] = useState({});

    //테이블 클릭하면 모달창 열림,주변배경 클릭하면 모달창 닫힘 , 인덱스도 바뀜
    function modalTrigger(e) {
        if (e.target.dataset.idx) {
            setTableIndex(e.target.dataset.idx);
            setIdxData({ ...userData[tableIndex] });
        }
        setTrigger(pre => !pre);
    }

    return (
        <div className="adminUserContainer">
            <div className="constentsHeader adminUser">
                <span>회원관리</span>
            </div>

            <div className="userContainer">
                <div className="userTable">
                    <div className="uTableHead">
                        <div>ID</div>
                        <div>이름</div>
                        <div>가입일</div>
                        <div>회원상태</div>
                    </div>

                    <div className="uTableBody">
                        <TableBody
                            tableData={userData}
                            modalTrigger={modalTrigger} />
                    </div>
                </div>
            </div>

            {trigger ? <TableModal
                userData={userData}
                modalTrigger={modalTrigger}
                arrIdx={tableIndex}
                reqDelUser={reqDelUser} /> : null}
        </div>
    );
}