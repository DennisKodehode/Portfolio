import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

const Word = ({ text, cls }) => (
  <span className={`word ${cls}`}>
    {text.split("").map((c, i) => (
      <span key={cls + i} className="char">
        {c}
      </span>
    ))}
  </span>
);

export const SectionTransition = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      // Words fly in from depth like a slot-tumble
      gsap.from(q(".word-designer"), {
        y: -100,
        z: -400,
        rotationZ: -15,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          toggleActions: "restart pause resume reset",
        },
      });

      gsap.from(q(".word-utvikler"), {
        y: -100,
        z: -400,
        rotationZ: 15,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        delay: 0.08,
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          toggleActions: "restart pause resume reset",
        },
      });

      // Elastic underline grows underneath the whole line
      gsap.fromTo(
        q(".headline-underline"),
        { scaleX: 0, transformOrigin: "0 50%" },
        {
          scaleX: 1,
          ease: "elastic.out(1, 0.6)",
          duration: 1.2,
          delay: 0.15,
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            toggleActions: "restart pause resume reset",
          },
        }
      );

      gsap.from(q(".transition-subtext"), {
        y: 16,
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          toggleActions: "restart pause resume reset",
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="section-transition with-perspective">
      <div className="headline-wrap">
        <h1 className="transition-title animated-text">
          <Word text="Designer" cls="word-designer" />
          <span className="word">&nbsp;og&nbsp;</span>
          <Word text="utvikler" cls="word-utvikler" />.
        </h1>
        <span className="headline-underline" />
      </div>

      <h3 className="transition-subtext">
        Jeg bygger grensesnitt med balanse mellom tydelighet og kreativitet.
      </h3>
    </section>
  );
};
