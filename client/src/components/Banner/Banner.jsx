import styles from './banner.module.css'

const Banner = (props) => {
    return(
        <div className={styles.banner}>
            <div className={styles.bannerTitles}>
                <span className={styles.bannerTitleLg}>{props.title}</span>
                <span className={styles.bannerTitleSm}>{props.subtitle}</span>
            </div>
            <img className={styles.bannerImg} src={props.photo} alt={props.title+" banner"}/>
        </div>
    )

}

export default Banner