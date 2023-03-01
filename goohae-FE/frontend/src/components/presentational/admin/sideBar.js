import { Link } from 'react-router-dom';

import sideBarStyled from '../../CSS/admin/sideBar.module.css';

export default function SideBar() {
    return (
        <div id={sideBarStyled.sideBarContainer}>
            <div className={sideBarStyled.sideBarLogoWrap}>
                <img src="" alt="로고" />
            </div>

            <div className={sideBarStyled.adminCategoryContainer}>
                <Link to='user'>
                    <span>유저</span>
                </Link>

                <Link to='product'>
                    <span>상품</span>
                </Link>
            </div>
        </div>

    );
}