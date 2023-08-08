import ContactImg from '../../common/images/contact-page-image.jpg'
import Banner from '../../components/Banner/Banner'
import styles from './contact.module.css'
import {useState} from 'react'
import classNames from 'classnames'

const Contact = () => {

    const [formData, setFormData] = useState({'name':'','email':'','subject':'','description':''})

    const [btnText,setBtnTxt] = useState("Submit")

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(values => ({...values,[name]:value}))
    }

    const sheetUrl = "https://script.google.com/macros/s/AKfycbztwLUNYcbPpwLhjK4C_jdVUMGN4QMdY6bt2CYfCWry_N366LaXrP0qJ7TaXuN0T6Fd/exec"

    const handleSubmit = (event) => {
        event.preventDefault()
        setBtnTxt("Sending...")
        console.log(formData)
        var form_data = new FormData();
        for ( var key in formData ) {
            form_data.append(key, formData[key]);
        }
        fetch(sheetUrl,{
            method:'POST',
            body: form_data
        }).then(response => {
            setFormData({'name':'','email':'','subject':'','description':''})
            setBtnTxt("Submit")
            return response.json()
        })
        
    }

    return (
        <div>
            <Banner
                title="Contact"
                subtitle="Reach out to us!"
                photo={ContactImg}
            />

            <div className={styles.container}>
                Any questions, comments, or concerns? Anything the site could improve on? Any bugs or errors? Fill out the form to contact JJ! He will try to get back to you as soon as possible :)
            </div>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.formStyle}>
                    <input name='name' type="text" onChange={handleChange}value={formData['name']} placeholder='Name' required/>   
                    <input name='email' type="email" onChange={handleChange} value={formData['email']} placeholder='Email' required/>
                    <input name='subject' type="text" onChange={handleChange} value={formData['subject']} placeholder='Subject' required/>
                    <textarea className={styles.description} name="description" onChange={handleChange} value={formData['description']} placeholder='Description' required></textarea>
                    <button type="submit" className={classNames(styles.submitBtn)}>{btnText}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact