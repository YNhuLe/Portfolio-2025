import "./TechStack3D.scss";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import TechIcon from "../TechIcon/TechIcon";
const logos = [
  { name: "React", url: "/logos/react.png", position: [-2, 1, 1] },
  { name: "Express", url: "/logos/express.png", position: [2, 3, 0] },
  { name: "Node.js", url: "/logos/node.png", position: [-2, -2, 0] },
  { name: "Firebase", url: "/logos/firebase.png", position: [1, -1, 0] },
  { name: "SASS", url: "/logos/sass.png", position: [4, -3, 0] },
  { name: "mySQL", url: "/logos/mysql.png", position: [-0.8, -3, 0] },
  { name: "JS", url: "/logos/js.png", position: [2, -1, 2] },
  { name: "HTML", url: "/logos/html.png", position: [1, -1, 2] },
  { name: "CSS", url: "/logos/css.png", position: [3, -1, 2] },
  { name: "SQL", url: "/logos/sql.png", position: [1, -1, 2] },
  { name: "PostgresSQL", url: "/logos/postgres.png", position: [1, -3, 2] },
];
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
