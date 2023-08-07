import styles from './browse.module.css'
import Banner from '../../components/Banner/Banner'
import BrowseImg from '../../common/images/browse-page-image.jpeg'
import MinistryCard from '../../components/MinistryCard/MinistryCard'
import { useEffect, useState } from 'react'
import { API_KEY, SHEET_ID, SHEET_NAME } from '../../constants'

const Browse = () => {


    const ministryList = [
        {'title':'RUF','denomination':'PCA',id:1},
        {'title':'BSM','denomination':'SBC',id:2},
        {'title':"CRU",'denomination':'Non-denom',id:3}
    ]

    const [ministries, setMinistries] = useState()

    useEffect(() => {


        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`
        fetch(url)
        .then(response => {
            console.log(response)
        })
        .catch(err=> {
            console.log(err)
        })
    },[])

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