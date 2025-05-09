import { useLoader, useFrame } from "@react-three/fiber";
import "./TechIcon.scss";
import { TextureLoader } from "three";
import { useRef, useEffect, useState } from "react";

function TechIcon({ logos }) {
  const { url, position } = logos;
  if (!url) {
    console.error("Missing image URL for TechIcon at position", position);
    return null;
  }

  const texture = useLoader(TextureLoader, url);
  const meshRef = useRef();
  const [rotationDirection, setRotationDirection] = useState(null);
  useEffect(() => {
    const randomRotationSpeed = Math.random() * 0.01 + 0.002;
    const randomAxis =
      Math.random() < 0.5 ? "x" : Math.random() < 0.5 ? "y" : "z";
    setRotationDirection({ axis: randomAxis, speed: randomRotationSpeed });
  }, []);

  useFrame(() => {
    if (rotationDirection && meshRef.current) {
      meshRef.current.rotation[rotationDirection.axis] +=
        rotationDirection.speed;
    }
  });
  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[0.55, 0.55, 0.55]} />

      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}

export default TechIcon;
