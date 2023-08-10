import { useParams } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import {useEffect, useState} from 'react'
import PersonCard from "../../components/PersonCard/PersonCard"
import styles from './ministrypage.module.css'
import EventCard from "../../components/EventCard/EventCard"
import {API_KEY,SHEET_ID,MINISTRY_SHEET, PEOPLE_SHEET, EVENT_SHEET} from '../../constants'

const MinistryPage = () => {

    const ministryId = parseInt(useParams().id)

    const [ministryData,setMinistryData] = useState({id:'',abbreviation:'',minName:'',denomination:'', website:'',bannerImg:'', description:''})
    const [events, setEvents] = useState([])
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        // for minsistry data
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${MINISTRY_SHEET}!A${ministryId+1}:G${ministryId+1}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const minData = data.values
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

        //for contact data
        const peopleUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PEOPLE_SHEET}!A2:Z1000?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`
        fetch(peopleUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const mappedContacts = []
            const filteredContacts = data.values.filter((c)=>c[0]===String(ministryId))
            for (var cidx in filteredContacts){
                mappedContacts.push({
                    id:cidx,
                    name:filteredContacts[cidx][1],
                    role:filteredContacts[cidx][2],
                    phone:filteredContacts[cidx][3],
                    email:filteredContacts[cidx][4],
                    photo: filteredContacts[cidx][5]
                })
            }
            setContacts(mappedContacts)
        })

        //for event data
        const eventUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${EVENT_SHEET}!A2:Z1000?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`
        fetch(eventUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const mappedEvents = []
            const filteredEvents = data.values.filter((e)=>e[0]===String(ministryId))
            for (var eidx in filteredEvents){
                mappedEvents.push({
                    id:eidx,
                    name:filteredEvents[eidx][1],
                    startTime:filteredEvents[eidx][2],
                    endTime: filteredEvents[eidx][3],
                    dayOfWeek: filteredEvents[eidx][4],
                })
            }
            setEvents(mappedEvents)
        })
    },[ministryId])

    
    return (
        <>        
            <div>
                <Banner 
                    title={ministryData.abbreviation}
                    subtitle={ministryData.minName}
                    optionalSubtitle={"Denomination: "+ministryData.denomination}
                    photo = {ministryData.bannerImg}
                />

                <div className={styles.websiteContainer}>
                    <a href={ministryData.website}>{ministryData.website}</a>
                </div>
                <h1 className={styles.sectionTitle}>Description</h1>
                <p className={styles.description}>{ministryData.description}</p>
                
                <h1 className={styles.sectionTitle}>Events</h1>
                <div className={styles.eventContainer}>
                    {events.map((event) => {
                        return(
                            <EventCard
                                key={event.name}
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
                    {contacts.map((person) => {
                        return (
                            <PersonCard
                                photo={person.photo}
                                name={person.name}
                                role={person.role}
                                phone={person.phone}
                                email={person.email}
                                key={person.id}
                            />
                        )
                    })}
                </div>
                
            </div>
        </>
    )
}

export default MinistryPage