import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const RotatingCube = () => {
  // Add a ref to the mesh to interact with the element.
  const meshRef = useRef();

  // 'useFrame' - is from R3F.
  //            - this hook executes a callback before rendering and Loops.
  //            - kinda like the 'animate()' function for vanilla 3JS.
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.z -= 0.005;
    }
  });

  return (
    // In The `<mesh>`, put inside the geometry and material that composes a mesh.
    <mesh ref={meshRef} castShadow>
      {
        // The 'args' (always takes array) represent the parameters you would
        // put in the constructor. For Geometries tho.
        // THREE.CylinderGeometry(1,1,1) is SAME as <cylinderGeometry args={[1, 1, 1]} />.
      }
      <torusKnotGeometry args={[1, 0.3, 64, 8]} />
      <meshPhongMaterial color="#468585" />
    </mesh>
  );
};

export default RotatingCube;
