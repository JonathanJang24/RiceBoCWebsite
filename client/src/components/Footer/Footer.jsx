import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <h3 className={styles.footerEl}>This website is not affiliated with Rice University or ministry in any manner</h3>
            <h3 className={styles.footerEl}>&copy;2023</h3>

        </div>
    )
}

export default Footer