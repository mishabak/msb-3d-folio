import { selector_rooms } from "../../../features/room/js/selector";
import { useSelector } from "react-redux";
import ParentFrame from "./ParentFrame";
import ChildFrame from "./ChildFrame";
import Door from "./Door";

function Index({ nodes, materials }) {
  const props = { nodes, materials };
  const doorProperty = useSelector(selector_rooms.doorProperty);
  return doorProperty.map(({ name, position, rotation, materialId }, idx) => (
    <group
      key={name}
      name={name}
      position={position}
      rotation={rotation}
      scale={[0.507, 0.59, 0.507]}
    >
      <ParentFrame materialId={materialId} {...props} />
      <ChildFrame materialId={materialId} {...props} />
      <Door doorNo={idx} materialId={materialId} {...props} />
    </group>
  ));
}
export default Index;
