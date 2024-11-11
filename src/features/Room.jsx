import { lazy, Suspense } from "react";
import { Building } from "../components/3D";
import { useGLTF } from "@react-three/drei";
const ContactRoom = lazy(() => import("../components/3D/ContactRoom"));
const DoorWay = lazy(() => import("../components/3D/DoorWay"));
function Room() {
  const { nodes, materials } = useGLTF("./models/portfolio.glb");
  const props = { nodes, materials };
  return (
    <group onClick={(e) => e.stopPropagation()}>
      <Building {...props} />
      <Suspense>
        <DoorWay {...props} />
        <ContactRoom />
      </Suspense>
    </group>
  );
}
useGLTF.preload("/3d-room.glb");
export default Room;
