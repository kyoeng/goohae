import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Pagination({ subClassName, clickEve }) {
    const clickStyled = {
        backgroundColor: "black",
        color: "white",
    };

    const [pagingNum, setPagingNum] = useState(1);

    return (
        <>

            <div className={`pagination ${subClassName}`}>
                <div onClick={clickEve}>1</div>
                <div onClick={clickEve}>2</div>
                <div onClick={clickEve}>3</div>
                <div onClick={clickEve}>4</div>
                <div onClick={clickEve}>5</div>
            </div>
            {

            }
        </>
    );
}