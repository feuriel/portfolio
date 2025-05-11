import "./App.css";
import { PreLoader } from "./components/PreLoader/PreLoader.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { About } from "./components/About/About.jsx";

function App() {
  return (
    <>
      <PreLoader />
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
