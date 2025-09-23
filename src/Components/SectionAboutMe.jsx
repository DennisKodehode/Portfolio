import { AboutMePers } from "./AboutMePers";
import { TechStack } from "./TechStack";
import { useState } from "react";
import { TabSwitch } from "./TabSwitch";
import { AboutMeProf } from "./AboutMeProf";

export const SectionAboutMe = () => {
  const [view, setView] = useState("personlig");

  const active = view === "personlig" ? AboutMePers : AboutMeProf;

  return (
    <section id="about">
      <TabSwitch view={view} setView={setView} />
      <active />
    </section>
  );
};
