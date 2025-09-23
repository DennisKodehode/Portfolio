import figma from "../assets/techstack/figma.svg";
import css from "../assets/techstack/css.svg";
import github from "../assets/techstack/github.svg";
import html from "../assets/techstack/html.svg";
import js from "../assets/techstack/js.svg";
import react from "../assets/techstack/react.svg";

const techStack = [
  { name: "Figma", img: figma },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "Git", img: github },
  { name: "React", img: react },
];

export const TechStack = () => {
  return (
    <div className="tech-stack-wrapper">
      {techStack.map((tech) => {
        return (
          <div className="tech-wrapper">
            <img src={tech.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};
