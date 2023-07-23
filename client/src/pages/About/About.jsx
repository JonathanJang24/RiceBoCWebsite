import Banner from "../../components/Banner/Banner"
import AboutImg from '../../common/images/about-page-image.jpg'

const About = () => {
    return (
        <div>
            <Banner
                photo = {AboutImg}
                title="About"
                subtitle="What is this webpage?"
            />
        </div>
        
    )
}

export default About