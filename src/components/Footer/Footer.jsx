"use client";
import styles from "./footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTractor,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer>
            <FontAwesomeIcon icon={faTractor} className="footer-tractor"/>
            <div className="footer-grid">
                Copyright© Solidus d.o.o. {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
