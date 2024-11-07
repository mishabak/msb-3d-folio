import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { BALL_Rail_PROPERTY } from "../../../util/constants";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selector_rooms } from "../../../features/js/selector";

export default function Index() {
  const { nodes, materials } = useGLTF("/models/BallRail.glb");
  const currentRoom = useSelector(selector_rooms.currentRoom);
  const rb = useRef();
  let flag = 0;
  let waiting = false;

  function ResetBallPosition() {
    if (!waiting) {
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, 2000);
      flag == 0 ? (flag = 1) : (flag = 0);
      rb.current.setTranslation({
        x: -3.659600019454956,
        y: 4.151500225067139,
        z: 9.81159973144531,
      });
    }
  }
  const Ball = () => (
    <RigidBody
      ref={rb}
      position={[0.149, 12.405, 5.24933]}
      type={"dynamic"}
      colliders={"ball"}
      scale={0.126}
    >
      <mesh name={"Sphere"} geometry={nodes.Sphere.geometry}>
        <meshStandardMaterial color={"white"} />
      </mesh>
      <pointLight color={"green"} />
    </RigidBody>
  );

  const Basket = () => (
    <group position={[6.279, -0.232, 0.328]} scale={[0.47, 0.353, 0.47]}>
      <RigidBody type={"fixed"} colliders={"trimesh"}>
        <mesh
          name="Basket_1"
          geometry={nodes.Basket_1?.geometry}
          material={materials.MaterialBasket}
        />
      </RigidBody>
      <RigidBody
        type={"fixed"}
        colliders={"trimesh"}
        onCollisionEnter={ResetBallPosition}
      >
        <mesh
          name="Basket_2"
          geometry={nodes.Basket_2?.geometry}
          material={materials.MaterialBasketFloor}
        />
      </RigidBody>
    </group>
  );

  const Rail = ({ position, scale, rotation, material, name }) => {
    const materialMesh = useRef(null);
    let funObj = {
      onCollisionEnter: () => {
        materialMesh.current.color = {
          r: 0.298317,
          g: 0.723047,
          b: 0.23604,
        };
      },
      onCollisionExit: () => {
        if (flag) {
          materialMesh.current.color = {
            r: 0.783537,
            g: 0.752942,
            b: 0.215861,
          };
        } else {
          materialMesh.current.color = {
            r: 0.783537,
            g: 0.39015,
            b: 0.375291,
          };
        }
      },
    };

    return (
      <RigidBody
        type={"fixed"}
        position={position}
        colliders={"trimesh"}
        {...funObj}
      >
        <mesh
          onClick={ResetBallPosition}
          name={name}
          scale={scale}
          rotation={rotation}
          position={[0, 0, 0]}
          geometry={nodes[name].geometry}
        >
          <meshStandardMaterial ref={materialMesh} color={"#E5E180"} />
        </mesh>
      </RigidBody>
    );
  };

  return currentRoom == "floor_1" ? (
    <group
      scale={[0.4, 0.3, 0.4]}
      position={[10.9276, 0.43, 8.8295]}
      rotation={[0, Math.PI, 0]}
    >
      {BALL_Rail_PROPERTY.map((dta, key) =>
        dta.name == "Basket" ? (
          <Basket key={key} />
        ) : dta.name == "Ball" ? (
          <Ball key={key} />
        ) : (
          <Rail key={key} {...dta} />
        )
      )}
    </group>
  ) : null;
}

useGLTF.preload("/BallCycle.glb");
