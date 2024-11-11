import { lazy, Suspense } from "react";
import { Building, DoorWay } from "../components/3D";
import { useGLTF } from "@react-three/drei";
const ContactRoom = lazy(() => import("../components/3D/ContactRoom"));
function Room() {
  const { nodes, materials } = useGLTF("./models/portfolio.glb");
  const props = { nodes, materials };
  return (
    <group onClick={(e) => e.stopPropagation()}>
      <Building {...props} />
      <DoorWay {...props} />
      <Suspense>
        <ContactRoom />
      </Suspense>
    </group>
  );
}
useGLTF.preload("/3d-room.glb");
export default Room;
