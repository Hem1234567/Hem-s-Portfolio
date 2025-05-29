import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Aos from "aos";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Timeline from "./components/Timeline";
import ContributionGraph from "./components/ContributionGraph";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div className="bg-linear-gradient text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack/>
      <Certifications/>
      <Timeline/>
      <Projects />
      <ContributionGraph/>
      <Contact />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default App;
