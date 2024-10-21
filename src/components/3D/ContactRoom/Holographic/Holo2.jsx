import HolographicWrapper from "./HolographicWrapper";
import Input from "./Input";

const Form = () => {
  return (
    <div
      className="
      text-[45px] font-thin flex flex-col items-center"
    >
      <h4 className="text-[48px] mb-9 drop-shadow-[0px_0px_3px_#86e9c3]">
        Contact me
      </h4>
      <Input label={"Full Name"} className="mt-9" />
      <Input label={"Email"} className="mt-9" />
    </div>
  );
};

function Holo2() {
  return (
    <HolographicWrapper
      height={700}
      position={[0, 1.403, -1]}
      rotation={[0, 0, 0]}
      width={1326}
    >
      <Form />
    </HolographicWrapper>
  );
}

export default Holo2;
