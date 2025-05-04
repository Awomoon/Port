import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 background-animate">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}