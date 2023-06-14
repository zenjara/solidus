import {useState} from "react";
import styles from "./contact.css";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";


const Contact = () => {
    const {isVisible, ref} = useIntersectionObserver();
    const [successMessage, setSuccessMessage] = useState(undefined)
    // const [successMessage, setSuccessMessage] = useState('Poruka je uspješno poslana!')
    const [errorMessage, setErrorMessage] = useState(undefined)
    // const [errorMessage, setErrorMessage] = useState('Dogodila se greška prilikom slanja :( . Molimo pokušajte ponovno.')
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
                body: JSON.stringify({name, email, message}),
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
                    <div className="contact-us-title">
                        Pošaljite nam <span>upit</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Ime i Prezime" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                        <input type="email" placeholder="Email" required value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <textarea placeholder="Poruka" value={message}
                                  onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit">Pošalji</button>
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
