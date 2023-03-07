import React from 'react';
import styles from '../CSS/singlePage/inputBox.module.css';

// input만 이용시 label을 사용하지 않을 시 값을 'label=""' 를 입력하지 않아도 됩니다 
// 사용 : <InputBox label="라벨에 들어갈 내용" />
const InputBox = ({ label, ...rest }) => (
    <>
        <label className={styles.singleInputLabel}>{label}</label>
        <input  {...rest} className={styles.singlePageInput}/>
    </>
);

export default InputBox;