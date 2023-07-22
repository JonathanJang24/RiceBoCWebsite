import styles from './ministrycard.module.css'

const MinistryCard = (props) => {

    return(
        <div className={styles.cardContainer}>
            <h1 className={styles.cardTitle}>{props.name}</h1>
        </div>
    )
}

export default MinistryCard