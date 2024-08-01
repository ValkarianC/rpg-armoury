import { Link } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";


export default function Navbar() {
    return(
        <header className={styles.navbar__container}>
            <nav className={styles.navbar__navigation}>
                <Link to={"/"} className={styles.navbar__link}>
                    <h1>RPG Armoury</h1>
                </Link>
                <ul className={styles.navbar__list}>
                    <li>
                        <Link to={"/create"} className={styles.navbar__link}>Create</Link>
                    </li>
                    <li>
                        <Link to={"/profile"} className={styles.navbar__link}>Profile</Link>
                    </li>
                    <li>
                        <Link to={"/login"} className={styles.navbar__link}>Login</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to={"/signup"} className={styles.navbar__link}>Signup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}