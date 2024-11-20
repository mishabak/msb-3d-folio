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
        geometry={nodes.Frame.geometry}
        material={materials.Clock}
        position={[0, 1.127, -0.869]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.336, 0.061, 0.725]}
      />
      <mesh
        geometry={nodes.Bolt.geometry}
        material={materials.Bolt}
        position={[0.183, 1.128, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.013, 0.036, 0.013]}
      />
      <group
        position={[0.119, 1.128, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.941, 0.027, 0.941]}
      >
        <mesh geometry={nodes.Clock_1.geometry} material={materials.Digits} />
        <mesh geometry={nodes.Clock_2.geometry} material={materials.Clock} />
      </group>
      <mesh
        ref={hourRef}
        geometry={nodes.Hour.geometry}
        material={materials.Niddle}
        position={[-0.144, 1.128, 0]}
        rotation={[-1.293, 0, 0]}
        scale={[0.021, 0.326, 0.028]}
      />
      <mesh
        ref={minuteRef}
        geometry={nodes.Minute.geometry}
        material={materials.Niddle}
        position={[-0.128, 1.128, 0]}
        rotation={[-2.233, 0, 0]}
        scale={[0.021, 0.326, 0.028]}
      />
      <mesh
        ref={secondRef}
        geometry={nodes.Second.geometry}
        material={materials.Niddle}
        position={[-0.111, 1.128, 0]}
        rotation={[3.062, 0, 0]}
        scale={[0.021, 0.326, 0.016]}
      />
    </group>
  );
}

useGLTF.preload("/models/Clock.glb");
