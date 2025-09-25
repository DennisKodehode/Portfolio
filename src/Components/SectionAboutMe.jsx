// src/Components/SectionAboutMe.jsx
import { AboutMePers } from "./AboutMePers";
import { useState, useRef } from "react";
import { TabSwitch } from "./TabSwitch";
import { AboutMeProf } from "./AboutMeProf";
import SectionReveal from "./SectionReveal";
import { gsap, useGSAP } from "../lib/gsap";

export const SectionAboutMe = () => {
  const [view, setView] = useState("personlig");
  const root = useRef(null);

  const Active = view === "personlig" ? AboutMePers : AboutMeProf;

  // When view changes, gently fade in the new pane
  useGSAP(
    () => {
      const pane = root.current?.querySelector(".about-pane");
      if (!pane) return;
      gsap.fromTo(
        pane.children,
        { opacity: 0, y: 400 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    },
    { scope: root, dependencies: [view] }
  );

  return (
    <SectionReveal className="about" id="about">
      <div className="about" ref={root}>
        <h2 className="section-title">Om meg</h2>
        <div className="about-wrapper">
          <TabSwitch view={view} setView={setView} />
        </div>
        <div className="about-pane about-me-container">
          <Active key={view} />
        </div>
      </div>
    </SectionReveal>
  );
};
