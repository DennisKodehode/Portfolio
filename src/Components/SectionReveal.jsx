import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function SectionReveal({ className = "", id = "", children }) {
  const root = useRef(null);

  useGSAP(
    () => {
      // Your existing section reveal (unchanged)
      gsap.from(root.current, {
        opacity: 0,
        y: 40,
        duration: 1.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top center",
          toggleActions: "restart pause resume reset",
        },
      });

      // NEW: accent underline for the first .section-title inside this section
      const q = gsap.utils.selector(root);
      const titleEl = q(".section-title")[0];

      if (titleEl) {
        // Use a no-op tween to create a ScrollTrigger without importing it explicitly
        gsap.to(
          {},
          {
            scrollTrigger: {
              trigger: root.current,
              start: "top 75%",
              onEnter: () => titleEl.classList.add("accent-underline-in"),
              onLeaveBack: () =>
                titleEl.classList.remove("accent-underline-in"),
            },
          }
        );
      }
    },
    { scope: root }
  );

  return (
    <section id={id} ref={root} className={className}>
      {children}
    </section>
  );
}
