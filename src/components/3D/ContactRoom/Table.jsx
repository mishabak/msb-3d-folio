import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useEffect, useRef } from "react";

import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

const TableLights = () => {
  const reff = useRef();
  useEffect(() => {
    // RectAreaLightUniformsLib.init();
    // const helper = new RectAreaLightHelper(reff.current);
    // reff.current.add(helper);
  }, []);
  return (
    <>
      <rectAreaLight
        width={3}
        height={0.2}
        intensity={8}
        position={[0, 1, -1]}
        rotation={[-Math.PI / 2 + 1.2, 0, 0]}
        color={"blue"}
      />
      <rectAreaLight
        width={1.9}
        height={0.2}
        intensity={8}
        position={[5, 1, 1]}
        rotation={[-Math.PI / 2 + 0.75, -0.9, 2.45]}
        color={"blue"}
      />
      <rectAreaLight
        width={1.9}
        height={0.2}
        intensity={8}
        position={[-5, 1, 1]}
        rotation={[-Math.PI / 2 + 0.75, 0.9, -2.45]}
        color={"blue"}
      />
    </>
  );
};

const Colliders = () => {
  return (
    <>
      <CuboidCollider position={[0, 0.1, -2.2]} args={[7.4, 1.4, 1.3]} />
      {/* for right leg */}
      <CuboidCollider
        position={[5.4, 0.1, 1.3]}
        rotation={[0, 0.504, 0]}
        args={[0.3, 1.4, 2.6]}
      />
      <CuboidCollider
        position={[7.1, 0.1, 1.2]}
        rotation={[0, -0.1, 0]}
        args={[0.1, 1.4, 2.2]}
      />
      {/* for left leg */}
      <CuboidCollider
        position={[-5.4, 0.1, 1.3]}
        rotation={[0, -0.504, 0]}
        args={[0.3, 1.4, 2.6]}
      />
      <CuboidCollider
        position={[-7.1, 0.1, 1.2]}
        rotation={[0, 0.1, 0]}
        args={[0.1, 1.4, 2.2]}
      />
    </>
  );
};

function Table() {
  const { nodes, materials } = useGLTF("/models/holographicTable.glb");

  return (
    <group scale={0.4} dispose={null}>
      <RigidBody type="fixed" colliders={false}>
        <mesh
          geometry={nodes.HolograpicTable.geometry}
          material={materials.holoGrapicTable}
          rotation={[0, Math.PI / 2, 0]}
          scale={[3.5, 1.32, 7]}
        />
        <Colliders />
      </RigidBody>
      <TableLights />
    </group>
  );
}
useGLTF.preload("/holographicTable.glb");
export default Table;
