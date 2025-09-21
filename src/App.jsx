import "./App.css";
import { Header } from "./Components/Header";
import { SectionHero } from "./Components/SectionHero";
import { SectionAboutMe } from "./Components/SectionAboutMe";
import { SectionTransition } from "./Components/SectionTransition";
import { SectionProjects } from "./Components/SectionProjects";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionAboutMe />
      <SectionTransition />
      <SectionProjects />
      <Footer />
    </>
  );
}

export default App;
