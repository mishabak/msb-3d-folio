import { useDispatch } from "react-redux";
import { action_rooms } from "../../../../features/js/slice";
import { useRef, useState } from "react";

function Input({ label, value, handleChange = () => {}, className = "" }) {
  const dispatch = useDispatch();
  const input = useRef();

  function handleBlur() {
    window.disableMovement = false;
    window.extraVision = false;
    dispatch(action_rooms.setContactRoomSounds({ type: "INPUT", play: false }));
  }

  function handleCharacterMsg(text) {
    if (!text) return;
    dispatch(
      action_rooms.setCharacterMessenger({
        visible: true,
        text,
      })
    );
  }

  function handleFocus() {
    if (window.keyboardPad.onFloor) {
      if (Math.abs(window.characterQuaternion.w) <= 0.04) {
        if (window.keyboardPad.visible) {
          window.disableMovement = true;
          window.extraVision = "INPUT";
          dispatch(
            action_rooms.setContactRoomSounds({ type: "INPUT", play: true })
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
    input.current.blur();
  }

  return (
    <div className={`w-[900px] ${className}`}>
      <label className="text-[38px] pl-4 drop-shadow-[0px_0px_3px_#86e9c3]">
        {label}
      </label>
      <div className="relative w-full  h-[99px]">
        <img
          src="/images/input.svg"
          className="object-fill w-full h-full absolute"
        />
        <input
          ref={input}
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
