import HolographicWrapper from "./HolographicWrapper";

function Holo3() {
  return (
    <HolographicWrapper
      height={700}
      position={[2.112, 1.403, -0.11]}
      rotation={[0, -1.1 , 0]}
      width={800}
    >
      <div>right screen</div>
    </HolographicWrapper>
  );
}

export default Holo3;
