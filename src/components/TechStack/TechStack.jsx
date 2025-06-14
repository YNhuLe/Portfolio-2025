import "./TechStack.scss";
import react from "../../../public/logos/react.png";

const frontendLogos = [
  { name: "React", url: "/logos/react.png" },
  { name: "JS", url: "/logos/js.png" },
  { name: "HTML", url: "/logos/html.png" },
  { name: "CSS", url: "/logos/css.png" },
  { name: "SASS", url: "/logos/sass.png" },
  { name: "TAILWIND", url: "/logos/tailwind.png" },
  { name: "BOOSTRAP", url: "/logos/bootstrap.png" },
  { name: "TYPESCRIPT", url: "/logos/typescript.png" },
];

const backendLogos = [
  { name: "Node.js", url: "/logos/node.png" },
  { name: "Express", url: "/logos/express.png" },
  { name: "Firebase", url: "/logos/firebase.png" },
  { name: "Python", url: "/logos/python.png" },
  { name: "JAVA", url: "/logos/java.png" },
];
const databaseLogos = [
  { name: "mySQL", url: "/logos/mysql.png" },
  { name: "SQL", url: "/logos/sql.png" },
  { name: "PostgresSQL", url: "/logos/postgres.png" },
];
const devOpsLogos = [
  { name: "GIT", url: "/logos/git.png" },
  { name: "JIRA", url: "/logos/jira.png" },
  { name: "JENKIN", url: "/logos/jenkin.png" },
  { name: "DOCKER", url: "/logos/docker.png" },
  { name: "AWS", url: "/logos/aws.png" },
];
const designLogos = [
  { name: "Figma", url: "/logos/figma.png" },
  { name: "CANVA", url: "/logos/canva.png" },
];

function TechStack() {
  return (
    <>
      <div class="hive">
        <div class="hex">
          <img src={react} />
          <span>React</span>
        </div>
        <div class="hex">
          <img src={react} />
          <span>Node.js</span>
        </div>
        <div class="hex">
          <img src={react} />
          <span>MySQL</span>
        </div>
      </div>
    </>
  );
}

export default TechStack;
