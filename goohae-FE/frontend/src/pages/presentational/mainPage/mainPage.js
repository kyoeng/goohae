import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            메인페이지
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
            <Link to="/findPw"><button>findPw</button></Link>
        </>
    );
}