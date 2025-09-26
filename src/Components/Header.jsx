// src/Components/Header.jsx
import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export const Header = () => {
  const headerRef = useRef(null);
  const ioRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Wait for the trigger to be mounted (handles mount-order race)
    const init = () => {
      const trigger = document.getElementById("hero-end-trigger");
      if (!trigger) {
        rafRef.current = requestAnimationFrame(init);
        return;
      }

      // DEBUG: see state flips in the Elements panel
      header.dataset.state = "expanded";

      ioRef.current = new IntersectionObserver(
        ([entry]) => {
          const compact = !entry.isIntersecting;
          header.classList.toggle("is-compact", compact);
          header.dataset.state = compact ? "compact" : "expanded";
          // console.log("Header:", compact ? "compact" : "expanded");
        },
        {
          // Shrink a little before the trigger fully leaves / tune as needed
          rootMargin: "-64px 0px 0px 0px",
          threshold: 0, // trigger as soon as it crosses
        }
      );

      ioRef.current.observe(trigger);
    };

    init();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (ioRef.current) ioRef.current.disconnect();
    };
  }, []);

  const handleScroll = (e, target) => {
    e.preventDefault();
    gsap.to(window, { duration: 0.8, scrollTo: target, ease: "power2.out" });
  };

  return (
    <header ref={headerRef} className="site-header">
      <nav className="nav-shell">
        <ul className="nav-pill">
          <li>
            <a
              className="nav-link"
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
            >
              Om meg
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
            >
              Prosjekter
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
            >
              Kontakt meg
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
