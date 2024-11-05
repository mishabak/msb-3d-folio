import { useDispatch } from "react-redux";
import { action_rooms } from "../../../../features/js/slice";
import { useRef } from "react";

function TextArea({ label, value, handleChange = () => {}, className = "" }) {
  const dispatch = useDispatch();
  const textareaRef = useRef();

  function handleCharacterMsg(text) {
    if (!text) return;
    dispatch(
      action_rooms.setCharacterMessenger({
        visible: true,
        text,
      })
    );
  }

  function handleBlur() {
    window.disableMovement = false;
    window.extraVision = false;
    dispatch(
      action_rooms.setContactRoomSounds({ type: "TEXT_AREA", play: false })
    );
  }

  function handleFocus() {
    if (window.keyboardPad.onFloor) {
      if (Math.abs(window.characterQuaternion.w) <= 0.04) {
        if (window.keyboardPad.visible) {
          window.disableMovement = true;
          window.extraVision = "TEXT_AREA";
          dispatch(
            action_rooms.setContactRoomSounds({ type: "TEXT_AREA", play: true })
          );
          return;
        } else {
          handleCharacterMsg("Please wait for the keyboard");
        }
      } else {
        handleCharacterMsg("Stand Straight");
      }
    } else {
      handleCharacterMsg("Please position yourself over the footprint");
    }
    textareaRef.current.blur();
  }

  return (
    <div className={`w-[650px] ${className}`}>
      <label className="text-[38px] ml-14">{label}</label>
      <div className="relative w-full  h-[300px] flex flex-col justify-center items-center">
        <img
          src="/images/textArea.svg"
          className="object-fill w-full h-full absolute"
        />
        <textarea
          ref={textareaRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          type="text"
          className="bg-transparent outline-none text-[36px]  w-[550px] h-[200px]  absolute resize-none"
        />
      </div>
    </div>
  );
}

export default TextArea;
