import styles from "./location.css";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Location = () => {
    const {isVisible, ref} = useIntersectionObserver();


    return (
        <section
            ref={ref}
            className={isVisible ? "animate-section location" : "location"}
        >
            <div className="location-information">
                <div>
                    Gdje nas možete <span>pronaći</span>
                </div>
                <address>Dračevac 18/D, 21000, Split</address>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.84223155193!2d16.497858384500226!3d43.52648259661356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355fa4fedeb953%3A0xb33d8b7539fb500c!2sSOLIDUS%20D.O.O.!5e0!3m2!1sen!2shr!4v1684912125152!5m2!1sen!2shr"
                className="location-map"
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};


export default Location;
