import UserData from '../../container/admin/adminUser';
import MemberList from '../../../components/presentational/admin/memberList';

import '../../css/admin/adminUser.css';

export default function AdminUser() {

    return (
        <div className="adminUserContainer">
            <div className="constentsHeader adminUser">
                <span>회원관리</span>
            </div>
           


            <div className="userContainer">
                <div className="userTable">
                    <div className="uTableHead">
                        <div>ID</div>
                        <div>이름</div>
                        <div>가입일</div>
                        <div>회원상태</div>
                    </div>

                    <div className="iTableBody">
                        <MemberList data={UserData} tableName={`user`} />
                    </div>
                </div>
            </div>

        </div>
    );
}