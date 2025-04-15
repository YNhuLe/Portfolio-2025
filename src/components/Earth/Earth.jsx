import React, { Suspense, useMemo, useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";

const Earth = () => {
  // const { viewport } = useThree();
  // const [vpWidth, setVpWidth] = useState(viewport.width);
  // useFrame(() => {
  //   // setVpWidth(viewport.width);
  //   if (vpWidth !== viewport.width) {
  //     setVpWidth(viewport.width);
  //   }
  // });
  // const scale = useMemo(() => {
  //   if (vpWidth < 6) return 2.5;
  //   else if (vpWidth < 10) return 7.5;
  //   return 8.5;
  // }, [vpWidth]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = useMemo(() => {
    if (windowWidth < 768) return 5.5;
    else if (windowWidth < 1024) return 6.5;
    return 9;
  }, [windowWidth]);
  const earth = useGLTF("/planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={scale}
      position-y={-0.5}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "60vh",
        maxWidth: "30rem",
        justifyContent: "center",
      }}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 25],
      }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
