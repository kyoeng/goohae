import adminPtableStyled from '../../CSS/admin/adminPtable.module.css';
import TableHeader from '../admin/tableHeader';


export default function AdminPtable() {
    return (
        <div className={adminPtableStyled.pTableContainer}>
            <TableHeader
                header1='제품명'
                header2='가격'
                header3='원가'
                header4='제품아이디' />
        </div>
    );
}