import React from 'react';
import styles from "../CSS/singlePage/errorMessage.module.css";

export default function ErrorMessage({errorMessage, regResult}) {
    if (!!errorMessage){
        return (
            // <div className={styles.errorMessageBox}>
                <p className={styles.errorMessage} style={{color:regResult?"rgba(80, 93, 208, 1)":"#FF655B"}} >{errorMessage}</p>
            // </div>
        )
    }
};

