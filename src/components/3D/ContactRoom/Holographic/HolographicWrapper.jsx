import { Html } from "@react-three/drei";

function HolographicWrapper({ children, width, height, position, rotation }) {
  return (
    <Html
      scale={0.1}
      className={`overflow-hidden`}
      style={{
        width,
        height,
        background: `linear-gradient(0deg, #036d7e70 0%, #ffffff00 100%)`,
        mixBlendMode: 'screen'
      }}
      // style={{ display: currentRoom == "floor_5" ? "block" : "none" }}
      position={position}
      rotation={rotation}
      transform={true}
    >
      {children}
    </Html>
  );
}

export default HolographicWrapper;
