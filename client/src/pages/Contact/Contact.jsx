import ContactImg from '../../common/images/contact-page-image.jpg'
import Banner from '../../components/Banner/Banner'
import styles from './contact.module.css'
import {useState} from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({'name':'','email':'','subject':'','description':''})

    const handleChange = (event) => {
        
        const name = event.target.name
        const value = event.target.value
        setFormData(values => ({...values,[name]:value}))

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <Banner
                title="Contact"
                subtitle="Reach out to us!"
                photo={ContactImg}
            />

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.formStyle}>
                    <input name='name' type="text" onChange={handleChange}value={formData['name']} placeholder='Name' required/>   
                    <input name='email' type="email" onChange={handleChange} value={formData['email']} placeholder='Email' required/>
                    <input name='subject' type="text" onChange={handleChange} value={formData['subject']} placeholder='Subject' required/>
                    <textarea className={styles.description} name="description" onChange={handleChange} value={formData['description']} placeholder='Description' required></textarea>
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact