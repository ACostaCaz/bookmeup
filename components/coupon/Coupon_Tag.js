import styles from "../../styles/coupon/coupon_tag.module.css"
import Delete_Icon from "../../styles/coupon/delete_icon"

export default function Coupon_Tag() {
    return (
        <div id={styles.coupon_tag} tabindex="0">
            <div id={styles.left_border}></div>
            <div id={styles.coupon_main}>
                <section>
                    <h1>Name</h1>
                </section>
                <section id={styles.coupon_body}>
                    <h3>Additional Information</h3>
                    <p>This is the information to be shown.</p>
                </section>
                <section id={styles.coupon_foot}>
                    <Delete_Icon/>
                </section>
            </div>
        </div>
    )
}