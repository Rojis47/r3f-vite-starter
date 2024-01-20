import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas
        shadows
        style={{ background: "#C1DBE0" }}
        camera={{ position: [3, 3, 3], fov: 30 }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
