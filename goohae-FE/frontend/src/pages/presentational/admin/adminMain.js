import { Outlet } from "react-router-dom";

import SideBar from "../../../components/presentatial/admin/sideBar";

import adminLayoutStyled from '../../css/admin/adminMain.module.css';


export default function AdminMain() {
    return (
        <div id={adminLayoutStyled.adminLayout}>
            <SideBar />

            <Outlet />
        </div>
    );
}