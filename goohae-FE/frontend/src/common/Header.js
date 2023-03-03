import "./CSS/Header.css";
import loginIcon from "../stores/images/icon/login_icon.png";
import joinIcon from "../stores/images/icon/join.png";
import cartIcon from "../stores/images/icon/cart.png";
import faqIcon from "../stores/images/icon/FAQicon.png";
import { Link } from "react-router-dom";

export default function Header() {
    const login = loginIcon,
        join = joinIcon,
        cart = cartIcon,
        faq = faqIcon;


    return (
        <>
            <header>
                <div className="upperHeader">
                    {/* ===== 로고 및 네비 부분 ===== */}
                    <h1 className="logoContainer">
                        <a href="/">goohae</a>
                    </h1>

                    <div className="nav">
                        <ul className="forUserContainer">
                            <li className="loginInner">
                                <Link to="/login">
                                    <img src={login} alt="login" />
                                    <span>LOGIN</span>
                                </Link>
                            </li>

                            <li className="joinInner">
                                <Link to="/signUp">
                                    <img src={join} alt="join" />
                                    <span>JOIN</span>
                                </Link>
                            </li>

                            <li className="cartInner">
                                <a href="/">
                                    <img src={cart} alt="cart" />
                                    <span>CART</span>
                                </a>
                            </li>
                        </ul>
                        {/* ------11--- */}
                        <form action="." className="searchContainer">
                            <input type="text" placeholder="Search" />

                            <button></button>
                        </form>
                    </div>
                </div>
                {/* ````````2222```````` */}


                {/* ===== 카테고리 및 이용문의 부분 ===== */}
                <div className="underHeader">
                    <ul className="categoryContainer">
                        <li><span>거실</span>
                            <ul>
                                <li><Link to='/subpage'>소파</Link></li>
                                <li><a href="/">테이블</a></li>
                                <li><a href="/">의자</a></li>
                                <li><a href="/">TV콘솔</a></li>
                            </ul>
                        </li>

                        <li><span>침실</span>
                            <ul>
                                <li><a href="/">침대</a></li>
                                <li><a href="/">매트리스</a></li>
                                <li><a href="/">협탁</a></li>
                            </ul>
                        </li>

                        <li><span>주방</span>
                            <ul>
                                <li><a href="/">식탁</a></li>
                                <li><a href="/">의자</a></li>
                            </ul>
                        </li>

                        <li><span>드레스룸</span>
                            <ul>
                                <li><a href="/">행거</a></li>
                                <li><a href="/">수납장</a></li>
                                <li><a href="/">화장대</a></li>
                            </ul>
                        </li>

                        <li><span>고객문의</span>
                            <ul>
                                <li><Link to="/customer/main">이용문의</Link></li>
                                <li><Link to="/">공지사항</Link></li>
                                <li><Link to="/">FAQ</Link></li>
                                <li><Link to="/">상담문의</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}