import Banner from '../../components/Banner/Banner'
import styles from './home.module.css'
import HomeImg from '../../common/images/home-page-image.jpg'

const Home = () => {

    return (
        <div className="container">
            <Banner
                photo = {HomeImg}
                title={"Home"}
                subtitle={"Rice's Body of Christ"}
            />


        </div>
        
    )
}

export default Home