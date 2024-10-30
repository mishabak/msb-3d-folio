import { useSelector } from "react-redux";
import { selector_rooms } from "../../../features/js/selector";
import { Fragment } from "react";

export default function TableLight() {
  const currentRoom = useSelector(selector_rooms.currentRoom);

  return (
    <Fragment>
      {currentRoom == "floor_5" && (
        <>
          <rectAreaLight
            width={3}
            height={0.2}
            intensity={8}
            position={[0, 1, -1]}
            rotation={[-Math.PI / 2 + 1.2, 0, 0]}
            color={"blue"}
          />
          <rectAreaLight
            width={1.9}
            height={0.2}
            intensity={8}
            position={[5, 1, 1]}
            rotation={[-Math.PI / 2 + 0.75, -0.9, 2.45]}
            color={"blue"}
          />
          <rectAreaLight
            width={1.9}
            height={0.2}
            intensity={8}
            position={[-5, 1, 1]}
            rotation={[-Math.PI / 2 + 0.75, 0.9, -2.45]}
            color={"blue"}
          />
        </>
      )}
    </Fragment>
  );
}
