import { Link } from 'react-router-dom';
import styles from '../../../css/myPage/shoppingCart/shoppingCart.module.css';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import ShoppingCartTable from '../../../../components/presentational/myPage/shoppingCart/shoppingCartTable';


export default function ShoppingCart() {
    // const [productList,setProductList]=useState([]);
    // useEffect(() => {
    //     fetch('/cart', {
    //       method: 'GET',
    //       headers: {
    //         Authorization: localStorage.getItem('token'),
    //       },
    //     })
    return (
        <AppLayout>
            <div className={styles.shoppingCartMain}>
                <MyPageSubPageCategory myPageSubLinkKr="장바구니"/>
                <MyPsgeSubPageTitle myPsgeSubPageTitle="cart" />
                <ShoppingCartTable/>
            </div> 
        </AppLayout>
    );
}