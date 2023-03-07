import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import axios from "axios";

import styles from '../../../css/myPage/shoppingCart/shoppingCart.module.css';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import ShoppingCartTable from '../../../../components/presentational/myPage/shoppingCart/shoppingCartTable';


export default function ShoppingCart() {
    // const [cartList, setCartList] = useState([]);

    // useEffect(() => {
    //     axios.get('/shoppingCart', {
    //         headers: {
    //             Authorization: localStorage.getItem('token'),
    //         },
    //     })
    //         .then(res => {
    //             setCartList(res.data.results);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);
    return (
        <AppLayout>
            <div className={styles.shoppingCartMain}>
                <MyPageSubPageCategory myPageSubLinkKr="장바구니" />
                <MyPsgeSubPageTitle myPsgeSubPageTitle="cart" />
                <ShoppingCartTable />
            </div>
        </AppLayout>
    );
}