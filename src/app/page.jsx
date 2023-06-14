"use client";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Location from "@/components/Location/Location";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
      <>
        <Header/>
        <About/>
        <Services />
        <Location />
        <Contact />
        <Footer />
      </>
  );
}
