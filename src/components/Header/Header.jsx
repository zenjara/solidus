'use client'
import styles from "./header.css";
import Image from "next/image";
import image1 from "../../../public/construction1-unsplash.jpg";
import image2 from "../../../public/construction2-unsplash.jpg";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from 'next-i18next'
import { LanguageContext } from "@/app/page";
import { useState, useContext, useEffect } from "react";
import Select from 'react-select'
import Portal from '../Portal/Portal'
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options = [
    { value: 'en', label: '🇬🇧 EN' },
    { value: 'hr', label: '🇭🇷 HR' },
]

const Header = () => {
    const { lang, t, setLang } = useContext(LanguageContext)
    const [showMenu, setShowMenu] = useState(false)
    const sequence = [t['build'], 2000, t['renovate'], 2000, t['adapt'], 2000]
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const contentElement = document.getElementsByTagName('body')[0];

        const handleScroll = () => {
            const currentScrollY = contentElement.scrollTop;
            if (currentScrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        contentElement.addEventListener('scroll', handleScroll, { passive: true });

        return () => contentElement.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header>
            <div className='overlay'></div>
            <nav className={`nav-bar ${isScrolled ? "nav-scrolled" : ""}`} id='header'>
                <span>SOLIDUS d.o.o.</span>

                <div className="nav-menu" onClick={() => setShowMenu(true)}><FontAwesomeIcon icon={faBars} style={{ height: '30px' }} /></div>
                <div className="nav-items">
                    <div>
                        <a className="nav-a" href="#about">
                            {t['about']}
                        </a>
                    </div>
                    <div>
                        <a className="nav-a" href="#contact">
                            {t['contact']}
                        </a>
                    </div>
                    <Select options={options} defaultValue={options[0]} onChange={(option) => setLang(option.value)} unstyled isSearchable={false} styles={{
                        container: (provided, state) => ({ display: 'flex' }),
                        menu: (provided, state) => ({
                            ...provided,
                            backgroundColor: '#212529',
                            cursor: 'pointer',
                            color: "#000",
                            width: 'fit-content',
                            border: '2px  solid rgba(218, 162, 27, 0.3);'
                        }),
                        control: (provided, state) => ({
                            ...provided,
                            padding: '12px',
                            cursor: 'pointer',
                        }),
                        option: (defaultStyles, state) => ({
                            ...defaultStyles,
                            width: '100%',
                            padding: '8px 24px',
                            color: state.isSelected ? "#fff" : "#fff",
                            cursor: 'pointer',
                            backgroundColor: "#212529",
                            '&:hover': {
                                backgroundColor: "rgba(218, 162, 27)"
                            }
                        }),
                    }} />
                </div>

                {showMenu && <Portal className='mobile-menu'>
                    <button className="close-bttn" onClick={() => setShowMenu(false)}>X</button>
                    <div className="nav-items">
                        <div>
                            <a className="nav-a" href="#about" onClick={() => setShowMenu(false)}>
                                {t['about']}
                            </a>
                        </div>
                        <div>
                            <a className="nav-a" href="#contact" onClick={() => setShowMenu(false)}>
                                {t['contact']}
                            </a>
                        </div>
                        <Select options={options} defaultValue={options[0]} onChange={(option) => setLang(option.value)} unstyled isSearchable={false} styles={{
                            container: (provided, state) => ({ display: 'flex' }),
                            menu: (provided, state) => ({
                                ...provided,
                                backgroundColor: '#212529',
                                cursor: 'pointer',
                                color: "#000",
                                width: '140px',
                                border: '2px  solid rgba(218, 162, 27, 0.3);'
                            }),
                            control: (provided, state) => ({
                                ...provided,
                                padding: '12px',
                                cursor: 'pointer',
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                width: '100%',
                                padding: '8px 24px',
                                color: state.isSelected ? "#fff" : "#fff",
                                cursor: 'pointer',
                                backgroundColor: "#212529",
                                '&:hover': {
                                    backgroundColor: "rgba(218, 162, 27)"
                                }
                            }),
                        }} />
                    </div>
                </Portal>}
            </nav>


            <div className="header-section" key={sequence}>
                <div className="company-content">
                    <h1 className="company-name">SOLIDUS</h1>
                    <div className="company-description">
                        <div className="static-txt">{t['we_can']}</div>
                        <TypeAnimation
                            className="dynamic-txt"
                            speed={60}
                            sequence={sequence}
                            repeat={Infinity}
                        />
                    </div>
                    <button>{t['contact']}</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
