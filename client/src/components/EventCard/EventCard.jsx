import styles from './eventcard.module.css'

const EventCard = props => {
    return(
        <div className={styles.cardContainer}>
            <p className={styles.eventName}>{props.name}</p>
            <p>{props.dayOfWeek}</p>
            <p>{props.startTime} - {props.endTime}</p>
        </div>
    )
}

export default EventCard