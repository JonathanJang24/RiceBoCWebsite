import {Link} from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link className={styles.headerEl} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles.headerEl} to="/browse">Ministries</Link>
                </li>
                <li>
                    <Link className={styles.headerEl} to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className={styles.headerEl} to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header