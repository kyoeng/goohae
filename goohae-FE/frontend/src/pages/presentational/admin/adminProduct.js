import { useEffect, useState } from 'react';
import { setProd } from '../../../stores/store/slice/adminSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import adminPstyled from '../../css/admin/adminProd.module.css';

import Title from '../../../components/presentational/admin/title';
import SearchBar from '../../../components/presentational/admin/searchBar';
import Paging from '../../../common/paging';
import Table from '../../../common/tableComponent/table';

import Modal from '../../../common/modal/modal';

export default function AdminProduct() {
    const disPatch = useDispatch();
    const navigate = useNavigate();

    //data = db에서 가져와서 reducer에 저장한 데이터를 data라는 이름으로 저장
    const data = useSelector((state) => state.adminProduct.product);
    const searchWord = useSelector((state) => state.adminProduct.searchProd);
    //초기 데이터를 get해옴 productSlice의 setProd 리듀서로 get요청에대한 response.data를 저장함
    useEffect(() => {
        axios.get('/api/product/get')
            .then((response) => {
                disPatch(setProd(response.data));
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    //table의 row를 클릭했을때 개별적으로 선택한 데이터를 product의 id로 구별하여 저장
    const [select, setSelect] = useState(null);
    const [modalFlag, setModalFlag] = useState(false);

    const selectedProduct = (key) => {
        setSelect(data.find(product => product.product_code == key));
        setModalFlag(pre => !pre)
    }

    const modalOff = () => {
        setModalFlag(false);
    }

    //모달창에 올라간 상품에 대한 삭제요청 select state안에 개별데이터가 들어있음 
    const reqProdDel = () => {
        axios.post('/api/admin/valid/del-pro', {
            product_code: select.product_code,
            product_name: select.product_name
        })
            .then((response) => {
                console.log(response.data);
                navigate('/adminmain/product')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    


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
                <tbody>
                    {data.map((product) => {
                        return (
                            <tr key={product.product_code} onClick={() => { selectedProduct(product.prod_id) }}>
                                <td>{product.product_name}</td>
                                <td>{product.category_code}</td>
                                <td>{product.price * product.discount}</td>
                                <td>{product.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Paging pagingLength={data.length} />

            {modalFlag ? <Modal
                modalOff={modalOff}
                infoData={select}
                reqProdDel={reqProdDel} /> : null}
            <button onClick={() => { navigate('/addprod') }}>상품추가하기</button>
        </div >
    );
}