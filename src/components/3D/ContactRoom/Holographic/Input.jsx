import { useDispatch } from "react-redux";
import { action_rooms } from "../../../../features/js/slice";

function Input({ label, value, handleChange = () => {}, className = "" }) {
  const dispatch = useDispatch();

  function handleFocus() {
    window.disableMovement = true;
    window.extraVision = "INPUT";
    dispatch(
      action_rooms.setContactRoomSounds({ type: "INPUT", play: true })
    );
  }

  function handleBlur() {
    window.disableMovement = false;
    window.extraVision = false;
    dispatch(
      action_rooms.setContactRoomSounds({ type: "INPUT", play: false })
    );
  }

  return (
    <div className={`w-[900px] ${className}`}>
      <label className="text-[38px] pl-4 drop-shadow-[0px_0px_3px_#86e9c3]">
        {label}
      </label>
      {/* invert drop-shadow-[0px_0px_3px_red] */}
      <div className="relative w-full  h-[99px]">
        <img
          src="/images/input.svg"
          className="object-fill w-full h-full absolute"
        />
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          type="text"
          className="bg-transparent outline-none text-[36px]  w-full h-full px-7 py-2  absolute "
        />
      </div>
    </div>
  );
}

export default Input;
