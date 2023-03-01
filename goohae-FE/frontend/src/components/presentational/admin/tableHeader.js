import tableHeaderStyled from '../../CSS/admin/tableHeader.module.css';

export default function TableHeader({ headData }) {
    const headRow = headData;

    return (
        <div className={tableHeaderStyled.tableHeaderWrap}>
            {
                headRow.map((item, idx) => {
                    return (
                        <div key={`tHead${idx}`}>{headRow[idx]}</div>
                    );
                })
            }
        </div>
    );
}