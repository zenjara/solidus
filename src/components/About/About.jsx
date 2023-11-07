import styles from "./about.css";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import officeImage from "../../../public/about.jpg";
import { LanguageContext } from "@/app/page";
import { useContext } from "react";

const About = () => {
    const { isVisible, ref } = useIntersectionObserver();
    const { t } = useContext(LanguageContext)

    return (
        <section
            ref={ref}
            className={isVisible ? "animate-section about-us" : "about-us"}
            id="about"
        >
            <div className="content">
                <div className='contents'>

                    <div className="content-text">
                        <div className="content-title">
                            {t['about']}
                            {/* O <span>nama</span> */}
                        </div>
                        <p>{t['about_text']}.</p>
                        <br />
                        <p>{t['about_text_2']}</p>
                        <br />
                        <p>{t['about_text_3']}</p>
                    </div>
                    <Image className="building-svg" src={officeImage} alt='ured' />
                </div>
            </div>
        </section>
    );
};

export default About;
