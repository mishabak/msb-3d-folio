import { useDispatch } from "react-redux";
import { action_rooms } from "../../../../features/js/slice";

const msg = [
  "Please wait for the keyboard",
  "Stand Straight",
  "Please position yourself over the footprint",
];

function useField({ isFor, name }) {
  const dispatch = useDispatch();

  function handleCharacterMsg(index) {
    dispatch(
      action_rooms.setCharacterMessenger({
        visible: true,
        text: msg[index],
      })
    );
  }

  function onChange() {}

  function onBlur() {
    window.disableMovement = false;
    window.extraVision = false;
    dispatch(action_rooms.setContactRoomSounds({ type: isFor, play: false }));
  }

  function onFocus(event) {
    if (window.keyboardPad.onFloor) {
      if (Math.abs(window.characterQuaternion.w) <= 0.04) {
        if (window.keyboardPad.visible) {
          window.disableMovement = true;
          window.extraVision = isFor;
          dispatch(
            action_rooms.setContactRoomSounds({ type: isFor, play: true })
          );
          return;
        } else {
          handleCharacterMsg(0);
        }
      } else {
        handleCharacterMsg(1);
      }
    } else {
      handleCharacterMsg(2);
    }
    event.target.blur();
  }

  return { onChange, onBlur, onFocus, type: "text", name: name };
}

export default useField;
