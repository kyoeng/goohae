import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import '../../css/admin/adminLogin.css';




export default function AdminLogin() {
    const [adminId, setAdminId] = useState()
    const [adminPw, setAdminPw] = useState();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    function changeId(e) { setAdminId(e.target.value) };
    function changePw(e) { setAdminPw(e.target.value) };

    function adminLogin() {
        if (adminId !== '' && adminPw !== '') {
            axios.post('/api/admin/login', {
                id: adminId,
                password: adminPw,
            })
                .then((response) => {
                    const accessToken = response.data;
                    if (response.data === 'error') {
                        setMessage('로그인실패');
                        setAdminId();
                        setAdminPw();
                    } else {
                        if (response.status === 200) {
                            axios.defaults.headers.common[
                                "Authorization"
                            ] = `Bearer ${accessToken}`;
                            navigate('/adminmain');
                        } else {
                            return;
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setMessage('로그인실패');
                    setAdminId();
                    setAdminPw();
                })
        }
    }

    return (
        <div className='adminLogin'>
            <div className="adminLoginContainer">
                <div className='adminLogo'></div>

                <h2>관리자 로그인</h2>
                <div className="adminInputContainer" >
                    <input
                        type="text"
                        value={adminId || ""}
                        onChange={changeId}
                        placeholder='아이디' />

                    <input
                        type="password"
                        value={adminPw || ""}
                        onChange={changePw}
                        placeholder='비밀번호' />
                </div>
                <span>{message}</span>
                <button onClick={adminLogin}>로그인</button>
            </div>
        </div>
    );
}