import { Text } from "@react-three/drei";
import { object } from "prop-types";
function DoorTitle({ titles }) {
  let color = titles?.clr || "black";
  return (
    <group
      onClick={(e) => e.stopPropagation()}
      position={[0.1, 0.3, -5.7]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <Text
        position={[0, 0.3, 0]}
        fontSize={0.3}
        fontWeight={600}
        color={color}
      >
        {titles.t}
      </Text>

      <Text fontSize={0.16} color={color}>
        {titles.s}
      </Text>
    </group>
  );
}

DoorTitle.propTypes = {
  titles: object,
};

export default DoorTitle;
