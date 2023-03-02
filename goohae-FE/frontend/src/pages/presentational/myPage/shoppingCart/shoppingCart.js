import { Link } from 'react-router-dom';
import '../../../css/myPage/shoppingCart/shoppingCart.css';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import ShoppingCartTable from '../../../../components/presentational/myPage/shoppingCart/shoppingCartTable';
export default function ShoppingCart() {

    return (
        <AppLayout>
            <div className="shoppingCartMain">
                <MyPageSubPageCategory myPageSubLinkKr="장바구니"/>
                <MyPsgeSubPageTitle myPsgeSubPageTitle="cart" />
                <ShoppingCartTable/>
            </div> 
        </AppLayout>
    );
}