import { Link } from 'react-router-dom';
import styles from '../CSS/singlePage/singlePageHeader.module.css';
import Logo from "../../stores/images/icon/logo.png";
// import Login from '../../pages/presentational/login/login';
import NonMemberInquire from './../../pages/presentational/nonMemberInquire/nonMemberInquire';

export default function SinglePageFindHeader() {
    return (
        <div className={styles.singlePageHeaderWrap}>
            <a href="#" className={styles.singlePageHeadLogo}>
                {/* {Logo} */}
            </a>
            <ul className={styles.singlePageHeaderListWrap}>
                <li className={styles.singlePageHeaderList}>
                    <Link to="/findId" className={styles.singlePageHeaderListLink} >아이디찾기</Link>
                </li>
                <li className={styles.singlePageHeaderList}>
                    <Link to="/findPw" className={styles.singlePageHeaderListLink} >비밀번호찾기</Link>
                </li>
            </ul>
        </div>
    )
}
