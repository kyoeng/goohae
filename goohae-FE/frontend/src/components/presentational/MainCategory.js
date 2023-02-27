import styles from "../CSS/MainCategory.module.css";



export default function MainCategory() {

    function toScrollTop() {
        window.scrollTo({ top: 0 });
    }

    return (
        <section className={styles.mainCategory}>
            <div className={styles.LivingCategory} ><a onClick={toScrollTop}><span>Living</span></a></div>
            <div className={styles.BedCategory} ><a onClick={toScrollTop}><span>Bed Room</span></a></div>
            <div className={styles.DiningCategory} ><a onClick={toScrollTop}><span>Dining</span></a></div>
            <div className={styles.DressCategory} ><a onClick={toScrollTop}><span>Dress Room</span></a></div>
        </section>
    );
}