import AdminSide from '../../../components/presentational/admin/adminSide';

import { Outlet } from "react-router-dom";

import adminMainStyled from '../../css/admin/adminMain.module.css';

export default function AdminMain() {
    return (
        <div className={adminMainStyled.adminMainContainer}>
            <AdminSide />

            <Outlet />
        </div>
    );
}   