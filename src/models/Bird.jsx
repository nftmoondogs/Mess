import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  const { viewport } = useThree();
  const [isDragging, setDragging] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const lastMouseX = useRef(0);

  // Mouse event handlers
  const handleMouseDown = (event) => {
    setDragging(true);
    lastMouseX.current = event.clientX;
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - lastMouseX.current;
      setRotation((prevRotation) => [
        prevRotation[0],
        prevRotation[1] - deltaX * 0.01, // adjust rotation sensitivity here
        prevRotation[2]
      ]);
      lastMouseX.current = event.clientX;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    actions["token2"].play();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [actions]);

  useFrame(() => {
    if (birdRef.current) {
      birdRef.current.rotation.y = rotation[1];
    }
  });

  return (
    <mesh
      ref={birdRef}
      position={[-2, 0, 0]}
      scale={[10, 10, 10]}
      onPointerDown={handleMouseDown}
      rotation={rotation}
    >
      <primitive object={scene} />
    </mesh>
  );
}
