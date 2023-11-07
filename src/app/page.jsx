"use client";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Location from "@/components/Location/Location";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { createContext, useState } from "react";
import hrTranslations from '../../public/locales/hr/common.json'
import enTranslations from '../../public/locales/en/common.json'

export const LanguageContext = createContext();

export default function Home() {
  const [lang, setLang] = useState('en')
  const contextValue = { lang, setLang, t: lang === 'en' ? enTranslations : hrTranslations }

  return (
    <LanguageContext.Provider value={contextValue}>
      <Header />
      <About />
      <Services />
      <Location />
      <Contact />
      <Footer />
    </LanguageContext.Provider>
  );
}
