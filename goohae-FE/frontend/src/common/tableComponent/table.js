import Thead from "./tableHeader";
import styled from '../CSS/table/table.module.css';

export default function Table({ tHeadData, children }) {
    return (
        <table id={styled.tableComponent}>
            <Thead tHeadData={tHeadData} />
            {children}
        </table>
    );
}