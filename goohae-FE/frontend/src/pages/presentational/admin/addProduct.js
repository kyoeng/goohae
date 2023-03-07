import { useState, useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function AddProduct(params) {
    const navigate = useNavigate();
    const [prodFile, setProdFile] = useState([]);
    const prodInfo = useRef([]);

    const fileUpload = (e) => {
        const file = e.target.files;
        setProdFile([...file]);
    }

    const ProdSubmit = (e) => {
        axios.post(('/api/admin/valid/reg-pro'), {
            product_name: prodInfo.current[0].value,
            category_code: prodInfo.current[1].value,
            price: prodInfo.current[2].value,
            discount: prodInfo.current[3].value,
            product_option: prodInfo.current[4].value,
            product_info: prodInfo.current[5].value,
            product_img: prodFile
        })
            .then((response) => {
                console.log(response.data);
                return navigate('/adminMain');
            })
            .catch((err) => {
                console.log(err);
                return
            })
    }

    const cancel = () => {
        if (window.confirm('상품등록을 취소하시겠습니까?')) {
            return navigate(-1);
        }
    }
    console.log(prodFile);
    console.log(prodInfo);
    console.log(prodInfo.current);

    return (
        <div>
            <label><span>상품이미지</span>
                <input type="file" onChange={fileUpload} multiple />
                <img src="" alt="" />
            </label>

            <label><span>상품명</span>
                <input type="text" ref={(e) => { prodInfo.current[0] = e }} />
            </label>

            <label><span>카테고리</span>
                <input type="text" ref={(e) => { prodInfo.current[1] = e }} />
            </label>

            <label><span>가격</span>
                <input type="text" ref={(e) => { prodInfo.current[2] = e }} />
            </label>

            <label><span>할인율</span>
                <input type="text" ref={(e) => { prodInfo.current[3] = e }} />
            </label>

            <label><span>상품옵션</span>
                <input type="text" placeholder="없으면 공백" ref={(e) => { prodInfo.current[4] = e }} />
            </label>

            <label><span>상품설명</span>
                <textarea cols="30" rows="10" ref={(e) => { prodInfo.current[5] = e }}></textarea>
            </label>

            <button onClick={ProdSubmit}>작성완료</button>
            <button onClick={cancel}>취소</button>
        </div>
    )
}