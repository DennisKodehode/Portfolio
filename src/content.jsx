import { SectionHero } from "./Components/SectionHero";
import { SectionAboutMe } from "./Components/SectionAboutMe";
import { SectionTransition } from "./Components/SectionTransition";
import { SectionProjects } from "./Components/SectionProjects";

export const Content = () => {
  return (
    <main>
      <SectionHero />
      <SectionAboutMe />
      <SectionTransition />
      <SectionProjects />
    </main>
  );
};
