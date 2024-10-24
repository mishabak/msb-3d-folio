import { useSpring, animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import moment from "moment";

export default function Index({ position, rotation, scale }) {
  const { nodes, materials } = useGLTF("/models/Clock.glb");
  const secondRef = useRef(null);
  const minuteRef = useRef(null);
  const hourRef = useRef(null);
  const fullRotationDif = 6.288;
  const InASecond = fullRotationDif / 60;
  const InHour = fullRotationDif / 12;
  const start = 9.408;
  const end = 3.12;

  const styles = useSpring({
    loop: { reverse: true },
    from: { rotation: [-0.2, 0, -Math.PI / 2] },
    to: { rotation: [0.2, 0, -Math.PI / 2] },
    config: {
      duration: 1000,
    },
  });

  const setTime = () => {
    const date = moment();
    secondRef.current.rotation.x = start - date.seconds() * InASecond;

    minuteRef.current.rotation.x =
      start - date.minutes() * InASecond - (InASecond / 60) * date.seconds();

    hourRef.current.rotation.x =
      start -
      JSON.parse(date.format("h")) * InHour -
      (InHour / 60) * date.minutes();
  };

  useEffect(() => {
    const updateTime = () => {
      if (secondRef.current && minuteRef.current && hourRef.current) {
        setTime();
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh
        ref={minuteRef}
        castShadow
        receiveShadow
        geometry={nodes.Minute.geometry}
        material={materials.Niddle}
        position={[-0.128, 1.128, 0]}
        rotation={[start, 0, 0]}
        scale={[0.021, 0.326, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        ref={hourRef}
        geometry={nodes.Hour.geometry}
        material={materials.Niddle}
        position={[-0.144, 1.128, 0]}
        rotation={[start, 0, 0]}
        scale={[0.021, 0.326, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        ref={secondRef}
        geometry={nodes.Second.geometry}
        material={materials.Niddle}
        position={[-0.111, 1.128, 0]}
        rotation={[start, 0, 0]}
        scale={[0.021, 0.326, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt.geometry}
        material={nodes.Bolt.material}
        position={[0.183, 1.128, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.013, 0.036, 0.013]}
      />
      <group
        position={[0.119, 1.128, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.941, 0.027, 0.941]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Digits}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Clock}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Clock}
        position={[-0.085, 0.866, 0]}
        scale={[0.088, 2.009, 1.355]}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Bell}
        position={[-0.037, -0.496, 0.011]}
        rotation={styles.rotation}
        scale={[0.278, 0.017, 0.278]}
      />
    </group>
  );
}

useGLTF.preload("/models/Clock.glb");
