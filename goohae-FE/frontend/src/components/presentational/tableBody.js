
export default function TableBody({ tableData, modalTrigger }) {
    const data = tableData;

    return (
        <>
            {
                data.map((item, idx) => {
                    return (
                        <div className="tBodyWrap" key={`tbody${idx}`} onClick={modalTrigger} data-idx={idx}>
                            <div data-idx={idx}>{item.id}{idx}</div>
                            <div data-idx={idx}>{item.name}</div>
                            <div data-idx={idx}>{item.joinDate}</div>
                            <div data-idx={idx}>{item.status}</div>
                        </div>
                    );
                })
            }
        </>
    );
}
