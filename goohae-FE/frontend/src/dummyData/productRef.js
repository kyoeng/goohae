import { useState, useRef } from "react";
import axios from "axios";

export default function RefPage() {
    const [status, setStatus] = useState(false);
    const inputBox = useRef([]);
    const productInput = useRef([]);

    // 로그인 요청(토큰 발급)
    function login() {
        let data = {
            "id": inputBox.current[0].value,
            "password": inputBox.current[1].value
        };

        axios.post("/test", data).then((res) => {
            const accressToken = res.data;

            if (res.status === 200) {
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${accressToken}`;

                setStatus(true);

                console.log(accressToken);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    // 토큰 유효기간 확인
    function forVliadToken() {
        axios.get("/valid").then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }


    // 상품 등록 테스트
    function productTest() {
        let formData = new FormData();
        formData.append("categoryCode", productInput.current[0].value);
        formData.append("productName", productInput.current[1].value);
        formData.append("price", productInput.current[2].value);
        formData.append("discount", productInput.current[3].value);
        formData.append("productInfo", productInput.current[4].value);
        formData.append("productOption", productInput.current[5].value);

        for (let i = 0; i <= productInput.current[6].files.length; i++) {
            formData.append("files", productInput.current[6].files[i]);
        }

        axios({
            headers: {
                "Content-Type": "multiple/form-data"
            },
            method: "post",
            url: "/admin/product/input",
            data: formData
        })
            .then((res) => {
                console.log(res.data);
                console.log(res.status);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <>
            <div style={{ width: "500px", height: "800px", position: "fixed", top: "calc((100% - 800px) / 2)", left: "calc((100% - 500px) / 2)", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                <div style={{ width: "300px", height: "150px", margin: 'auto' }}>
                    <p style={{ fontSize: "1.5rem", textAlign: "center" }}>로그인 및 토큰 발급 테스트</p>

                    <input type="text" name="id" id="id" ref={(e) => inputBox.current[0] = e} style={{ width: "100%", height: "30px" }} disabled={status ? true : false} />
                    <br />

                    <input type="password" name="password" id="password" ref={(e) => inputBox.current[1] = e} style={{ width: "100%", height: "30px", marginTop: "10px" }} disabled={status ? true : false} />
                    <br />

                    <button onClick={login} style={{ width: "80px", height: "30px", marginTop: "10px" }}>전송</button>
                    <button onClick={forVliadToken} style={{ width: "80px", height: "30px", marginTop: "10px", marginLeft: "10px" }}>확인</button>
                </div>

                <div style={{ width: "400px", height: "500px", margin: "auto" }}>
                    <p style={{ fontSize: "1.5rem", textAlign: "center" }}>상품 등록 테스트</p>

                    <select name="category" value={'1'} style={{ width: "200px", height: "30px" }} ref={(e) => productInput.current[0] = e}>
                        <option value="1">living</option>
                        <option value="2">bedroom</option>
                        <option value="3">kitchen</option>
                        <option value="4">dressroom</option>
                    </select>
                    <br />

                    <input type="text" name="productName" placeholder="상품 이름" style={{ width: "200px", height: "30px", marginTop: "10px" }} ref={(e) => productInput.current[1] = e} />
                    <br />

                    <input type="text" name="price" placeholder="가격" style={{ width: "200px", height: "30px", marginTop: "10px" }} ref={(e) => productInput.current[2] = e} />
                    <br />

                    <input type="text" name="discount" placeholder="할인율" defaultValue={'0'} style={{ width: "200px", height: "30px", marginTop: "10px" }} ref={(e) => productInput.current[3] = e} />
                    <br />

                    <textarea cols="30" rows="10" name="productInfo" placeholder="상품 정보" style={{ marginTop: "10px" }} ref={(e) => productInput.current[4] = e}></textarea>
                    <br />

                    <input type="text" name="productOption" style={{ width: "200px", height: "30px", marginTop: "10px" }} placeholder="상품 옵션(제품 하나일 경우 빈칸으로)" ref={(e) => productInput.current[5] = e} />
                    <br />

                    <input type="file" multiple name="imgs" style={{ marginTop: "10px" }} ref={(e) => productInput.current[6] = e} />
                    <br />

                    <button style={{ width: "80px", height: "30px", marginTop: "10px" }} onClick={productTest}>등록</button>
                </div>
            </div>
        </>
    )
}