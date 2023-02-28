import adminPstyled from '../../css/admin/adminProduct.module.css';

import TitleContainer from './../../../components/presentational/admin/titleContainer';
import AdminPstatusBox from '../../../components/presentational/admin/adminPstatusBox';
import AdminPsearchBar from '../../../components/presentational/admin/adminPsearchBar';

import { StatusArr, ProdData } from '../../../components/container/admin/adminPstatusBox';


export default function AdminProduct() {

    return (
        <div className={adminPstyled.adminProdContainer}>
            <TitleContainer titleName='상품조회/수정' />
            <div className={adminPstyled.devideLine}></div>

            <AdminPstatusBox
                StatusArr={StatusArr}
                ProdData={ProdData} />

            <AdminPsearchBar />

        </div>
    );
}