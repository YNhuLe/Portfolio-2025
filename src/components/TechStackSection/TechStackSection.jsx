import "./TechStackSection.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import TechStack3D from "../TechStack3D/TechStack3D";
function TechStackSection() {
  return (
    <section className="tech">
      <h2 className="tech__title">My Tech Stack </h2>

      <div className="tech__section" id="tech">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

          <Float floatIntensity={2} speed={2}>
            <TechStack3D />
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}

export default TechStackSection;
