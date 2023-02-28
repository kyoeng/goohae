import pagiStyled from './CSS/pagination.module.css';
import UserData from '../dummyData/userData';

export default function Pagination() {
    // let pagingNum = Math.ceil(UserData.length / 10);
    let pagingNum = 5;


    return (
        <div className={pagiStyled.pagingContainer}>
            {UserData.map((item, idx) => {
                if (idx < pagingNum) {
                    return <div key={`pagingBtn${idx}`}>{idx + 1}</div>
                } else {
                    return;
                }

            })}
        </div>
    );
}