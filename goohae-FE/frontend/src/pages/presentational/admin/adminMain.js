import AdminSide from "../../../components/presentational/adminSide";

import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";

import axios from 'axios';

import UserData from "../../../dummyData/userData";
<<<<<<< HEAD
import '../../CSS/admin/adminMain.css';
=======
import '../../css/admin/adminMain.css';
>>>>>>> fd2be2f82c51b9f48e795921da4ddb7f5e32b41f

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

    function reqDelUser() {
        if (window.confirm('삭제하시겠습니까?')) {
            axios.delete('/test', {
                userSeq: "?",
                id: "?",
                name: "?"
            })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    function reqAddProd(addData) {
        axios.post('/test', addData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);

            })
    }

    const outletProps = {
        userData: UserData,
        reqDelUser: reqDelUser,
        reqAddProd: reqAddProd
    };

    return (
        <div className="adminMain">
            <AdminSide />

            <Outlet context={outletProps} />
        </div>
    );
};