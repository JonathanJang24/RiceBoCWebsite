import Banner from "../../components/Banner/Banner"
import AboutImg from '../../common/images/about-page-image.jpg'
import styles from './about.module.css'

const About = () => {
    return (
        <div>
            <Banner
                photo = {AboutImg}
                title="About"
                subtitle="What is this webpage?"
            />

            <h1 className={styles.sectionTitle}>What is this about?</h1>
            <div className={styles.container}>
                <p>The idea behind this website was sparked by Christians at Rice who understood the importance of unity among the Body of Christ, along with the lack of such unity on campus. We understand the value in getting plugged into a ministry, having fellowship among brothers and sisters, as well as demonstrating God's love to those both within and outside of the Covenant Community. If non-believers cannot see the Gospel within the Church, how will they see it outside of it? To be a Christian means to be connected with other believers through a bond foreign to the world: a relationship built upon the unshakable foundation of Jesus Christ. We hope and pray that God's people around campus, and the world, can take part in worship, fellowship, and minsitry alongside one another.</p>
            </div>

            <h1 className={styles.sectionTitle}>Are you guys unitarian?</h1>
            <div className={styles.container}>
                <p>We are <span className={styles.bolden}>not</span> a unitarian, pantheistic, or Christian universalist movement. There are core tenants of orthodoxy that people must adhere too in order to be considered Christian. There is exclusivity amongst God's people and a clear distinction between those within and outside of the Church, as well as those who have not yet been regenerated and saved. Though as Christians we strive to "...keep our conduct excellent among the Gentiles..." (1 Peter 2:12) we will politely decline relationship to groups we deem heretical.</p>
            </div>

            <div className={styles.container}>A special shoutout to those involved in the organizing and making of this whole idea:...</div>

        </div>  
    )
}

export default About