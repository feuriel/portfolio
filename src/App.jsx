import "./App.css";
import { PreLoader } from "./components/PreLoader/PreLoader.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { About } from "./components/About/About.jsx";
import { SectionDivider } from "./components/Section/SectionDivider.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ModalProvider } from "./utility/ModalContext.jsx";
import { RandomProjectsLockProvider } from "./utility/RandomProjectsLockContext.jsx";
import { Popup } from "./utility/Popup.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";

function App() {
  const currentYear = new Date().getFullYear();
  console.log(`made with ❤️ by Gabriel S.
  https://gabriel-somogyi.vercel.app/
  © ${currentYear} Gabriel Somogyi`);
  return (
    <RandomProjectsLockProvider>
      <ModalProvider>
        <Cursor />
        <Navbar />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
        <Footer />
        <PreLoader />
        <Popup />
      </ModalProvider>
    </RandomProjectsLockProvider>
  );
}

export default App;
