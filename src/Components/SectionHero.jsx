import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import heroVideo from "../assets/heroVideo.mp4";

export const SectionHero = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 0.8,
      scrollTo: target,
      ease: "power2.out",
    });
  };

  const root = useRef(null);

  useGSAP(
    () => {
      // helper to select inside this component only
      const q = gsap.utils.selector(root);

      // stagger-in lines
      gsap.from(q(".line"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
        stagger: 0.15,
      });

      // animate the actual section element; no string selector
      gsap.to(root.current, {
        "--angle": "160deg",
        duration: 15,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // hover micro-bounce (scoped + correct forEach)
      const btns = gsap.utils.toArray(".cta", root.current); // <-- pass context
      btns.forEach((btn) => {
        btn.addEventListener("mouseenter", () =>
          gsap.to(btn, { scale: 1.05, duration: 0.18 })
        );
        btn.addEventListener("mouseleave", () =>
          gsap.to(btn, { scale: 1, duration: 0.18 })
        );
      });
    },
    { scope: root }
  ); // <-- valid scope (the ref)

  return (
    <section ref={root} className="section-hero hero">
      <div className="hero-text-button-container">
        <div className="hero-text-container">
          <h1 className="hero-title line">Hei, jeg er Dennis</h1>
          <p className="p1-r line">
            Jeg bygger clean og brukervennlige grensesnitt mens jeg lærer
            håndverket steg for steg.
          </p>
          <div
            id="hero-end-trigger"
            aria-hidden="true"
            style={{ display: "block", height: "1px" }}
          />
        </div>
        <div className="hero-button-wrapper actions">
          <a
            href="#projects"
            className="hero-primary-button cta line"
            onClick={(e) => handleScroll(e, "#projects")}
          >
            Prosjekter
          </a>
          <a
            href="#contact"
            className="hero-secondary-button cta ghost line"
            onClick={(e) => handleScroll(e, "#contact")}
          >
            Kontakt meg
          </a>
        </div>
      </div>
      <video src={heroVideo} className="hero-video" autoPlay muted loop></video>
    </section>
  );
};
