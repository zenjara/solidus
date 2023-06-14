import styles from "./about.css";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import officeImage from "../../../public/about.jpg";


const About = () => {
    const {isVisible, ref} = useIntersectionObserver();

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
                            O <span>nama</span>
                        </div>
                        <p>Solidus d.o.o. je društvo sa sjedištem u Solinu čija je primarna djelatnost graditeljstvo s
                            naglaskom na visokogradnju ( izgradnja poslovnih, stambenih, proizvodnih, sakralnih, javnih
                            i
                            sakralnih objekata, te objekata komunalne infrastrukture; rekonstrukcija i adaptacija svih
                            vrsta
                            građevina, izrada izolacija, raznih preuređenja i sl… ).</p>
                        <br/>
                        <p>Uspješno se prilagođavamo potrebama tržišta i usvajamo nove standarde u poslovanju i
                            izvođenju
                            radova. Naša trajna opredjeljenost je briga za kvalitetu usluga i poštivanje ugovorenih
                            obaveza.
                            S obzirom na dugogodišnje iskustvo u obrtu i prisutnosti na tržištu, naše društvo je postalo
                            prepoznatljivo kao kvalitetan izvođač i pouzdan suradnik u svim poslovnim projektima. Od
                            2003.
                            godine djelujemo kao Građevinsko trgovački obrt Delač na području Karlovca, Karlovačke
                            županije
                            te diljem Hrvatske, poštivajući želje naših partnera, suradnika te klijentata na raznim
                            projektima te od 2007. zbog povećanog obima posla počinjemo djelovati i kao društvo</p>
                        <br/>
                        <p>U radovima koristimo najkvalitetnije materijale te najučinkovitije tehnologije, opremu i
                            mehanizaciju za izvođenje raznih objekata . S našim timom vam nudimo usluge na profesionalan
                            i
                            odgovoran način, te stalno ulažemo na njihov razvoj i znanje.</p>
                    </div>
                    <Image className="building-svg" src={officeImage} alt='ured'/>
                </div>
            </div>
        </section>
    );
};

export default About;
