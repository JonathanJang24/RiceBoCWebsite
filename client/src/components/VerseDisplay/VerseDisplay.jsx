import styles from './versedisplay.module.css'
import {useState, useEffect} from 'react'

const VerseDisplay = (props) => {

    const [verse, setVerse] = useState({})

    useEffect(() => {
        fetch(`https://bible-api.com/${props.book}+${props.chapter}:${props.verse}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setVerse(data)
        })
    },[])


    return(
        <div className={styles.verseContainer}>
            {verse.text}
            <span className={styles.verseAddress}>{verse.reference}</span>
        </div>
    )

}

export default VerseDisplay