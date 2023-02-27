import { useState } from 'react';

export default function MemberList({ data, tableName }) {
    const [tableData, setTableData] = useState(data);

    return (
        <div className="memberList">
            {
                tableData.map((ele, idx) => {
                    return (
                        <div key={`${tableName}${idx}`} className={tableName + idx}>
                            <div>{tableData[idx].id}</div>
                            <div>{tableData[idx].name}</div>
                            <div>{tableData[idx].joinDate}</div>
                            <div>{tableData[idx].status}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}