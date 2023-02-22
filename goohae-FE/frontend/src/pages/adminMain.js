import AdminSide from "../templetes/admin/adminSide";

import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";

import axios from 'axios';

import UserData from "../instanceData/userData";
import './css/adminMain.css';

export default function AdminMain() {
    // useEffect(() => {
    //     axios.all([
    //         axios.get('/admin/user'),
    //         axios.get('/admin/product'),
    //         axios.get('/admin/manager'),
    //     ])
    //         .then(
    //             axios.spread((userRes, productRes, managerRes) => {
    //                 const userData = userRes.data;
    //                 const productData = productRes.data;
    //                 const managerData = managerRes.data;

    //                 const response = [
    //                     ...userData,
    //                     ...productData,
    //                     ...managerData]
    //             })
    //         )
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    const userData = UserData;

    return (
        <div className="adminMain">
            <AdminSide />

            <Outlet context={userData} />
        </div>
    );
};