import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, Sky, Sparkles } from "@react-three/drei";
import RotatingCube from "./meshes/RotatingCube";
import SpinSpotlight from "./lights/SpinSpotlight";

const App = () => {
  return (
    // To control the size of the canvas, manipulate its parent.
    <div id="canvas-container" className="w-screen h-screen">
      {
        // Canvas - the object where to define the R3F Scene.
        //        - Put all the 3JS Elements inside the canvas. like controls, camera, etc.
        // Changing the style of the class has to be inline. Tailwind wont work.
        // <Canvas> sets up a SCENE and a CAMERA.
      }
      <Canvas
        className="w-screen h-screen bg-white"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {
          // Here is the R3F's declarative feature to easily put elements in the render.
        }
        <OrbitControls enableZoom enablePan enableRotate />
        {
          // IMPORTANT: All Three.js objects will be treated as native JSX elements
          //            - meaning <directionalLight /> = Three.DirectionalLight(),
        }
        <directionalLight
          position={[2, 2, 0.5]}
          intensity={10}
          color={0x9cdba6}
          castShadow
        />
        <ambientLight color={0x9cdba6} intensity={5} />
        <SpinSpotlight />

        <Sparkles
          count={30}
          scale={2}
          size={6}
          speed={2}
          noise={0.2}
          color={"#6ee4e4"}
        />
        {
          // Attach a backgrond color to the Canvas
        }
        <color attach="background" args={["#F0F0F0"]} />

        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default App;
