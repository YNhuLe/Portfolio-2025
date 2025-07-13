import "./TechStackSection.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import TechStack3D from "../TechStack3D/TechStack3D";
import TechStack from "../TechStack/TechStack";
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

function TechStackSection() {
  return (
    // <section className="tech">
    //   <h2 className="tech__title">My Tech Stack </h2>

    //   <div className="tech__section" id="tech">
    //     <Canvas
    //       camera={{ position: [0, 0, 6], fov: 50 }}
    //       shadows
    //       className="canvas">
    //       <ambientLight intensity={1.5} />
    //       <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

    //       <Float floatIntensity={5} speed={2}>
    //         <TechStack3D />
    //       </Float>
    //       <OrbitControls enableZoom={false} />
    //     </Canvas>
    //   </div>
    // </section>

    <section className="techstack" id="techstack">
      <h2 className="contact__text">Tech Stack</h2>

      <div className="frontend">
        <h1 className="stack__title">Front-End</h1>
        <TechStack logos={frontendLogos} />
      </div>

      <div className="backend">
        <h1 className="stack__title">Back-End</h1>
        <TechStack logos={backendLogos} />
      </div>

      <div className="database">
        <h1 className="stack__title">Database</h1>
        <TechStack logos={databaseLogos} />
      </div>

      <div className="devops">
        <h1 className="stack__title">DevOps</h1>
        <TechStack logos={devOpsLogos} />
      </div>

      <div className="design">
        <h1 className="stack__title">Design tech</h1>
        <TechStack logos={designLogos} />
      </div>
    </section>
  );
}

export default TechStackSection;
