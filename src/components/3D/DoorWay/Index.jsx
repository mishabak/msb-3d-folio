import { DOOR_PROPERTY } from "../../../util/constants";
import ParentFrame from "./ParentFrame";
import ChildFrame from "./ChildFrame";
import Door from "./Door";

function Index({ nodes, materials }) {
  const props = { nodes, materials };
  return DOOR_PROPERTY.map(({ name, position, rotation, materialId }, idx) => (
    <group
      key={name}
      name={name}
      position={position}
      rotation={rotation}
      scale={[0.507, 0.59, 0.507]}
    >
      <ParentFrame materialId={materialId} {...props} />
      <ChildFrame materialId={materialId} {...props} />
      <Door doorNo={idx + 1} materialId={materialId} {...props} />
    </group>
  ));
}
export default Index;
