import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ExperienceStrip from "@/components/ExperienceStrip";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Ticker from "@/components/Ticker";

function Divider() {
  return <div aria-hidden="true" className="section-divider container-x" />;
}

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Ticker />
      <About />
      <Divider />
      <ExperienceStrip />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Certifications />
      <Divider />
      <Contact />
    </main>
  );
}
