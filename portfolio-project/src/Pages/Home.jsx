import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
