import { number, string } from "prop-types";
import useField from "./useField";
const types = { input: "INPUT", textarea: "TEXT_AREA" };
const cmnCls = "bg-transparent outline-none text-[36px] absolute";
const Img = ({ src }) => (
  <img src={src} className="object-fill w-full h-full absolute" />
);
Img.propTypes = { src: string };

function CustomField({
  className = "",
  height = 99,
  mlLabel = 8,
  label = "",
  isFor = types.input,
  name = "",
}) {
  const fieldHandlers = useField({ isFor, name });

  const Child = () => {
    return isFor == types.input ? (
      <>
        <Img src="/images/input.svg" />
        <input
          {...fieldHandlers}
          className={`w-full h-full px-7 py-2 ${cmnCls}`}
        />
      </>
    ) : isFor == types.textarea ? (
      <>
        <Img src="/images/textArea.svg" />
        <textarea
          {...fieldHandlers}
          className={`w-[550px] h-[200px] resize-none ${cmnCls}`}
        />
      </>
    ) : null;
  };

  return (
    <div className={className}>
      <label
        className={`text-[38px] ml-${mlLabel} drop-shadow-[0px_0px_3px_#86e9c3]`}
      >
        {label}
      </label>
      <div
        className={`relative w-full  h-[${height}px] flex flex-col justify-center items-center`}
      >
        <Child />
      </div>
    </div>
  );
}

CustomField.propTypes = {
  mlLabel: number,
  height: number,
  label: string,
  isFor: string,
  className: string,
  name: string,
};

export default CustomField;
