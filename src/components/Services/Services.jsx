import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPersonDigging,
    faScrewdriverWrench,
    faTrowelBricks,
    faPaintRoller,
    faHome
} from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { LanguageContext } from "@/app/page";
import { useContext } from "react";

const Services = () => {
    const { isVisible, ref } = useIntersectionObserver();
    const { t } = useContext(LanguageContext)

    return (
        <section
            ref={ref}
            className={
                isVisible ? "animate-section services-section" : "services-section"
            }
        >
            <div className="services-title" dangerouslySetInnerHTML={{ __html: t['what_can_we_offer'] }} />
            <div className="services-offer">
                <div className="service">
                    <FontAwesomeIcon icon={faPersonDigging} className="icon" />
                    <h3>{t['construction']}</h3>
                    <span>
                        {t['construction_text']}
                    </span>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
                    <h3>{t['adaptation']}</h3>
                    <span>
                        {t['adaptation_text']}
                    </span>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faTrowelBricks} className="icon" />
                    <h3>{t['renovation']}</h3>
                    <span>
                        {t['renovation_text']}
                    </span>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faHome} className="icon" />
                    <h3>{t['turnkey']}</h3>
                    <span>
                        {t['turnkey_text']}
                    </span>
                </div>
            </div>
        </section >
    );
};

export default Services;
