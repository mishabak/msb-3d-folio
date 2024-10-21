import HolographicWrapper from "./HolographicWrapper";
import TextArea from "./TextArea";
const Form = () => {
  return (
    <div
    className="
  text-[45px] drop-shadow-[0px_0px_3px_#86e9c3] font-thin flex flex-col items-center justify-center h-full"
  >
    <TextArea label={"Message"} />
  </div>
  );
};
function Holo3() {
  return (
    <HolographicWrapper
      height={700}
      position={[2.112, 1.403, -0.11]}
      rotation={[0, -1.1, 0]}
      width={800}
    >
      <Form />
    </HolographicWrapper>
  );
}

export default Holo3;
