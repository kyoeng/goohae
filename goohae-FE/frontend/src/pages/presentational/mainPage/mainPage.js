import { Link } from "react-router-dom";
import Banner from "../../../components/presentational/Banner";
import AppLayout from './../../../common/layout/AppLayout';
import Product_container_4ea from './../../../common/Product_container_4ea';
import Product_Box from './../../../common/Product_Box';
import data from "../../../dummyData/data.json";
import data2 from "../../../dummyData/data2.json";
import Product_container_8ea from './../../../common/Product_container_8ea';
import MainCategory from "../../../components/presentational/MainCategory";
import ReviewContainer from "../../../common/ReviewContainer";
import ReviewWrapper from './../../../common/ReviewWrapper';

export default function MainPage() {
    return (
        <>
            <AppLayout>
                <Banner />

                <article style={{ width: "1200px", margin: "50px auto" }}>
                    <Product_container_4ea title={"New Product"}>
                        <Product_Box data={data} />
                    </Product_container_4ea>

                    <Product_container_8ea title={"Best Product"}>
                        <Product_Box data={data2} />
                    </Product_container_8ea>

                </article>

                <MainCategory />

                <article style={{ width: "1200px", margin: "50px auto" }}>
                    <ReviewWrapper />
                </article>
            </AppLayout>




            {/* 메인페이지
            <Link to="/adminMain"><button>admin</button></Link>
            <Link to="/adminLogin"><button>adminlogin</button></Link>
            <Link to="/ref"><button>ref</button></Link>
            <Link to="/memberPayMent"><button>memberPayMent</button></Link>
            <br/>
            마이페이지
            <Link to="/myPage"><button>myPage</button></Link>
            <br/>
            로그인,가입 ,아이디/비밀번호 찾기
            <Link to="/login"><button>login</button></Link>
            <Link to="/signUp"><button>signUp</button></Link>
            <Link to="/findPw"><button>findPw</button></Link> */}
        </>
    );
}