import styles from './browse.module.css'
import Banner from '../../components/Banner/Banner'
import BrowseImg from '../../common/images/browse-page-image.jpeg'
import MinistryCard from '../../components/MinistryCard/MinistryCard'

const Browse = () => {

    const ministryList = [
        {'title':'RUF','denomination':'PCA'},
        {'title':'BSM','denomination':'SBC'},
        {'title':"CRU",'denomination':'Non-denom'}
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
                        key={ministry.title}
                        name={ministry.title}
                        denomination={ministry.denomination}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default Browse