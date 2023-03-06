import { Link } from 'react-router-dom';
import styles from '../CSS/singlePage/singlePageHeader.module.css';
import Logo from "../../stores/images/icon/logo.png";
// import Login from '../../pages/presentational/login/login';
import NonMemberInquire from './../../pages/presentational/nonMemberInquire/nonMemberInquire';

export default function SinglePageHeader() {
    return (
        <div className={styles.singlePageHeaderWrap}>
            <a href="#" className={styles.singlePageHeadLogo}>
                {/* {Logo} */}
            </a>
            <ul className={styles.singlePageHeaderListWrap}>
                <li className={styles.singlePageHeaderList}>
                    <Link to="/login" className={styles.singlePageHeaderListLink} >로그인</Link>
                </li>
                <li className={styles.singlePageHeaderList}>
                    <Link to="/NonMemberInquire" className={styles.singlePageHeaderListLink} >비회원 배송조회</Link>
                </li>
            </ul>
        </div>
    )
}
