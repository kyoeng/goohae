import React from 'react';
import styles from "../CSS/singlePage/errorMessage.module.css";

export default function ErrorMessage({errorMessage}) {
    return (
        // <div className={styles.errorMessageBox}>
            <p className={styles.errorMessage}>{errorMessage}</p>
        // </div>
    )
};

