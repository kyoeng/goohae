import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import './css/adminLogin.css';

export default function AdminLogin() {
    const [adminId, setAdminId] = useState()
    const [adminPw, setAdminPw] = useState();
    const [message, setMessage] = useState('');

    function changeId(e) { setAdminId(e.target.value) };
    function changePw(e) { setAdminPw(e.target.value) };

    function adminLogin() {
        if (adminId !== '' && adminPw !== '') {
            axios.post('/test', {
                id: adminId,
                password: adminPw,
            })
                .then((response) => {
                    const { aceessToken } = response.data;
                    if (!aceessToken) {
                        setMessage('로그인실패');
                        setAdminId();
                        setAdminPw();
                    } else {
                        if (response.status === 200) {
                            axios.defaults.header.common[
                                "Authorization"
                            ] = `Bearer ${aceessToken}`;
                            return <Navigate to="/adminmain" replace={true} />
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

                <div className="adminInputContainer" >
                    <input
                        type="text"
                        value={adminId || ""}
                        onChange={changeId}
                        placeholder='아이디' />

                    <input
                        type="text"
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