import styled from '../CSS/table/table.module.css';
import TableHeader from './tableHeader';
import { Children, useState } from 'react';

export default function Table({ tHead, tBody }) {
    const tableHeader = tHead;
    const [tableBody, setTableBody] = useState()

    return (
        <div className={styled.tableContainer}>
            <TableHeader tHead={tableHeader} />

            {Children}
        </div>
    );
}