import styled from "../CSS/table/table.module.css";

export default function TheadColumn({ columnData }) {
    const colName = columnData;

    return (
        <div className={styled.tableCol}>
            <div>{colName}</div>
        </div>
    );
}