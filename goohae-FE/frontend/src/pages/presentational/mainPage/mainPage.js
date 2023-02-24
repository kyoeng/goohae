import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            메인페이지
            <Link to="/adminMain"><button>admin</button></Link>
            <Link to="/adminLogin"><button>adminlogin</button></Link>
            <Link to="/login"><button>login</button></Link>
            <Link to="/signUp"><button>signUp</button></Link>
            <Link to="/ref"><button>ref</button></Link>
            <Link to="/myPage"><button>myPage</button></Link>
        </>
    );
}