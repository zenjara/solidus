import styles from "./header.css";
import Image from "next/image";
import image1 from "../../../public/construction1-unsplash.jpg";
import image2 from "../../../public/construction2-unsplash.jpg";
import {TypeAnimation} from "react-type-animation";

const Header = () => {
    return (
        <header>
            <div className='overlay'></div>
            <nav className="nav-bar">
                <span>SOLIDUS d.o.o.</span>
                <ul>
                    <li>
                        <a className="nav-a" href="#about">
                            O nama
                        </a>
                    </li>
                    <li>
                        <a className="nav-a" href="#contact">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header-section">
                <div className="company-content">
                    <h1 className="company-name">SOLIDUS</h1>
                    <div className="company-description">
                        <div className="static-txt">Možemo</div>
                        <TypeAnimation
                            className="dynamic-txt"
                            speed={60}
                            sequence={["graditi", 2000, "renovirati", 2000, "adaptirati", 2000]}
                            repeat={Infinity}
                        />
                    </div>
                    <button>Kontakt</button>
                </div>
                {/*<div className="images-show">*/}
                {/*    <Image className="image image-1" src={image1} alt=''/>*/}
                {/*    <Image className="image image-2" src={image2} alt=''/>*/}
                {/*</div>*/}
            </div>
        </header>
    );
};

export default Header;
