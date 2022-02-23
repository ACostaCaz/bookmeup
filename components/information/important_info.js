import styles from '../../styles/important_information/important_information.module.css'
import Important_Icon from '../../styles/important_information/information_icon'

export default function Important_Info(props) {
    return (
        <div id={styles.information_box}>
            <section>
                <Important_Icon/>
            </section>
            <section>
                <p>{props.information[0]}{" "}
                {props.information[1]}{" "}
                {props.information[2]}</p>
            </section>
        </div>
    )
}