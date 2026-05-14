import "./TechStackSection.scss";
import TechStack from "../TechStack/TechStack";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFigma,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiSequelize,
  SiGit,
  SiGithub,
  SiNpm,
  SiVercel,
} from "react-icons/si";
import { div } from "motion/react-client";
const frontendLogos = [
  { name: "REACT", url: "/logos/react.png" },
  { name: "JS", url: "/logos/js.png" },
  { name: "HTML", url: "/logos/html.png" },
  { name: "CSS", url: "/logos/css.png" },
  { name: "SASS", url: "/logos/sass.png" },
  { name: "TAILWIND", url: "/logos/tailwind.png" },
  { name: "BOOSTRAP", url: "/logos/bootstrap.png" },
  { name: "TYPESCRIPT", url: "/logos/typescript.png" },
];

const backendLogos = [
  { name: "NODE.JS", url: "/logos/node.png" },
  { name: "EXPRESS", url: "/logos/express.png" },
  { name: "FIREBASE", url: "/logos/firebase.png" },
  { name: "PYTHON", url: "/logos/python.png" },
];
const databaseLogos = [
  { name: "MYSQL", url: "/logos/mysql.png" },
  { name: "SQL", url: "/logos/sql.png" },
  { name: "PostgresSQL", url: "/logos/postgres.png" },
  { name: "FIREBASE", url: "/logos/firebase.png" },
];
const devOpsLogos = [
  { name: "GIT", url: "/logos/git.png" },
  { name: "JIRA", url: "/logos/jira.png" },
  { name: "JENKIN", url: "/logos/jenkin.png" },
  { name: "DOCKER", url: "/logos/docker.png" },
  { name: "AWS", url: "/logos/aws.png" },
  { name: "POSTMAN", url: "/logos/postman1.png" },
];
const designLogos = [
  { name: "FIGMA", url: "/logos/figma.png" },
  { name: "CANVA", url: "/logos/canva.png" },
];
const ROW1 = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss, name: "CSS3", color: "#1572B6" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiVite, name: "Vite", color: "#646CFF" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
];
const ROW2 = [
  { Icon: SiExpress, name: "Express", color: "#ffffff" },
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiSequelize, name: "Sequelize", color: "#52B0E7" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", color: "#ffffff" },
  { Icon: SiNpm, name: "npm", color: "#CB3837" },
  { Icon: SiVercel, name: "Vercel", color: "#ffffff" },
];
function TechStackSection() {
  const r1 = [...ROW1, ...ROW1];
  const r2 = [...ROW2, ...ROW2];

  return (
    <section className="stack" id="techstack">
      <div className="stack__breakline" />
      <div className="stack__title-container">
        <h2 className="stack__title-container-headline"> Stack</h2>
        <div className="stack__title-container-breakline2"></div>
        <span className="stack__title-container-stack">
          {ROW1.length + ROW2.length} Technologies
        </span>
      </div>

      <div className="stack__mask">
        <div className="stack__row-left">
          {r1.map((tech, i) => (
            <TechIcon key={i} tech={tech} />
          ))}
        </div>
      </div>
      <div className="stack__mask">
        <div className="stack__row-right">
          {r2.map((tech, i) => (
            <TechIcon key={i} tech={tech} />
          ))}
        </div>
      </div>
      <div className="stack__breakline" />
    </section>
  );
}

function TechIcon({ tech: { Icon, name, color } }) {
  return (
    <div className="stack__icon group">
      <Icon
        className="stack__icon-symbol"
        color={color}
        style={{ "--glow": color }}
      />
      <span className="stack__icon-name">{name}</span>

      <div className="stack__tooltip">{name}</div>
    </div>
  );
}

export default TechStackSection;
