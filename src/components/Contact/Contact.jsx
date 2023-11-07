import { useState } from "react";
import styles from "./contact.css";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useContext } from "react";
import { LanguageContext } from "@/app/page";

const Contact = () => {
    const { t } = useContext(LanguageContext)
    const { isVisible, ref } = useIntersectionObserver();
    const [successMessage, setSuccessMessage] = useState(undefined)
    const [errorMessage, setErrorMessage] = useState(undefined)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setSuccessMessage('Poruka je uspješno poslana!')
            } else {
                setErrorsMessage('Dogodila se greška prilikom slanja :( . Molimo pokušajte ponovno.');
            }
        } catch (error) {
            console.log('Error sending email', error);
        }
    };

    return (
        <section
            ref={ref}
            className={
                isVisible ? "animate-section contact-us-section" : "contact-us-section"
            }
            id="contact"
        >

            <div className="contact-wraper">
                <div className="contact-us-left">
                    <div className="contact-us-title" dangerouslySetInnerHTML={{ __html: t['contact_us'] }} />
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder={t['full_name']} value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder={t['email']} required value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <textarea placeholder={t['message']} value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit">{t['send']}</button>
                        {errorMessage &&
                            <div onClick={() => setErrorMessage(undefined)} className='error'>{errorMessage}</div>}
                        {successMessage && <div onClick={() => setSuccessMessage(undefined)}
                            className='success'>{successMessage}</div>}
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
