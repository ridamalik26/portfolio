import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
