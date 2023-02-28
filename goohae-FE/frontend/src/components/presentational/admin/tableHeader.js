import tHeaderStyled from '../../CSS/admin/tableHeader.module.css';

export default function TableHeader({ header1, header2, header3, header4 }) {
    return (
        <div className={tHeaderStyled.tableHeader}>
            <div>{header1}</div>
            <div>{header2}</div>
            <div>{header3}</div>
            <div>{header4}</div>
            <div> </div>
        </div>
    );
}