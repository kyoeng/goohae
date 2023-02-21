import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            메인페이지
            <Link to="/adminMain"><button>admin</button></Link>
            <Link to="/adminLogin"><button>adminlogin</button></Link>
            <Link to="/Login"><button>login</button></Link>
            <Link to="/SignUp"><button>signUp</button></Link>
        </>
    );
}