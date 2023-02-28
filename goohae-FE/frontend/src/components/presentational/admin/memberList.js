import { useState } from "react";

import reqDelete from '../../container/admin/memberList';

import memberStyled from '../../CSS/admin/memberList.module.css';

export default function MemberList({
    tableName,
    data, }) {

    const [adminData, setAdminData] = useState(data)

    return (
        <div className={memberStyled.memberList} >
            {
                adminData.map((item, idx) => {
                    return (
                        <div className={memberStyled.tableBodyWrap} key={tableName + idx}>
                            <input id={memberStyled.checkedUser} type="checkbox" />
                            <div>{adminData[idx].id}</div>
                            <div>{adminData[idx].name}</div>
                            <div>{adminData[idx].joinDate}</div>
                            <div>{adminData[idx].status}</div>
                            <button onClick={reqDelete}>삭제하기</button>
                        </div>
                    );
                })
            }
        </div >
    );
}