import "./App.css";
import { PreLoader } from "./components/PreLoader/PreLoader.jsx";
import { Hero } from "./components/Hero/Hero.jsx";

function App() {
  return (
    <>
      <PreLoader />
      <Hero />
    </>
  );
}

export default App;
