import Coupon_Icon from '../../styles/nav/coupon_icon'
import History_Icon from '../../styles/nav/history_icon'
import Account_Icon from '../../styles/nav/account_icon'
import styles from '../../styles/nav/nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav id={styles.nav_str}>
            <Link href="/">
                <a id={styles.nav_icon}>
                    <Coupon_Icon />
                </a>
            </Link>
            <Link href="/profile">
                <a id={styles.nav_icon}>
                    <Account_Icon />
                </a>
            </Link>
        </nav>
    )
}
