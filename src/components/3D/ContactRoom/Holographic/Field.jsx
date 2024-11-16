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
  const { isValid, onBlur, onChange, onFocus, value } = useField({
    isFor,
    name,
  });
  const fieldAttr = { onBlur, onChange, onFocus, value };

  return (
    <div className={className}>
      <label
        className={`text-[38px] ml-${mlLabel} drop-shadow-[0px_0px_3px_#86e9c3]`}
      >
        {label}
      </label>
      <div
        className={`relative w-full  h-[${height}px] flex flex-col justify-center items-center duration-500 ${
          isValid === false ? "invert contrast-[3]" : ""
        }`}
      >
        {isFor == types.input ? (
          <>
            <Img src="/images/input.svg" />
            <input
              type="text"
              {...fieldAttr}
              className={`w-full h-[99px] px-7 py-2 ${cmnCls}`}
            />
          </>
        ) : isFor == types.textarea ? (
          <>
            <Img src="/images/textArea.svg" />
            <textarea
              type="text"
              {...fieldAttr}
              className={`w-[550px] h-[200px] resize-none ${cmnCls}`}
            />
          </>
        ) : null}
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
