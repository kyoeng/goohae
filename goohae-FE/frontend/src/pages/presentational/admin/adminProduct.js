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

import ProdData from '../../../dummyData/data.json';
import Modal from '../../../common/modal/modal';

export default function AdminProduct() {
    const dummy = ProdData;
    const disPatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/product/get')
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

        disPatch(setProd([]))
        disPatch(setProd(dummy));
    }, [])

    const data = useSelector((state) => state.adminProduct);
    const [select, setSelect] = useState(null);
    const [modalFlag, setModalFlag] = useState(false);

    const selectedProduct = (key) => {
        setSelect(data.find(product => product.prod_id == key));
        setModalFlag(pre => !pre)
    }

    const modalOff = () => {
        setModalFlag(false);
    }

    const reqProdDel = (prodId) => {
        axios.post('/api/admin/valid/del-pro', {
            product_code: select.productCode,
            product_name: select.productName
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    console.log(select);
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
                            <tr key={product.prod_id} onClick={() => { selectedProduct(product.prod_id) }}>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.orig_price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Paging pagingLength={ProdData.length} />

            {modalFlag ? <Modal
                modalOff={modalOff}
                infoData={select}
                reqProdDel={reqProdDel} /> : null}
            <button onClick={() => { navigate('/addprod') }}>상품추가하기</button>
            {modalFlag ? <Modal infoData={select} /> : null}
            <button onClick={() => { navigate('addprod') }}>상품추가하기</button>
        </div >
    );
}