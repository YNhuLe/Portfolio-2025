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
    if (windowWidth < 768) return 8.5;
    else if (windowWidth < 1280) return 12.5;
    // else if (windowWidth < 2560) return 9.5;
    return 13;
  }, [windowWidth]);
  const earth = useGLTF("/planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        //   width: "50rem",
        //   // maxWidth: "40rem",
        //   // width: "100%",
        //   height: "calc(100vh - 10rem)",
        //   // maxHeight: "100%",
        //   maxWidth: "100%",
        //   margin: "auto",
        //   justifyContent: "center",
        //   border: "2px solid red",
      }}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
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
