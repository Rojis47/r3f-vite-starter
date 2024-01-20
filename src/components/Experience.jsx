import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Scene from "./Scene";

export const Experience = () => {
  function Rig() {
    const { camera, mouse } = useThree();
    const vec = new Vector3();

    return useFrame(() => {
      camera.position.lerp(vec.set(mouse.x / 4, mouse.y / 4, 1), 1);
      camera.lookAt(0, 0, 0);
    });
  }

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <Rig />
        <Scene />
      </mesh>
    </>
  );
};
