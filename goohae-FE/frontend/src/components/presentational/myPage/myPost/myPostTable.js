import React from 'react';
import styled from 'styled-components';
const myPostData = [
{
    myPostnum:"001",
    myPostGroup:"리뷰",
    myPostTitle:"너무 좋아요",
    myPostDate:"11/14",
    myPostInquiry:"500132"
}

]

const MyPostTableWrap = styled.article`

    margin: 0 auto;

.myPostUpper #myPostTableSelect {
    font-size: 12px;
}

.myPostTableWrap .myPostTableOption,
.myPostTableWrap #myPostTableSelect  {
    color:#1A1B23;
}

.myPostTableWrap {
    width: 100%;
    /* margin: 50px auto;    */
    margin-bottom: 200px;
}

/* ====================Table=================== */
/* ====================Table=================== */
/* ====================Table=================== */


.myPostTable {
    width: 100%;
    margin: 10px auto;
    border-collapse: collapse;
}

.myPostTable .myPostTableTr {
    height: 40px;
    border-bottom: 1px solid #1A1B23;
}

.myPostTable .myPostTableTh {
    border-bottom: 2px solid #1A1B23;
    text-align: center;
}

.myPostTable .myPostTableRow {
    border-bottom: 2px solid #1A1B23;
    text-align: center;
}

.myPostTable .myPostTablTbody .myPostTableRow{
    height: 70px;
}

.myPostTable .myPostTableRow .myPostSubject:hover{
    color: #505DD0;
}

.nondisplay{
    display: none;
}
`
const MyPostTable = ({ myPostnum, myPostGroup, myPostTitle, myPostDate, myPostInquiry }) => (
    <MyPostTableWrap>
        <select name="#" id="myPostTableSelect">
            <option value="1" className="myPostTableOption">작성최신순</option>
            <option value="2" className="myPostTableOption">작성오래된순</option>
        </select>
        <table className="myPostTable">
            <colgroup>
                <col width="5%" />
                <col width="10%" />
                <col width="65%" />
                <col width="10%" />
                <col width="10%" />
            </colgroup>
            <thead className="myPostTablThead">
                <tr className="myPostTableTr">
                    <th scope="col" className="myPostTableTh">번호</th>
                    <th scope="col" className="myPostTableTh">분류</th>
                    <th scope="col" className="myPostTableTh">제목</th>
                    <th scope="col" className="myPostTableTh">작성일</th>
                    <th scope="col" className="myPostTableTh">조회</th>
                </tr>
            </thead>
            <tbody className="myPostTablTbody">
            {myPostData.map((data) => (
                <tr className="myPostTableTr">
                    <td className="myPostTableRow">
                        <span className="myPostTableContentInner">{data.myPostnum}</span>
                    </td>
                    <td className="myPostTableRow">
                        <span className="myPostTableContentInner">{data.myPostGroup}</span>
                    </td>
                    <td className="myPostTableRow  ">
                        <p className="myPostSubject myPostTableContentInner">{data.myPostTitle}</p>
                    </td>
                    <td className="myPostTableRow">
                        <span className="myPostTableContentInner">{data.myPostDate}</span>
                    </td>
                    <td className="myPostTableRow">
                        <span className="myPostTableContentInner">{data.myPostInquiry}</span>
                    </td>
                </tr>
            ))}
                <tr className="myPostTableRow nondisplay postText">
                    <td colSpan={5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident
                        accusantium, atque illo perferendis, illum molestias praesentium adipisci aliquid fugiat
                        mollitia modi veritatis molestiae aspernatur fugit repellendus quod reiciendis
                        cupiditate.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident
                        accusantium, atque illo perferendis, illum molestias praesentium adipisci aliquid fugiat
                        mollitia modi veritatis molestiae aspernatur fugit repellendus quod reiciendis
                        cupiditate.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident
                        accusantium, atque illo perferendis, illum molestias praesentium adipisci aliquid fugiat
                        mollitia modi veritatis molestiae aspernatur fugit repellendus quod reiciendis
                        cupiditate.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident
                        accusantium, atque illo perferendis, illum molestias praesentium adipisci aliquid fugiat
                        mollitia modi veritatis molestiae aspernatur fugit repellendus quod reiciendis
                        cupiditate.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident
                        accusantium, atque illo perferendis, illum molestias praesentium adipisci aliquid fugiat
                        mollitia modi veritatis molestiae aspernatur fugit repellendus quod reiciendis
                        cupiditate.
                    </td>
                </tr>
            </tbody>
        </table>
    </MyPostTableWrap>
)
export default MyPostTable