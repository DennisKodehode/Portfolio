import { AboutMePers } from "./AboutMePers";
import { useState } from "react";
import { TabSwitch } from "./TabSwitch";
import { AboutMeProf } from "./AboutMeProf";

export const SectionAboutMe = () => {
  const [view, setView] = useState("personlig");

  const Active = view === "personlig" ? AboutMePers : AboutMeProf;

  return (
    <section id="about">
      <h2 className="section-title">Om meg</h2>
      <div className="about-wrapper">
        <TabSwitch view={view} setView={setView} />
      </div>
      <Active />
    </section>
  );
};
