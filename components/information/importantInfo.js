import Link from 'next/link'
import styles from '../../styles/important_information/important_information.module.css'
import Important_Icon from '../../styles/important_information/information_icon'

export default function importantInfo({ information, href }) {
    return (
        <div id={styles.information_box}>
            <section>
                <Important_Icon />
            </section>
            <section>
                <p>
                    {information[0]}
                    <Link href={href}>
                        <a>{information[1]}</a>
                    </Link>
                    {information[2]}
                </p>
            </section>
        </div>
    )
}
