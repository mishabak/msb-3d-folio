import { DOOR_PROPERTY } from "../../../util/constants";
import ParentFrame from "./ParentFrame";
import ChildFrame from "./ChildFrame";
import Door from "./Door";
import useAudio from "../../../hooks/useAudio";

function Index({ nodes, materials }) {
  const props = { nodes, materials };
  const closeDoorAudio = useAudio({ url: "/audio/close-door.wav" });
  const openDoorAudio = useAudio({ url: "/audio/open-door.wav" });

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
      <Door
        closeDoorAudio={closeDoorAudio}
        openDoorAudio={openDoorAudio}
        materialId={materialId}
        doorNo={idx + 1}
        {...props}
      />
    </group>
  ));
}
export default Index;
