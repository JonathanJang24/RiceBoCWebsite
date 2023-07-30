import { useParams } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import BrowseImg from '../../common/images/browse-page-image.jpeg'
import {useState} from 'react'
import PersonCard from "../../components/PersonCard/PersonCard"
import styles from './ministrypage.module.css'
import EventCard from "../../components/EventCard/EventCard"

const MinistryPage = () => {

    const ministryId = useParams()
    const [data, setData] = useState({
        minName:ministryId.id,
        denomination: 'prebyterian',
        bannerImg: BrowseImg,
        description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse quam veniam nisi ea labore, atque voluptatibus aperiam beatae sequi inventore sapiente a fugit laboriosam consequatur, ullam animi velit laborum hic tempore magnam pariatur quidem. Veniam minima dolore ab autem exercitationem, aut placeat, adipisci architecto impedit quod deserunt laudantium alias sunt? Nemo magni fuga consectetur pariatur aperiam fugiat sequi minima quia assumenda aliquid velit maiores odio accusamus rerum placeat voluptas laborum dignissimos, eaque, iure quidem perferendis accusantium! Saepe eum similique vitae alias a dolorum reiciendis at! Optio, provident exercitationem velit molestiae error, totam, animi mollitia ut odit id amet? Placeat.",
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
                    title={data.minName}
                    subtitle={data.denomination}
                    photo = {data.bannerImg}
                />

                <h1 className={styles.sectionTitle}>Description</h1>
                <p className={styles.description}>{data.description}</p>

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