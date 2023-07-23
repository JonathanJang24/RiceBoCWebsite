import ContactImg from '../../common/images/contact-page-image.jpg'
import Banner from '../../components/Banner/Banner'

const Contact = () => {
    return (
        <div>
            <Banner
                title="Contact"
                subtitle="Reach out to us!"
                photo={ContactImg}
            />
        </div>
    )
}

export default Contact