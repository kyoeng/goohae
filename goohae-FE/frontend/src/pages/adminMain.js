import AdminSide from "../templetes/admin/adminSide";

import { Outlet } from "react-router-dom";

import './css/adminMain.css';

export default function AdminMain() {
    return (
        <div className="adminMain">
            <AdminSide />

            <Outlet />
        </div>
    );
};