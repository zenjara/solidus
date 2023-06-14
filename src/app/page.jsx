"use client";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Services from "@/components/services/services";
import Location from "@/components/location/location";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

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
