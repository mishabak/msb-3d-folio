import { DOOR_PROPERTY } from "../../../util/constants";
import ParentFrame from "./ParentFrame";
import ChildFrame from "./ChildFrame";
import Door from "./Door";
import useDoorBase from "./useDoorBase";
import Puzzle from "../Puzzle";
import DoorTitle from "./DoorTitle";

function Index({ nodes, materials }) {
  const props = { nodes, materials };
  const { PuzzleAudio, closeDoorAudio, openDoorAudio } = useDoorBase();
  return DOOR_PROPERTY.map(
    ({ name, position, rotation, materialId, titles }, idx) => (
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
        {idx == 0 && <Puzzle PuzzleAudio={PuzzleAudio} puzzleId={2} />}
        <DoorTitle titles={titles} />
      </group>
    )
  );
}
export default Index;
