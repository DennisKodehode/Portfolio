// src/Components/SectionProjects.jsx
import ProjectCraftsvilla from "../assets/ProjectCraftsvilla.png";
import ProjectJupiter from "../assets/ProjectJupiter.png";
import ProjectPokedex from "../assets/ProjectPokedex.png";
import { TechStack } from "./TechStack";
import SectionReveal from "./SectionReveal";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

const projects = [
  {
    img: ProjectPokedex,
    title: "Pokédex Project",
    techstack: ["Figma", "HTML", "CSS", "JavaScript"],
    description:
      "En moderne tolkning av den klassiske Pokédex, bygget fra wireframes til et fullt designsystem med egne komponenter, fargetokens og typografi. Prosjektet utfordret meg til å balansere lekne, spillinspirerte visuelle elementer med ren og funksjonell UI/UX – og forvandle nostalgisk inspirasjon til et interaktivt, moderne grensesnitt.",
    githubUrl: "https://github.com/DennisKodehode/Pokedex-Project-2",
    websiteUrl: "https://denniskodehode.github.io/Pokedex-Project-2",
  },
  {
    img: ProjectCraftsvilla,
    title: "Craftsvilla",
    techstack: ["Figma", "HTML", "CSS"],
    description:
      "Dette prosjektet var et stort steg i å lære hvordan man omsetter design til kode. En av de største utfordringene var å få forhåndsvisninger og galleriet på forsiden til å føles engasjerende uten å gjøre det for komplisert, så jeg eksperimenterte med layout, spacing og hover-effekter til det satt. Til slutt fikk jeg liv i siden med en ryddig struktur og små detaljer som gjør den helhetlig og polert.",
    githubUrl: "https://github.com/DennisKodehode/CRAFTSVILLA",
    websiteUrl: "https://denniskodehode.github.io/CRAFTSVILLA",
  },
  {
    img: ProjectJupiter,
    title: "Jupiter Exploration Website",
    techstack: ["Figma", "HTML", "CSS"],
    description:
      "Dette var mitt aller første prosjekt, laget i gruppe der vi forsket på og designet en læringsside om Jupiter og månene. Prosjektet ga meg erfaring med å strukturere innhold, presentere fakta på en tydelig måte og eksperimentere med layout og designvalg. Selv om det var et nybegynnerprosjekt, markerte det starten på reisen min med å gjøre ideer om til noe visuelt og interaktivt.",
    githubUrl: "https://github.com/DennisKodehode/Planet-Project-Redesign",
    websiteUrl: "https://denniskodehode.github.io/Planet-Project-Redesign",
  },
];

export const SectionProjects = () => {
  // Root ref for gsap-scoped queries + ScrollTrigger trigger
  const root = useRef(null);

  // Scroll-in stagger for project cards + per-card TechStack icon stagger
  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      // Cards enter
      gsap.from(q(".project-card"), {
        opacity: 0,
        y: 40,
        rotate: 1.5,
        duration: 2, // you set 2s — keep/tweak as you like
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 50%",
          // toggleActions: "play none none none", // uncomment to animate once
        },
      });

      // TechStack icons per card (mirrors AboutMeProf)
      q(".project-card").forEach((card) => {
        const techItems = card.querySelectorAll(".tech-wrapper");
        if (!techItems.length) return;

        gsap.from(techItems, {
          y: 8,
          opacity: 0,
          stagger: 0.06,
          duration: 2,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            // toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: root }
  );

  // Lightweight per-card parallax (React-safe: scoped to card subtree)
  const onCardMove = (e) => {
    const img = e.currentTarget.querySelector(".project-img");
    if (!img) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(img, {
      x: nx * 18,
      y: ny * 18,
      duration: 0.18,
      overwrite: "auto",
    });
  };

  const onCardLeave = (e) => {
    const img = e.currentTarget.querySelector(".project-img");
    if (!img) return;
    gsap.to(img, { x: 0, y: 0, duration: 0.3, overwrite: "auto" });
  };

  return (
    <SectionReveal id="projects" className="projects">
      <h2 className="section-title">Prosjekter</h2>

      {/* Attach ref here so animations are scoped and trigger uses this container */}
      <div ref={root} className="projects-container">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="project project-card"
              onMouseMove={onCardMove}
              onMouseLeave={onCardLeave}
            >
              <div className="project-image-wrapper">
                <img
                  className="project-img"
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <TechStack stack={project.techstack} size="small" />
                <p>{project.description}</p>

                <div className="projects-button-wrapper">
                  <a target="_blank" rel="noreferrer" href={project.websiteUrl}>
                    <button className="project-button demo-button">
                      Live Demo
                    </button>
                  </a>
                  <a target="_blank" rel="noreferrer" href={project.githubUrl}>
                    <button className="project-button github-button">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionReveal>
  );
};
