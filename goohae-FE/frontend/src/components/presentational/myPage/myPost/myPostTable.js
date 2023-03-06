import React from 'react';
import styles from '../../../CSS/myPage/myPost/myPostTable.module.css';
const myPostData = [
    {
        myPostnum: "001",
        myPostGroup: "리뷰",
        myPostTitle: "너무 좋아요",
        myPostDate: "11/14",
        myPostInquiry: "500132"
    }]

export default function MyPostTable() {
    return (
        <article className={styles.myPostTableWrap}>
            <select name="#" id="myPostTableSelect">
                <option value="1" className={styles.myPostTableOption}>작성최신순</option>
                <option value="2" className={styles.myPostTableOption}>작성오래된순</option>
            </select>
            <table className={styles.myPostTable}>
                <colgroup>
                    <col width="5%" />
                    <col width="10%" />
                    <col width="65%" />
                    <col width="10%" />
                    <col width="10%" />
                </colgroup>
                <thead className={styles.myPostTablThead}>
                    <tr className={styles.myPostTableTr}>
                        <th scope="col" className={styles.myPostTableTh}>번호</th>
                        <th scope="col" className={styles.myPostTableTh}>분류</th>
                        <th scope="col" className={styles.myPostTableTh}>제목</th>
                        <th scope="col" className={styles.myPostTableTh}>작성일</th>
                        <th scope="col" className={styles.myPostTableTh}>조회</th>
                    </tr>
                </thead>
                <tbody className={styles.myPostTablTbody}>
                    {myPostData.map((data) => (
                        <tr className={styles.myPostTableTr}>
                            <td className={styles.myPostTableRow}>
                                <span className={styles.myPostTableContentInner}>{data.myPostnum}</span>
                            </td>
                            <td className={styles.myPostTableRow}>
                                <span className={styles.myPostTableContentInner}>{data.myPostGroup}</span>
                            </td>
                            <td className={styles.myPostTableRow} >
                                <p className={[styles.myPostSubject, styles.myPostTableContentInner]}>{data.myPostTitle}</p>
                            </td>
                            <td className={styles.myPostTableRow}>
                                <span className={styles.myPostTableContentInner}>{data.myPostDate}</span>
                            </td>
                            <td className={styles.myPostTableRow}>
                                <span className={styles.myPostTableContentInner}>{data.myPostInquiry}</span>
                            </td>
                        </tr>
                    ))}
                    <tr className={styles.myPostTableRow} nondisplay postText>
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
        </article>
    );
}