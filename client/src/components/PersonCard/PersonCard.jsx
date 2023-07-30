import styles from './personcard.module.css'

const PersonCard = props => {



    return (
        <div className={styles.cardContainer}>
            <img src={props.photo} className={styles.personPhoto} alt={props.name} />
            <div className={styles.text}>
                <p><span className={styles.boldLabel}>Name: </span> {props.name}</p>
                <p><span className={styles.boldLabel}>Role: </span>{props.role}</p>
                <p><span className={styles.boldLabel}>Contact: </span>{props.contact}</p>
            </div>
        </div>
    )
}

export default PersonCard