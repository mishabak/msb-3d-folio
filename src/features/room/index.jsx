import { Building, DoorWay } from "../../components/3D";
import { useGLTF } from "@react-three/drei";
function Room() {
  const { nodes, materials } = useGLTF("./models/portfolio.glb");
  const props = { nodes, materials };
  return (
    <group onClick={(e) => e.stopPropagation()}>
      <Building {...props} />
      <DoorWay {...props} />
    </group>
  );
}
useGLTF.preload("/3d-room.glb");
export default Room;
