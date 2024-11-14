import CustomField from "./Field";
import HolographicWrapper from "./HolographicWrapper";
import SubmitBtn from "./SubmitBtn";

const Form = () => {
  return (
    <div
      className="
  text-[45px]  font-thin flex flex-col items-center justify-center h-full"
    >
      <CustomField
        isFor="TEXT_AREA"
        label={"Message"}
        name="message"
        className="w-[650px]"
        mlLabel={14}
        height={300}
      />
      <SubmitBtn />
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
