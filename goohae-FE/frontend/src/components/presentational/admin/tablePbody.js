import tableBodyStyled from '../../CSS/admin/tableBody.module.css';
import TablePlist from './tablePlist';

export default function TableBody({ tableData }) {
    const listData = tableData;

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