import { useState } from 'react';
import ListStyled from '../../CSS/admin/tableUlist.module.css';

export default function TableUlist({ listData }) {
    const [tListData, setListData] = useState(listData);

    function reqDelete() {
        if (window.confirm('삭제하시겠습니까?')) {
            return;
        }
    }
    return (
        <div className={ListStyled.rowWRap}>
            <div>{tListData.category}</div>
            <div>{tListData.title}</div>
            <div>{tListData.price}</div>
            <div>{tListData.orig_price}</div>
            <button onClick={reqDelete}>삭제하기</button>
        </div>
    );
}