
import { Children } from 'react';
import styles from '../CSS/singlePage/singlePageBody.module.css';

const SinglePageBody = ({ children }) => {
    return (
        <div className={styles.singlePageInputForm}>
            {children}
        </div>
    );
}
export default SinglePageBody
