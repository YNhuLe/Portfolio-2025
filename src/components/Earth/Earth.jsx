import React, { Suspense, useMemo, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";


function clamp(min, preferred, max) {
  return Math.max(min, Math.min(preferred, max));
}
const Earth = ({ scale }) => {
  const earth = useGLTF("/planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={scale}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = useMemo(() => {
    return clamp(3, windowWidth / 300, 5.5);
  }, [windowWidth]);
  const cameraPosition = useMemo(() => {
    if (windowWidth < 768) return [-4, 3, 6.5];
    if (windowWidth < 1280) return [-5, 3.5, 8];
    if (windowWidth < 1536) return [-6, 4, 12.5];
    if (windowWidth < 2560) return [-8.5, 7.5, 13];
    return [-10, 8, 12];
  }, [windowWidth]);
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
      }}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: cameraPosition,
      }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth scale={scale} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
