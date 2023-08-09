import styles from './ministrycard.module.css'
import {useNavigate} from 'react-router-dom'

const MinistryCard = (props) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/ministry/${props.id}`)
    }

    return(
        <div onClick={handleClick} className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.ministryImg} src={props.image} alt={props.name} />
            </div>
            <div className={styles.cardText}>
                <span className={styles.ministryName}>{props.name}</span>
                <span className={styles.denomination}>Denomination: {props.denomination}</span>
            </div>
        </div>
    )
}

export default MinistryCard