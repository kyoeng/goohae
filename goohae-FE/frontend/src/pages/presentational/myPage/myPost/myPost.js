import { Link } from 'react-router-dom';
import styles from '../../../css/myPage/myPost/myPost.module.css';
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';
import MyPostTable from '../../../../components/presentational/myPage/myPost/myPostTable';

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
        <AppLayout>
            <div className={styles.myPostMain}>
                <section id={styles.myPostWrap}>
                    <MyPageSubPageCategory myPageSubLinkKr="나의 리뷰"/>
                    <MyPsgeSubPageTitle myPsgeSubPageTitle="나의 리뷰"/>
                    <MyPostTable/>
                </section>
            </div>
        </AppLayout>
    );
}