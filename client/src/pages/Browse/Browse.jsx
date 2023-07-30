import styles from './browse.module.css'
import Banner from '../../components/Banner/Banner'
import BrowseImg from '../../common/images/browse-page-image.jpeg'
import MinistryCard from '../../components/MinistryCard/MinistryCard'

const Browse = () => {

    const ministryList = [
        {'title':'RUF','denomination':'PCA',id:1},
        {'title':'BSM','denomination':'SBC',id:2},
        {'title':"CRU",'denomination':'Non-denom',id:3}
    ]

    return (
        <div>
            <Banner
                title="Ministries"
                subtitle="View ministries on campus"
                photo={BrowseImg}
            />
            <div className={styles.ministryContainer}>
                {ministryList.map((ministry) => (
                    <MinistryCard
                        key={ministry.id}
                        name={ministry.title}
                        bannerImg={BrowseImg}
                        denomination={ministry.denomination}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default Browse