import React from 'react';
import { Link } from 'react-router-dom';
import styles from'../../../css/myPage/wishList/wishList.module.css';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import WishListTable from '../../../../components/presentational/myPage/wishList/wishListTable';

export default function wishList() {
    // let wishChkAll = document.getElementsByName('wishChkAll'),
    //     wishChk = document.getElementsByName('wishChk');

    // console.log(wishChkAll);



    // let wishChk = document.getElementsByName("wishChk");
    // function allselect(allselect) {
    //     for (let i = 0; i < wishChk.length; i++) {
    //         wishChk[i].checked = allselect;
    //     }
    // }


    // let wlpdName = document.querySelector('.wlpdName'),
    //     nmP = document.querySelectorAll('.nmP');

    // wlpdName.addEventListener('mouseenter', function () {
    //     nmP[0].classList.add("hover");
    //     nmP[1].classList.add("hover");
    // });
    // wlpdName.addEventListener('mouseleave', function () {
    //     nmP[0].classList.remove("hover");
    //     nmP[1].classList.remove("hover");
    // });

    // let wlDel = document.querySelector('.wlDel');

    // wlDel.addEventListener('mouseup', function () {
    //     for (let i = 0; i < wishChk.length; i++) {
    //         if (wishChk[i].checked) {
    //             wishChk[i].parentElement.parentElement.remove();
    //         }
    //     }
    // })

    return (
        <AppLayout>
            <div id={styles.wishListMain}>
                <section id={styles.myWhishListWrap}>
                    <MyPageSubPageCategory myPageSubLinkKr="위시리스트" />
                    <MyPsgeSubPageTitle myPsgeSubPageTitle="위시리스트" />
                    <WishListTable />
                </section>
            </div>
        </AppLayout>

    );
}
