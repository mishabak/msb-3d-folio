import { TOUCH_PAD_PROPERTY } from "../../../util/constants";
import CustomMesh from "./CustomMesh";
import useKeyboardPad from "./usekeyBoardPad";
import { RigidBody } from "@react-three/rapier";

function Floor({ nodes, materials, actions }) {
  const glbProps = { nodes, materials, actions };
  const { handleCollision } = useKeyboardPad({ ...glbProps });
  return (
    <RigidBody
      onCollisionEnter={() => {
        handleCollision(true);
      }}
      onCollisionExit={() => {
        handleCollision(false);
      }}
      type="fixed"
      colliders={"cuboid"}
    >
      <group
        name="floor"
        position={[0.628, 0.005, 0]}
        scale={[0.381, 0.003, 0.381]}
      >
        {TOUCH_PAD_PROPERTY.floor.map((data) => (
          <CustomMesh {...glbProps} key={data.name} {...data} />
        ))}
      </group>
    </RigidBody>
  );
}

export default Floor;
