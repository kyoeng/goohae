import tableBodyStyled from '../../CSS/admin/tableBody.module.css';
import TablePlist from './tablePlist';

import { useState } from 'react';

export default function TableBody({ tableData }) {
    const [listData, setListData] = useState(tableData);

    return (
        <div className={tableBodyStyled.tableBodyWrap}>
            {
                listData.map((item, idx) => {
                    return (
                        <TablePlist
                            key={`tuBody${idx}`}
                            listData={listData[idx]} />
                    );
                })
            }
        </div>
    );
}