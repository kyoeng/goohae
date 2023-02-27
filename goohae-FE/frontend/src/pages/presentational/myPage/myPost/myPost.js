import { Link } from 'react-router-dom';
import '../../../css/myPage/myPost/myPost.css';


export default function MyPost() {

    // let postSubject = document.querySelector('.postSubject');
    // let postText = document.querySelector('.postText');
    // console.log('postSubject')

    // postSubject.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     if (!(postText.classList.contains('nondisplay'))) {
    //         postText.classList.add('nondisplay');
    //     } else {
    //         postText.classList.remove('nondisplay');
    //     }
    // })
    return (

        <div className="myPostMain">
            <section id="myPostWrap">
                <div className="myPostTableCategory">
                    <Link to="/" className="myPageLink">홈&nbsp;&nbsp;&gt;</Link>
                    <Link to="/MyPage" className="myPageLink">&nbsp;&nbsp;마이쇼핑&nbsp;&nbsp;&gt;</Link>
                    <Link to="/MyPost" className="myPageLink" id="myOrderLink">&nbsp;&nbsp;주문조회&nbsp;&nbsp;</Link>
                </div>
                <p className="myPostTitle">나의 리뷰</p>
                <article className="myPostTableWrap">
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
                            <tr className="myPostTableTr">
                                <td className="myPostTableRow">
                                    <a href="#">001</a>
                                </td>
                                <td className="myPostTableRow">
                                    <a href="#">리뷰</a>
                                </td>
                                <td className="myPostTableRow  ">
                                    <p className="myPostSubject">너무 좋아요!</p>
                                </td>
                                <td className="myPostTableRow">
                                    <a href="#">11/14</a>
                                </td>
                                <td className="myPostTableRow">
                                    <a href="#">500,132</a>
                                </td>
                            </tr>
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
                </article>
            </section>
        </div>
    );
}