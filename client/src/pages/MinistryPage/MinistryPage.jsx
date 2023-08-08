import { useParams } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import BrowseImg from '../../common/images/browse-page-image.jpeg'
import {useEffect, useState} from 'react'
import PersonCard from "../../components/PersonCard/PersonCard"
import styles from './ministrypage.module.css'
import EventCard from "../../components/EventCard/EventCard"
import {API_KEY,SHEET_ID,MINISTRY_SHEET} from '../../constants'

const MinistryPage = () => {

    const ministryId = parseInt(useParams().id)

    const [ministryData,setMinistryData] = useState({id:'',abbreviation:'',minName:'',denomination:'', website:'',bannerImg:'', description:''})
    const [events, setEvents] = useState([])
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${MINISTRY_SHEET}!A${ministryId+1}:G${ministryId+1}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const minData = data.values
            console.log(minData[0])
            setMinistryData({
                id:minData[0][0],
                abbreviation:minData[0][1],
                minName:minData[0][2],
                denomination:minData[0][3],
                bannerImg:minData[0][4],
                website:minData[0][5],
                description:minData[0][6],
            })
        })
    },[])

    const [data, setData] = useState({
        staff: [
            {
                name:'Curtis Shields',
                role:'Campus Minister',
                contact: '812-512-9382'
            },
            {
                name:'Curtis Shields',
                role:'Campus Minister',
                contact: '812-512-9382'
            },
            {
                name:'Curtis Shields',
                role:'Campus Minister',
                contact: '812-512-9382'
            }
        ],
        events: [
            {
                name:'Large Group',
                startTime: '5:30pm',
                endTime:'7:00pm',
                dayOfWeek:'Monday'
            },
            {
                name:"Men's Bible Study",
                startTime: '12:30pm',
                endTime:'2:00pm',
                dayOfWeek:'Tuesday'
            },
            {
                name:'Fun Friday',
                startTime: '7:30pm',
                endTime:'10:00pm',
                dayOfWeek:'Friday'
            }
        ]
    })

    return (
        <>        
            <div>
                <Banner 
                    title={ministryData.abbreviation}
                    subtitle={ministryData.minName}
                    optionalSubtitle={ministryData.denomination}
                    photo = {ministryData.bannerImg}
                />

                <h1 className={styles.sectionTitle}>Description</h1>
                <p className={styles.description}>{ministryData.description}</p>

                <h1 className={styles.sectionTitle}>Events</h1>
                <div className={styles.eventContainer}>
                    {data.events.map((event) => {
                        return(
                            <EventCard
                                name={event.name}
                                startTime={event.startTime}
                                endTime={event.endTime}
                                dayOfWeek={event.dayOfWeek}
                            />
                        )
                    })}
                </div>

                <h1 className={styles.sectionTitle}>Persons of Contact</h1>
                <div className={styles.peopleContainer}>
                    {data.staff.map((person) => {
                        return (
                            <PersonCard
                                photo={BrowseImg}
                                name={person.name}
                                role={person.role}
                                contact={person.contact}
                            />
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default MinistryPage