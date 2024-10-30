function Input({ label, value, handleChange = () => {}, className = "" }) {
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
          onFocus={() => {
            if (Math.abs(window.characterRotValue.w) < 0.05) {
              console.log('stady');
              
            } else {
              console.log('not stady..');
            }
            window.disableMovement = true;
            window.extraVision = "input";
          }}
          onBlur={() => {
            window.disableMovement = false;
            window.extraVision = false;
          }}
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
