import { useState } from 'react';

import { Link } from "react-router-dom";

export default function AdminSide() {
    return (
        <div className="adminSidebar">
            <div className="logoContainer">
                <div className="mainLogo"></div>
            </div>
            
            <nav className="adminNav">
                <ul>
                    <li>
                        <Link to='user'>
                            회원관리
                        </Link>
                    </li>

                    <li>
                        <Link to='product'>
                            상품관리
                        </Link>
                    </li>

                    <li>
                        <Link to='staff'>
                            직원관리
                        </Link>
                    </li>
                    <li>
                        <Link to='etc'>
                            기타
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}