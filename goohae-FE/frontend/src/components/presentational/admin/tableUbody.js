import { useState } from 'react';

import tableBodyStyled from '../../CSS/admin/tableBody.module.css';
import TableUlist from './tableUList';

export default function TableBody({ tableData }) {
    const [listData, setListData] = useState(tableData);

    return (
        <div className={tableBodyStyled.tableBodyWrap}>
            {
                listData.map((item, idx) => {
                    return (
                        <TableUlist
                            key={`tuBody${idx}`}
                            listData={listData[idx]} />
                    );
                })
            }
        </div>
    );
}