import { Link } from "react-router-dom";

import Logo from '../../../stores/images/icon/logo.png';
import adminSideStyled from '../../CSS/admin/adminSide.module.css';


export default function AdminSideBar() {
    return (
        <div className={adminSideStyled.adminSideBar}>
            <div className={adminSideStyled.logoContainer}>
                <img src={Logo} alt="로고" />
            </div>
            <div className={adminSideStyled.adminCategoryContainer}>
                <Link to='user'>
                    <span>유저</span>
                </Link>
                <Link to='product'>
                    <span>상품</span>
                </Link>
            </div>

        </div>
    );
}