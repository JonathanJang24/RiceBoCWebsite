import styles from './personcard.module.css'

const PersonCard = props => {


    return (
        <div className={styles.cardContainer}>
            <img src={props.photo} className={styles.personPhoto} alt={props.name} />
            <div className={styles.text}>
                <p><span className={styles.boldLabel}>Name: </span> {props.name}</p>
                <p><span className={styles.boldLabel}>Role: </span>{props.role}</p>
                <p><span className={styles.boldLabel}>Phone: </span>{props.phone}</p>
                <p><span className={styles.boldLabel}>Email: </span>{props.email}</p>
            </div>
        </div>
    )
}

export default PersonCard