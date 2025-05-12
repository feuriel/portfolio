import "./App.css";
import { PreLoader } from "./components/PreLoader/PreLoader.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { About } from "./components/About/About.jsx";
import { SectionDivider } from "./components/Divider/SectionDivider.jsx";
import { Leadership } from "./components/Leadership/Leadership.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <PreLoader />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Leadership />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </>
  );
}

export default App;
