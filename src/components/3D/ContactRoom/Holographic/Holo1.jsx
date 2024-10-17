import HolographicWrapper from "./HolographicWrapper";

const Form = () => {
  return (
    <div
      className="
      text-[45px] drop-shadow-[0px_0px_3px_#86e9c3] font-thin flex flex-col"
    >
      <div>Full Name</div>
      <input
        className="bg-transparent font-thin outline-none shadow-[0px_0px_3px_1px_#86e9c3]"
        type="text"
      />

      <div>center screen</div>
    </div>
  );
};

function Holo1() {
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

export default Holo1;
