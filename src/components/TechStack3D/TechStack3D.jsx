import "./TechStack3D.scss";
import TechIcon from "../TechIcon/TechIcon";

const logos = [
  { name: "React", url: "/logos/react.png", position: randomPosition() },

  { name: "Express", url: "/logos/express.png", position: randomPosition() },
  { name: "Node.js", url: "/logos/node.png", position: randomPosition() },
  { name: "Firebase", url: "/logos/firebase.png", position: randomPosition() },
  { name: "SASS", url: "/logos/sass.png", position: randomPosition() },

  { name: "mySQL", url: "/logos/mysql.png", position: randomPosition() },
  { name: "JS", url: "/logos/js.png", position: randomPosition() },
  { name: "HTML", url: "/logos/html.png", position: randomPosition() },
  { name: "CSS", url: "/logos/css.png", position: randomPosition() },

  { name: "SQL", url: "/logos/sql.png", position: randomPosition() },
  {
    name: "PostgresSQL",
    url: "/logos/postgres.png",
    position: randomPosition(),
  },
  { name: "Figma", url: "/logos/figma.png", position: randomPosition() },
  { name: "Python", url: "/logos/python.png", position: randomPosition() },

  { name: "JIRA", url: "/logos/jira.png", position: randomPosition() },
  { name: "JENKIN", url: "/logos/jenkin.png", position: randomPosition() },
  { name: "DOCKER", url: "/logos/docker.png", position: randomPosition() },

  { name: "BOOSTRAP", url: "/logos/bootstrap.png", position: randomPosition() },
  { name: "GIT", url: "/logos/git.png", position: randomPosition() },
  { name: "JAVA", url: "/logos/java.png", position: randomPosition() },
  { name: "CANVA", url: "/logos/canva.png", position: randomPosition() },
];

function randomPosition() {
  const randomX = (Math.random() - 0.5) * 4;
  const randomY = (Math.random() - 0.5) * 4;
  const randomZ = (Math.random() - 0.5) * 4;

  return [randomX, randomY, randomZ];
}

function TechStack3D() {
  return (
    <>
      {logos.map((logo, i) => (
        <TechIcon key={i} {...logo} logos={logo} />
      ))}
    </>
  );
}

export default TechStack3D;
