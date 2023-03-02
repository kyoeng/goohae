import PagingBtn from "./pagingBtn";

export default function Paging({ pagingLength }) {
    for (let idx = 1; idx < pagingLength; idx++) {
        return (
            <PagingBtn key={`paging${idx}`} btnNum={idx} />
        );

    }

}

