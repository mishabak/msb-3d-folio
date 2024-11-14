import { useDispatch, useSelector } from "react-redux";
import { selector_rooms } from "../../../../features/js/selector";
import { action_rooms } from "../../../../features/js/slice";
const msg = [
  "Full name must be between 2 and 24 characters.",
  "Please enter a valid email address.",
  "Message must be between 8 and 124 characters.",
];
function SubmitBtn() {
  const contactDetails = useSelector(selector_rooms.allContactDetails);
  const dispatch = useDispatch();

  function handleCharacterMsg(text) {
    dispatch(
      action_rooms.setCharacterMessenger({
        visible: true,
        forFieldError: true,
        text,
      })
    );
  }

  const handleSubmit = () => {
    let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactDetails.email.value);
    let fullName = /^[A-Za-z\s]{2,24}$/.test(contactDetails.fullName.value);
    let message = /^[A-Za-z\s]{8,124}$/.test(contactDetails.message.value);

    if (!message || !fullName || !email) {
      dispatch(
        action_rooms.setContactIsValid({
          email,
          fullName,
          message,
        })
      );
      let text = `${!fullName ? msg[0] : ``} ${!email ? `\n${msg[1]}` : ``} ${
        !message ? `\n${msg[2]}` : ``
      }`;
      handleCharacterMsg(text);
    } else {
      console.log("Can submitt...");
    }
  };

  return (
    <img
      onClick={handleSubmit}
      src=" /images/submit.svg"
      className="object-fill w-[200px] mt-14 cursor-pointer"
    />
  );
}

export default SubmitBtn;
