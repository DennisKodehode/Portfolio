// src/Components/Header.jsx
import { gsap } from "../lib/gsap";

export const Header = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 0.8,
      scrollTo: target,
      ease: "power2.out",
    });
  };

  return (
    <header>
      <nav>
        <ul>
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
