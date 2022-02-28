import styles from '../../styles/coupon/coupon_tag.module.css'
import Delete_Icon from '../../styles/coupon/delete_icon'

export default function Coupon_Tag({ name, discount }) {
    return (
        <div id={styles.coupon_tag} tabIndex="0">
            <div id={styles.left_border}></div>
            <div id={styles.coupon_main}>
                <section>
                    <h1>{name}</h1>
                </section>
                <section id={styles.coupon_body}>
                    <h3>Discount</h3>
                    <p>{discount}</p>
                </section>
                <section id={styles.coupon_foot}>
                    <Delete_Icon>
                        <button></button>
                    </Delete_Icon>
                </section>
            </div>
        </div>
    )
}
