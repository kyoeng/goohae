import styles from "./CSS/ReviewBox.module.css"

export default function ReviewBox({ reviewProData, PopUpOnoff }) {
    let outputReviewBox = [];
    
    reviewProData.forEach((v, i) => {
        outputReviewBox.push(
            <article className={styles.reviewBox} key={`reBox.${i}`}>
                <a href="#!" className={styles.AforReviewBox}
                    id={`onPopUp.${i}`} onClick={(e) => PopUpOnoff(e)}>:</a>

                <img className={styles.reviewImg} src={v.img} alt="img" />

                <div className={styles.reviewInfo}>
                    <p className={styles.reviewProduct}>{v.product_name}</p>

                    <div className={styles.reviewIdScore}>
                        <span className={styles.reviewWriter}>{v.user_id}</span>
                        <span className={styles.reviewScore}>{v.point}</span>
                    </div>

                    <p className={styles.reviewTitle}>{v.title}</p>
                </div>
            </article>
        );
    })

    return (
        <>
            {outputReviewBox}
        </>
    );
}