import { useState } from 'react';

import tableStyled from '../../CSS/admin/table.module.css';

import TableHeader from './tableHeader';
import TablePbody from './tablePbody';

export default function Table({ tHeadData, tBodyData }) {
    const headData = tHeadData;
    const [tableData, setTableData] = useState(tBodyData);

    return (
        <div className={`${tableStyled.tableContainer}`}>
            <TableHeader headData={headData} />
            <TablePbody tableData={tableData} />
        </div>
    );
}