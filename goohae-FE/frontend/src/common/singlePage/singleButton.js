import React from 'react';
import styles from '../CSS/singlePage/singleButton.module.css';
// import oc from 'open-color';
// import { shadow } from 'lib/styleUtils';
// import { useDispatch } from 'react-redux';
// import { findPassword } from '../../stores/store/slice/singlePage/findPwSlice';

// 사용 : <SingleButton children="버튼이름"/>


const SingleButton = ({ contents, ...rest }) => {
    // const dispatch = useDispatch();

    return (
        <p {...rest} className={styles.singlePageButton}>
            {contents}
        </p>
    );
};

export default SingleButton;