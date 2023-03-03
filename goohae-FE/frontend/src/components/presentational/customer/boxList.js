import { Link } from "react-router-dom";
import customerStyled from '../../../pages/css/customer/customer.module.css';

export default function Boxlist() {
    return (
        <>

            <div className={customerStyled.categoryBox}>
                <Link to="/customer/notice">공지사항</Link>
                <Link to="/customer/FAQ">FAQ</Link>
                <Link to="/customer/inquiry">상담문의</Link>
            </div>
        </>
    );
}