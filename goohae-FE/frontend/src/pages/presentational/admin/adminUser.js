import UserData from '../../../dummyData/userData';

import TitleContainer from '../../../components/presentational/admin/titleContainer';
import MemberList from '../../../components/presentational/admin/memberList';
import TableHeader from '../../../components/presentational/admin/tableHeader';
import SearchBar from '../../../components/presentational/admin/searchBar';
import Pagination from '../../../common/pagination';

import adminUstyled from '../../css/admin/adminUser.module.css';

export default function AdminUser() {

    return (
        <div className={adminUstyled.adminUserContainer}>
            <TitleContainer titleName='유저목록' />
            <div className={adminUstyled.devideLine}></div>

            <SearchBar />

            <TableHeader
                headerName={`adminUser`}
                header1={`id`}
                header2={`이름`}
                header3={`가입일자`}
                header4={`회원상태`} />
            <MemberList
                tableName={`adminUser`}
                data={UserData}
                adminData1={UserData.id}
                adminData2={UserData.name}
                adminData3={UserData.joinDate}
                adminData4={UserData.status}
            />

            <Pagination />
        </div>
    );
}