import { Text } from "@react-three/drei";
function DoorTitle({isOpen}) {
  return (
    <Text
      onClick={(e)=>e.stopPropagation()}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0.1, 0.3, -6]}
      fontSize={0.4}
      color={isOpen ? "green" : "red"}
    >
      {isOpen ? "Open" : "Closed"}
    </Text>
  );
}

export default DoorTitle;
