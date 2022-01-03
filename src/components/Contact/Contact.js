import React, {useRef, useState} from "react";
import axios from 'axios'
import {ChangeEvent} from "react";
import {ReCAPTCHA} from "react-google-recaptcha";

type FormState = {
    email: string;
    name: string;
    message: string;
}

type ServiceMessage = {
    class: string;
    text: string;
}

const Contact = () => {

    const formID = "HdX8sO1w";
    const formSparkURL = 'https://submit-form.com/' + formID
    const recaptchaKey = ''
    const recaptchaRef = useRef();

    const initialFormState = {
        email: '',
        name: '',
        message: '',
    }

    const [formState, setFormState] = useState(initialFormState);
    // eslint-disable-next-line no-undef
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    }

    const postSubmission = async () => {
        const payload = {
            ...formState
        }

        try {
            const result = await axios.post(formSparkURL, payload);
            console.log(result)
            setMessage({
                class: '',
                text: "Thanks, I'll get back to you ASAP",
            })
        } catch(error){
            console.log(error)
            setMessage({
                class: '',
                text: "Sorry, I suck at computers and sending messages is broken...",
            })
        }
    }

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        const formKey = id;
        const updatedFormState = {...formState};
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    }

    const updateRecaptchaToken = (token: string | null) => {
        
    }

    return (

        <div className="contact-div">

            {message && <div className={'${message.class}'}>
                {message.text}
            </div>}

            <form onSubmit={submitForm}>

                <div className="formSection">
                    <label htmlFor={"name'"}>Name</label>
                    <input onChange={updateFormControl} type={"text"} id={"name"} value={formState.name}/>
                </div>

                <div className="formSection">
                    <label htmlFor={"email'"}>Email</label>
                    <input onChange={updateFormControl} type={"text"} id={"email"} value={formState.email}/>
                </div>

                <div className="formSection">
                    <label htmlFor={"message'"}>Message</label>
                    <textarea id={"message"} onChange={updateFormControl} value={formState.message} />
                </div>

                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaKey}
                    onChange={updateRecaptchaToken}>

                </ReCAPTCHA>

                <button disabled={submitting} className={"contact-button"}>
                    {submitting ? 'Submitting...': 'Submit'}
                </button>

            </form>

        </div>

    );
};

export default Contact