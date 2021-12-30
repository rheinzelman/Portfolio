import React, { FormEvent } from 'react'
import axios from 'axios'

import './Contact.css'

const Contact = () => {

    const formID = 'HdX8sO1w';
    const formSparkURL = 'https://submit-form.com/HdX8sO1w';

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        await postSubmission();
    };

    const postSubmission = async () => {
        const payload = {
            message: 'Test formSpark message!!!!'
        }

        try{
            const result = await axios.post(formSparkURL,payload)
            console.log(result)
            console.log('works')
        } catch (error) {
            console.log(error)
            console.log("doesn't work")
        }
    }

    return (
        <div id={"contact-div"}>
            <h3 className={"m-3"}>Contact</h3>
            <form id={"contact-form"} onSubmit={submitForm}>
                <p>Name:</p>
                <input id={"contact-name-box"} type={"text"} placeholder={"Your name here"}></input>
                <p>Email:</p>
                <input id={"contact-email-box"} type={"text"} placeholder={"Your email here"}></input>
                <p>Message:</p>
                <textarea id={"message-text"} placeholder={"Your message here"}></textarea><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact