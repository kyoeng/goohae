export default function Thead({ tHeadData }) {
    return (
        <thead>
            <tr>
                {tHeadData.map((head, i) => {
                    return (
                        <th key={`thead${i}`}>{head}</th>
                    );
                })}
            </tr>
        </thead >
    );
}