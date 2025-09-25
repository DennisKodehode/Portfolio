// src/Components/AboutMeProf.jsx
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { TechStack } from "./TechStack";
import profVideo from "../assets/proffesjonelVideo.mp4";

export const AboutMeProf = () => {
  useGSAP(() => {
    gsap.from(".tech-wrapper", {
      y: 8,
      delay: 0.5,
      opacity: 0,
      stagger: 0.06,
      duration: 0.35,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div className="about-me-container">
        <div className="text-container">
          <p>
            Drevet, empatisk og nysgjerrig på verden. Jeg setter høye
            standarder, bryr meg om andres perspektiver og går i dybden på det
            jeg brenner for. Den kombinasjonen av ambisjon og empati preger både
            hvem jeg er og hvordan jeg jobber.
          </p>
          <TechStack
            stack={["Figma", "HTML", "CSS", "JavaScript", "React", "Git"]}
          />
        </div>
        <video
          src={profVideo}
          className="tab-video"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
};
