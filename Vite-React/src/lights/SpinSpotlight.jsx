import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const SpinSpotlight = () => {
  const spotRef = useRef();

  let angle = 0;
  useFrame(() => {
    if (spotRef.current) {
      angle += 0.03;
      spotRef.current.position.x = 2.5 * Math.cos(angle);
      spotRef.current.position.z = 2.5 * Math.sin(angle);
    }
  });
  return (
    <spotLight
      ref={spotRef}
      position={[0, 0, 2.5]}
      intensity={50}
      color={0x006769}
    />
  );
};

export default SpinSpotlight;
