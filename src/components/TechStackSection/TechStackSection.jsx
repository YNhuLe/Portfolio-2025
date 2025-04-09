import "./TechStackSection.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import TechStack3D from "../TechStack3D/TechStack3D";
function TechStackSection() {
  return (
    <div className="tech">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <Float floatIntensity={2} speed={2}>
          <TechStack3D />
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default TechStackSection;
