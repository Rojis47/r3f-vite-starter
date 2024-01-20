import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/Jmwq7NjJaepPw3A3/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#f1e6e5"]} />
      <group {...props} dispose={null}>
        <scene name="Scene">
          <directionalLight
            name="Directional Light 2"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            position={[35.31, 237.47, 988.1]}
            rotation={[-Math.PI, 1.53, -1.66]}
            scale={1}
          />
          <group name="sunny" position={[278.75, -13.88, 115.97]}>
            <mesh
              name="Text"
              geometry={nodes.Text.geometry}
              material={materials["Text Material"]}
              castShadow
              receiveShadow
              position={[-0.24, -95.56, -22.24]}
            />
            <group
              name="sunny c"
              position={[16.05, -242.8, 54.92]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1.61}
            >
              <mesh
                name="cloud_sun_low_sun_0"
                geometry={nodes.cloud_sun_low_sun_0.geometry}
                material={nodes.cloud_sun_low_sun_0.material}
                castShadow
                receiveShadow
              />
            </group>
            <mesh
              name="sunny f"
              geometry={nodes["sunny f"].geometry}
              material={materials["sunny f Material"]}
              castShadow
              receiveShadow
              position={[0.11, 17.15, -42.25]}
              rotation={[Math.PI, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="sunny b"
              geometry={nodes["sunny b"].geometry}
              material={materials["sunny b Material"]}
              castShadow
              receiveShadow
              position={[0, 18.78, -103.27]}
              rotation={[-3.14, 0, -1.57]}
              scale={1.12}
            />
          </group>
          <group name="Rain" position={[-250.14, 30.68, 115.8]}>
            <mesh
              name="rainy f"
              geometry={nodes["rainy f"].geometry}
              material={materials["rainy f Material"]}
              castShadow
              receiveShadow
              position={[-32.73, -17.41, -52.49]}
              rotation={[Math.PI, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Text 2"
              geometry={nodes["Text 2"].geometry}
              material={materials["Text 2 Material"]}
              castShadow
              receiveShadow
              position={[-46.35, -139.12, -22.06]}
            />
            <mesh
              name="rain b"
              geometry={nodes["rain b"].geometry}
              material={materials["rain b Material"]}
              castShadow
              receiveShadow
              position={[-33.84, -22.9, -101.85]}
              rotation={[-3.14, 0, -1.57]}
              scale={1.12}
            />
            <group
              name="rain c"
              position={[234.05, 251.78, 68.82]}
              scale={1.67}
            >
              <mesh
                name="rain_2_low_rain_2_0"
                geometry={nodes.rain_2_low_rain_2_0.geometry}
                material={nodes.rain_2_low_rain_2_0.material}
                castShadow
                receiveShadow
              />
            </group>
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            position={[35.31, 237.47, 988.1]}
            rotation={[-Math.PI, 1.53, -1.66]}
            scale={1}
          />
          <mesh
            name="back"
            geometry={nodes.back.geometry}
            material={materials["back Material"]}
            castShadow
            receiveShadow
            position={[3.36, -4.19, -56.49]}
            rotation={[-3.14, 0, -1.57]}
            scale={1.12}
          />
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={-0.02}
            color="#fef8f8"
          />
        </scene>
      </group>
    </>
  );
}
