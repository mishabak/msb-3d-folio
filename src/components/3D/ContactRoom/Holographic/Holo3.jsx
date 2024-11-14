import CustomField from "./Field";
import HolographicWrapper from "./HolographicWrapper";
const Form = () => {
  return (
    <div
      className="
  text-[45px] drop-shadow-[0px_0px_3px_#86e9c3] font-thin flex flex-col items-center justify-center h-full"
    >
      <CustomField
        isFor="TEXT_AREA"
        label={"Message"}
        className="w-[650px]"
        mlLabel={14}
        height={300}
      />
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
      id={3}
    >
      <Form />
    </HolographicWrapper>
  );
}

export default Holo3;
