import { useDispatch, useSelector } from "react-redux";
import { action_rooms } from "../../../../features/js/slice";
import { selector_rooms } from "../../../../features/js/selector";

const msg = [
  "Please wait for the keyboard",
  "Stand Straight",
  "Please position yourself over the footprint",
];

function useField({ isFor, name }) {
  const dispatch = useDispatch();
  const fieldProperty = useSelector(selector_rooms.contactDetails[name]);

  function handleCharacterMsg(index) {
    dispatch(
      action_rooms.setCharacterMessenger({
        visible: true,
        text: msg[index],
      })
    );
  }

  function validate(value) {
    if (value.length == 0) {
      return false;
    } else if (name == "message") {
      return /^[A-Za-z\s]{8,124}$/.test(value);
    } else if (name == "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name == "fullName") {
      return /^[A-Za-z\s]{2,24}$/.test(value);
    } else {
      return false;
    }
  }

  function onChange(event) {
    console.log(fieldProperty.isValid, "event.target.value");

    dispatch(
      action_rooms.setContactDetails({
        value: event.target.value,
        name,
        isValid:
          fieldProperty.isValid !== null
            ? validate(event.target.value)
            : fieldProperty.isValid,
      })
    );
  }

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

  return {
    onChange,
    onBlur,
    onFocus,
    type: "text",
    value: fieldProperty.value,
    isValid: fieldProperty.isValid,
  };
}

export default useField;
