import { Link } from 'react-router-dom';
import styles from '../CSS/singlePage/singlePageHeader.module.css';
import Logo from "../../stores/images/icon/logo.png";
// import Login from '../../pages/presentational/login/login';
import NonMemberInquire from './../../pages/presentational/nonMemberInquire/nonMemberInquire';

export default function SinglePageHeader({isLogin}) {

    const selectedSt = {
        borderBottom:"1.2px solid rgba(80, 93, 208, 1)",
        color:"rgba(80, 93, 208, 1)",
        paddingBottom:"4px"
    }
    const nonSelectedSt = {
        paddingBottom:"4px"
    }

    return (
        <div className={styles.singlePageHeaderWrap}>
            <a href="#" className={styles.singlePageHeadLogo}>
                {/* {Logo} */}
            </a>
            {!!isLogin&&<ul className={styles.singlePageHeaderListWrap}>
                <li className={styles.singlePageHeaderList}>
                    <Link to="/login" className={styles.singlePageHeaderListLink} > 
                    <span style={isLogin == "login" ? selectedSt:nonSelectedSt}>로그인</span></Link>
                </li>
                <li className={styles.singlePageHeaderList}>
                    <Link to="/NonMemberInquire" className={styles.singlePageHeaderListLink} >
                    <span style={isLogin == "login" ? nonSelectedSt:selectedSt}>비회원 배송조회</span></Link>
                </li>
            </ul>}
        </div>
    )
}
