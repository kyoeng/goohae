import Thead from "./tableHeader";

export default function Table({ tHeadData, children }) {
    return (
        <table>
            <Thead tHeadData={tHeadData} />
            {children}
        </table>
    );
}