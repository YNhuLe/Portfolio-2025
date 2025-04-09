import { useLoader, useFrame } from "@react-three/fiber";
import "./TechIcon.scss";
import { TextureLoader } from "three";
import { useRef, useEffect, useState } from "react";

function TechIcon({ logos }) {
  const { url, position } = logos;
  console.log("IMages: ", logos);
  if (!url) {
    console.error("Missing image URL for TechIcon at position", position);
    return null;
  }

  const texture = useLoader(TextureLoader, url);
  const meshRef = useRef();
  const [rotationDirection, setRotationDirection] = useState(null);
  useEffect(() => {
    const randomRotationSpeed = Math.random() * 0.01 + 0.002; // Random rotation speed
    const randomAxis =
      Math.random() < 0.5 ? "x" : Math.random() < 0.5 ? "y" : "z"; // Random axis (x, y, or z)
    setRotationDirection({ axis: randomAxis, speed: randomRotationSpeed });
  }, []);

  // Rotate the icon in the random direction
  useFrame(() => {
    if (rotationDirection && meshRef.current) {
      meshRef.current.rotation[rotationDirection.axis] +=
        rotationDirection.speed;
    }
  });
  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[0.5, 0.5, 0.5]} />

      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}

export default TechIcon;
