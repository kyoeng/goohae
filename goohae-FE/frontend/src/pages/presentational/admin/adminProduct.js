import { useEffect } from 'react';
import { setProd } from '../../../stores/store/slice/adminSlice';
import { useSelector, useDispatch } from 'react-redux';

import adminPstyled from '../../css/admin/adminProd.module.css';

import Title from '../../../components/presentational/admin/title';
import SearchBar from '../../../components/presentational/admin/searchBar';
import Paging from '../../../common/paging';
import Table from '../../../common/tableComponent/table';

import ProdData from '../../../dummyData/data.json';
import AdminPtBody from './adminPtBody';




export default function AdminProduct() {
    const dummy = ProdData;
    const disPatch = useDispatch();

    useEffect(() => {
        disPatch(setProd([]))
        disPatch(setProd(dummy));
    }, [])

    const data = useSelector((state) => state.adminProduct);

    const pOptions = [
        '상품이름',
        '카테고리',
    ]

    const pTableHeader = [
        '카테고리',
        '상품이름',
        '가격',
        '원가'
    ]
    return (
        <div className={adminPstyled.adminProdContainer}>
            <Title titleName='상품목록' />
            <SearchBar options={pOptions} />

            <div className={adminPstyled.total}>{`전체 ${data.length}건`}</div>

            <Table tHeadData={pTableHeader}>
                <AdminPtBody />
            </Table>
            <Paging pagingLength={ProdData.length} />
        </div>
    );
}