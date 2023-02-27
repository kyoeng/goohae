import styles from "./CSS/ReviewContainer.module.css"

export default function ReviewContainer({ children }) {
    return (
        <>
            <section className={styles.mainReview}>
                <h3 style={{ fontSize: "2.3rem", textAlign: "center", height: "50px", lineHeight: "50px" }}>Review</h3>

                <div className={styles.ReviewContainer}>
                    {children}
                </div>
            </section>
        </>
    );
}