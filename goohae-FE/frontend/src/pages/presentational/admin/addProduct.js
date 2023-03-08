import { useState, useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styled from '../../css/admin/addProduct.module.css';

export default function AddProduct(params) {
    const navigate = useNavigate();
    const prodInfo = useRef([]);

    const ProdSubmit = (e) => {
        let formData = new FormData();

        formData.append("productName", prodInfo.current[0].value);
        formData.append("categoryCode", prodInfo.current[1].value);
        formData.append("price", prodInfo.current[2].value);
        formData.append("discount", prodInfo.current[3].value);
        formData.append("productOption", prodInfo.current[4].value);
        formData.append("productInfo", prodInfo.current[5].value);

        for (let i = 0; i <= prodInfo.current[6].files.length; i++) {
            formData.append("files", prodInfo.current[6].files[i]);
        }

        axios({
            headers: {
                "Content-Type": "multiple/form-data"
            },
            method: "post",
            url: "/api/admin/valid/reg-pro",
            data: formData
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

    return (
        <div className={styled.addProdContainer}>
            <div>
                <label>
                    <span>상품이미지</span>
                    <input type="file" multiple ref={(e) => prodInfo.current[6] = e} />
                    <img src="" alt="" />
                </label>

                <label>
                    <span>상품명</span>
                    <input type="text" ref={(e) => { prodInfo.current[0] = e }} />
                </label>

                <label>
                    <span>카테고리</span>
                    <select ref={(e) => { prodInfo.current[1] = e }}>
                        <option value="1" key="1">소파</option>
                        <option value="2" key="2">침대</option>
                        <option value="3" key="3">식탁</option>
                        <option value="4" key="4">행거</option>
                        <option value="5" key="5">테이블</option>
                        <option value="6" key="6">의자-리빙</option>
                        <option value="7" key="7">TV콘솔</option>
                        <option value="8" key="8">매트리스</option>
                        <option value="9" key="9">협탁</option>
                        <option value="10" key="10">의자-주방</option>
                        <option value="11" key="11">수납장</option>
                        <option value="12" key="12">화장대</option>
                    </select>
                </label>

                <label>
                    <span>가격</span>
                    <input type="text" ref={(e) => { prodInfo.current[2] = e }} />
                </label>

                <label>
                    <span>할인율</span>
                    <input type="text" ref={(e) => { prodInfo.current[3] = e }} />
                </label>

                <label>
                    <span>상품옵션</span>
                    <input type="text" placeholder="없으면 공백" ref={(e) => { prodInfo.current[4] = e }} />
                </label>

                <label>
                    <span>상품설명</span>
                    <textarea cols="30" rows="10" ref={(e) => { prodInfo.current[5] = e }}></textarea>
                </label>

                <button onClick={ProdSubmit}>작성완료</button>
                <button onClick={cancel}>취소</button>
            </div>

        </div>
    )
}