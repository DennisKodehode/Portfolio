import ProjectCraftsvilla from "../assets/ProjectCraftsvilla.png";
import ProjectJupiter from "../assets/ProjectJupiter.png";
import ProjectPokedex from "../assets/ProjectPokedex.png";
import { TechStack } from "./TechStack";

const projects = [
  {
    img: ProjectPokedex,
    title: "Pokédex Project",
    techstack: ["Figma", "HTML", "CSS", "JavaScript"],
    description:
      "En moderne tolkning av den klassiske Pokédex, bygget fra wireframes til et fullt designsystem med egne komponenter, fargetokens og typografi. Prosjektet utfordret meg til å balansere lekne, spillinspirerte visuelle elementer med ren og funksjonell UI/UX – og forvandle nostalgisk inspirasjon til et interaktivt, moderne grensesnitt.",
    githubUrl: "https://github.com/DennisKodehode/Pokedex-Project-2", // replace with real
    websiteUrl: "https://denniskodehode.github.io/Pokedex-Project-2", // replace with real
  },
  {
    img: ProjectCraftsvilla,
    title: "Craftsvilla",
    techstack: ["Figma", "HTML", "CSS"],
    description:
      "Dette prosjektet var et stort steg i å lære hvordan man omsetter design til kode. En av de største utfordringene var å få forhåndsvisninger og galleriet på forsiden til å føles engasjerende uten å gjøre det for komplisert, så jeg eksperimenterte med layout, spacing og hover-effekter til det satt. Til slutt fikk jeg liv i siden med en ryddig struktur og små detaljer som gjør den helhetlig og polert.",
    githubUrl: "https://github.com/DennisKodehode/CRAFTSVILLA", // replace with real
    websiteUrl: "https://denniskodehode.github.io/CRAFTSVILLA", // replace with real
  },
  {
    img: ProjectJupiter,
    title: "Jupiter Exploration Website",
    techstack: ["Figma", "HTML", "CSS"],
    description:
      "Dette var mitt aller første prosjekt, laget i gruppe der vi forsket på og designet en læringsside om Jupiter og månene. Prosjektet ga meg erfaring med å strukturere innhold, presentere fakta på en tydelig måte og eksperimentere med layout og designvalg. Selv om det var et nybegynnerprosjekt, markerte det starten på reisen min med å gjøre ideer om til noe visuelt og interaktivt.",
    githubUrl: "https://github.com/DennisKodehode/Planet-Project-Redesign", // replace with real
    websiteUrl: "https://denniskodehode.github.io/Planet-Project-Redesign", // replace with real
  },
];

export const SectionProjects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Prosjekter</h2>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project">
              <img src={project.img} alt="" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <TechStack stack={project.techstack} size="small" />
                <p>{project.description}</p>
                <div className="projects-button-wrapper">
                  <a target="_blank" href={project.websiteUrl}>
                    <button className="project-button demo-button">
                      Live Demo
                    </button>
                  </a>
                  <a target="_blank" href={project.githubUrl}>
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
    </section>
  );
};
