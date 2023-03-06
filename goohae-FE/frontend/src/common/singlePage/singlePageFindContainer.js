
import { Link } from 'react-router-dom';
import SinglePageHeader from './singlePageHeader';
import SinglePageBody from './singlePageBody';
import styles from '../CSS/singlePage/singlePageFindContainer.module.css';

export default function SinglePageFindContainer({HeaderChildren,children}) {
    return (
        <main className={styles.singlePageMain}>
            <div className={styles.singlePageContainer}>
                <div className={styles.singlePageInnerContainer}>
                    {/* <SinglePageHeader /> */}
                    {HeaderChildren}
                    <SinglePageBody> {children}</SinglePageBody>

                </div>
            </div>
        </main>
    )
}
