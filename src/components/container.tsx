import styles from "../styles/components/container.module.scss";



export default function Container(props : {children : JSX.Element | string}) {

    return(
        <div className={styles.container__outer}>
            <div className={styles.container__inner}>
                {props.children}
            </div>
        </div>
    )
}