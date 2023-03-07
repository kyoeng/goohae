
import { Link } from 'react-router-dom';
import SinglePageHeader from './singlePageHeader';
import SinglePageBody from './singlePageBody';
import styles from '../CSS/singlePage/singlePageFindContainer.module.css';

export default function SinglePageFindContainer({HeaderChildren,children,...rest}) {
    return (
        <main className={styles.singlePageMain} {...rest}>
            <div className={styles.singlePageContainer} {...rest}>
                <div className={styles.singlePageInnerContainer} {...rest}>
                    {/* <SinglePageHeader /> */}
                    {HeaderChildren}
                    <SinglePageBody> {children}</SinglePageBody>

                </div>
            </div>
        </main>
    )
}
