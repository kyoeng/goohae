import { useState } from 'react';
import ListStyled from '../../CSS/admin/tableUlist.module.css';

export default function TableUlist({ listData }) {
    const [tListData, setListData] = useState(listData);

    console.log(tListData);
    function reqDelete() {
        if (window.confirm('삭제하시겠습니까?')) {
            return;
        }
    }

    return (
        <div className={ListStyled.rowWRap}>
            <div>{tListData.id}</div>
            <div>{tListData.name}</div>
            <div>{tListData.joinDate}</div>
            <div>{tListData.status}</div>
            <button onClick={reqDelete}>삭제하기</button>
        </div>
    );
}