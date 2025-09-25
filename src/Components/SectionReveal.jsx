import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function SectionReveal({ className = "", id = "", children }) {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(root.current, {
        opacity: 0,
        y: 40,
        duration: 1.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current, // <-- element, not a string
          start: "top 80%",
        },
      });
    },
    { scope: root }
  );

  return (
    <section id={id} ref={root} className={className}>
      {children}
    </section>
  );
}
