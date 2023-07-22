import styles from './browse.module.css'
import Banner from '../../components/Banner/Banner'
import BrowseImg from '../../common/images/browse-page-image.jpeg'
import MinistryCard from '../../components/MinistryCard/MinistryCard'

const Browse = () => {

    const ministryList = [
        {'title':'RUF'},
        {'title':'BSM'},
        {'title':"CRU"}
    ]
    console.log(ministryList)
    return (
        <div>
            <Banner
                title="Browse"
                subtitle="View ministries on campus"
                photo={BrowseImg}
            />
            {ministryList.map((ministry) => (
                <MinistryCard
                    key={ministry.title}
                    name={ministry.title}
                />
            ))}
        </div>
        
    )
}

export default Browse