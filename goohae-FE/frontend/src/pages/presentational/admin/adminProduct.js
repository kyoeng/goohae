import adminPstyled from '../../css/admin/adminProd.module.css';

import Title from '../../../components/presentational/admin/title';
import SearchBar from '../../../components/presentational/admin/searchBar';
import Table from '../../../components/presentational/admin/table';
import Paging from '../../../common/paging';

import ProdData from '../../../dummyData/data.json';


export default function AdminProduct() {
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

            <div className={adminPstyled.total}>{`전체 ${ProdData.length}건`}</div>

            <Table
                tHeadData={pTableHeader}
                tBodyData={ProdData} />

            <div className='pagingWrap'>
                <Paging pagingLength={Math.ceil(ProdData.length)} />
            </div>
        </div>
    );
}