import { useState, useRef } from 'react';

export default function AddModal({ adddProdData, modalTrigger }) {
    const [selectCate, setSelectCate] = useState(0);
    const [prodName, setProdName] = useState('');
    const [prodPrice, setProdPrice] = useState('');
    const [prodDiscount, setProdDiscount] = useState('');
    const [prodOption, setProdOption] = useState('');
    const [prodImgSrc, setProdImgSrc] = useState('');
    const [prodImg, setProdImg] = useState('');
    const prodIamge = useRef();
    const [addData, setAddData] = useState({});

    function uploadFile(e) {
        prodImg.current.click();

                                      
    }

    function uploadSrc(e) {

    }
    // function addProduct() {
    //     if (window.confirm('제품을 등록하시겠습니까?')) {
    //         setAddData({
    //             ...addData,
    //             productInfo
    //         })

    //         adddProdData(addData);
    //     }
    // }

    return (
        <>

            <div className="modalContainer" onClick={modalTrigger}></div>
            <div className='tableModal'>
                <div className='inputContainer'>
                    <select
                        name='category'
                        value={selectCate}
                        onChange={(e) => { setSelectCate(e.target.value) }}>
                        <option value="living" key="living">living</option>
                        <option value="badroom" key="badroom">badroom</option>
                        <option value="kitchen" key="kitchen">kitchen</option>
                        <option value="dressroom" key="dressroom">dressroom</option>
                    </select>

                    <input
                        type="text"
                        name="productName"
                        placeholder='상품명'
                        value={prodName}
                        onChange={(e) => { setProdName(e.target.value) }}
                        required />

                    <input
                        type="text"
                        name="Price"
                        placeholder='가격'
                        value={prodPrice}
                        onChange={(e) => { setProdPrice(e.target.value.replace(/[^0-9]/g, '')) }}
                        required />

                    <input
                        type="text"
                        name="discount"
                        placeholder='할인율'
                        value={prodDiscount}
                        onChange={(e) => { setProdDiscount(e.target.value.replace(/[^0-9]/g, '')) }} />

                    <button onClick={uploadFile}>파일업로드</button>
                    <input
                        type="file"
                        name="productImgs"
                        ref={prodIamge}
                        accept='image/*'
                        style={{ display: "none" }}
                        onChange={uploadSrc} />

                </div>
                <button>상품등록</button>
            </div>
        </>
    )
}
