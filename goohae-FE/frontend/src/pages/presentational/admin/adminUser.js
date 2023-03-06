import adminUstyled from '../../css/admin/adminUser.module.css';

import Title from '../../../components/presentational/admin/title';
import SearchBar from '../../../components/presentational/admin/searchBar';
import Paging from '../../../common/paging';

import UserData from '../../../dummyData/userData';

export default function AdminUser() {
    const uOptions = [
        '아이디',
        '이름',
        '회원상태',
    ]

    const uTableHeader = [
        '아이디',
        '이름',
        '가입일지',
        '회원상태'
    ]

    return (
        <div className={adminUstyled.adminUserContainer}>
            <Title titleName='유저목록' />
            <SearchBar options={uOptions} />

            <div className={adminUstyled.total}>{`전체 ${UserData.length}건`}</div>


            <div className='pagingWrap'>
                <Paging pagingLength={Math.ceil(UserData.length)} />
            </div>
        </div>
    );
}