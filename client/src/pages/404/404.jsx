import styles from './404.module.css'


const Error404 = () => {
    return(
        <div className={styles.errorContainer}>
            <h1 className={styles.errorText}>Error 404: Page not found</h1>
        </div>
    )
}

export default Error404