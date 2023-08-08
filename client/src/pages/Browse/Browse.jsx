import styles from './browse.module.css'
import Banner from '../../components/Banner/Banner'
import BrowseImg from '../../common/images/browse-page-image.jpeg'
import MinistryCard from '../../components/MinistryCard/MinistryCard'
import { useEffect, useState } from 'react'
import { API_KEY, SHEET_ID, BROWSE_SHEET } from '../../constants'

const Browse = () => {

    const [ministries, setMinistries] = useState([])

    useEffect(() => {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${BROWSE_SHEET}!A2:Z1000?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const sheetData = data.values
            const mappedData = []
            for (var row in sheetData){
                mappedData.push({
                    id: sheetData[row][0],
                    abbreviation: sheetData[row][1],
                    title: sheetData[row][2],
                    denomination: sheetData[row][3],
                    image_url: sheetData[row][4]
                })
            }
            setMinistries(mappedData)
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
                {ministries.map((ministry) => (
                    <MinistryCard
                        key={ministry.id}
                        id={ministry.id}
                        name={ministry.abbreviation}
                        image={ministry.image_url}
                        denomination={ministry.denomination}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default Browse