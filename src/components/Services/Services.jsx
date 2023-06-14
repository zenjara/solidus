import {useRef, useEffect, useState} from "react";
import Image from "next/image";
import styles from "./services.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPersonDigging,
    faScrewdriverWrench,
    faTrowelBricks,
    faPaintRoller,
    faHome
} from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Services = () => {
    const {isVisible, ref} = useIntersectionObserver();

    return (
        <section
            ref={ref}
            className={
                isVisible ? "animate-section services-section" : "services-section"
            }
        >
            <div className="services-title">
                Što možemo <span>ponuditi</span>
            </div>
            <div className="services-offer">
                <div className="service">
                    <FontAwesomeIcon icon={faPersonDigging} className="icon"/>
                    <h3>Izgradnja</h3>
                    <span>
            Izvodimo armirano-betonske, tesarske te zidarske radove, uključujući fasaderske radove. Radove izvodimo kao kooperanti na velikim projektima ili kao nosioci posla.
          </span>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="icon"/>
                    <h3>Adaptacija</h3>
                    <span>
            Adaptacijski radovi, adaptacija stana, adaptacija kuće ili adaptacija poslovnog prostora obuhvaća izvedbu raznih građevinskih radova na uređenju interijera kako bi stvorio kvalitetniji i ugodniji prostor za boravak.
          </span>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faTrowelBricks} className="icon"/>
                    <h3>Renovacija</h3>
                    <span>
            Obnavljanje i uređenje stambenih objekata, objekata pod kulturnom zaštitom, svih poslovnih, sportskih, društvenih i industrijskih objekata koji pripadaju ovoj vrsti djelatnosti.
          </span>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faHome} className="icon"/>
                    <h3>Ključ u ruke</h3>
                    <span>
            Nudimo izvođenje svih radova na izgradnji obiteljskih kuća te manjih stambenih i poslovnih zgrada. Garantiramo visoku kvalitetu te udobnost življenja. Radove izvodimo po sistemu ‘visoki roh-bau’ ili ‘ključ u ruke’.​
          </span>
                </div>
            </div>
        </section>
    );
};

export default Services;
