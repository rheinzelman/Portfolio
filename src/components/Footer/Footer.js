import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";

import './Footer.css'

type FormState = {
    email: string;
    name: string;
    message: string;
}

type ServiceMessage = {
    class: string;
    text: string;
}

const Footer = () => {

    const formID = "HdX8sO1w";
    const formSparkURL = 'https://submit-form.com/' + formID
    const recaptchaKey = '6LfO5uYdAAAAAE1H4IQOsavPsVK3o8UWDVLzHoy0'
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
    const [recaptchaToken, setRecaptchaToken] = useState();

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    }

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken,
        }

        try {
            const result = await axios.post(formSparkURL, payload);
            console.log(result)
            setMessage({
                class: '',
                text: "Thanks, I'll get back to you ASAP",
            })
            setFormState(initialFormState);
            recaptchaRef.current.reset();
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
        setRecaptchaToken(token);
    }

    const onloadCallback = () => {
        console.log('test')
    }

    return (
        <div id="footer-div" className="mt-3">
            <div id="contact-div">

                <h3>Contact</h3>

                <script src="https://www.google.com/recaptcha/api.js" async defer></script>

                {message && <div className={'${message.class}'}>
                    {message.text}
                </div>}

                <form onSubmit={submitForm} className="">

                    <div id="contact" className="formSection">
                        <label htmlFor={"name'"}>Name</label>
                        <input onChange={updateFormControl} type={"text"} id={"name"} value={formState.name} className="form-control" placeholder="Enter your name" />
                    </div>

                    <div className="formSection">
                        <label htmlFor={"email'"}>Email</label>
                        <input onChange={updateFormControl} type={"text"} id={"email"} value={formState.email} className="form-control" placeholder="Enter your email" />
                    </div>

                    <div className="formSection pb-2">
                        <label htmlFor={"message'"}>Message</label>
                        <textarea id={"message"} onChange={updateFormControl} value={formState.message} className="form-control" placeholder="enter your message"/>
                    </div>

                    <ReCAPTCHA
                        className="pb-2"
                        ref={recaptchaRef}
                        sitekey={recaptchaKey}
                        onChange={updateRecaptchaToken}
                    />

                    <button disabled={submitting} className={"btn btn-primary"}>
                        {submitting ? 'Submitting...': 'Submit'}
                    </button>

                </form>

                <div id="copyright" className="mt-3 mb-3">copyright goes here</div>

            </div>
        </div>

    );
};

export default Footer