import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Industries from "./sections/Industries";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Featured from "./sections/Featured";
import Compare from "./sections/Compare";
import Process from "./sections/Process";
import Philosophy from "./sections/Philosophy";
import Why from "./sections/Why";
import Testimonials from "./sections/Testimonials";
import FinalCTA from "./sections/FinalCTA";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Industries />
      <Services />
      <Portfolio />
      <Featured />
      <Compare />
      <Process />
      <Philosophy />
      <Why />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  );
}
