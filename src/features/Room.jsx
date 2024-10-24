import { Building, ContactRoom, DoorWay } from "../components/3D";
import { useGLTF } from "@react-three/drei";
import Interior from "./Interior";
function Room() {
  const { nodes, materials } = useGLTF("./models/portfolio.glb");
  const props = { nodes, materials };
  return (
    <group onClick={(e) => e.stopPropagation()}>
      <Building {...props} />
      <DoorWay {...props} />
      <ContactRoom />
    </group>
  );
}
useGLTF.preload("/3d-room.glb");
export default Room;
