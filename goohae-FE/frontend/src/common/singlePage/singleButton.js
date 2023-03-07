import React from 'react';
import styles from '../CSS/singlePage/singleButton.module.css';
// import oc from 'open-color';
// import { shadow } from 'lib/styleUtils';
// import { useDispatch } from 'react-redux';
// import { findPassword } from '../../stores/store/slice/singlePage/findPwSlice';

// 사용 : <SingleButton children="버튼이름"/>


const SingleButton = ({ children, ...rest }) => {
    // const dispatch = useDispatch();

    return (
        <button {...rest} className={styles.singlePageButton}>
            {children}
        </button>
    );
};

export default SingleButton;