import Banner from '../../components/Banner/Banner'
import styles from './home.module.css'
import HomeImg from '../../common/images/home-page-image.jpg'
import VerseDisplay from '../../components/VerseDisplay/VerseDisplay'
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed'
import useIsMobile from '../../components/hooks/useIsMobile'
import {useRef} from 'react'
import useIsInViewport from '../../components/hooks/useIsInViewport'
import classNames from 'classnames'

const Home = () => {

    const isMobile = useIsMobile();
    const videoLabelRef = useRef(null)
    const vLabelVis = useIsInViewport(videoLabelRef)

    return (
        <div>
            <Banner
                photo = {HomeImg}
                title={"Home"}
                subtitle={"Rice's Body of Christ"}
            />

            <div className={styles.welcomeText}>
            Welcome to the unofficial website representing the Body of Christ on Rice's campus! Stay here to get in touch with various ministries, get connected, and meet new brothers and sisters!
            </div>

            <VerseDisplay
                book={"john"}
                chapter={"13"}
                verse={"35"}
            />

            <div className={styles.homeVideoContainer}>
                <div ref={videoLabelRef} className={classNames(styles.videoLabel, vLabelVis ? styles.ls : styles.diss)}>
                    <span>Christians worshipping together at Ray's Courtyard during dead days, 2023</span>
                </div>
                <YoutubeEmbed
                    embedId={'mqLDKcFIxXs'}
                />
            </div>

            <VerseDisplay
                book={"psalm"}
                chapter={"133"}
                verse={"1"}
            />

        </div>
        
    )
}

export default Home