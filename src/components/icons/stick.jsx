function Stick({ idA = "forward", idB = "backward", className = "" }) {
  const handleTouch = (ev) => {
    console.log("hey..",ev.target.id,ev.type);
    
    let key = "";
    switch (ev.target.id) {
      case "forward":
        key = "KeyW";
        break;
      case "backward":
        key = "KeyS";
        break;
      case "left":
        key = "KeyA";
        break;
      case "right":
        key = "KeyD";
        break;
    }

    if (key) {
      let action = ev.type == "touchstart" ? "keydown" : "keyup";
      const event = new KeyboardEvent(action, { key });
      window.dispatchEvent(event);
    }
  };

  return (
    <svg
      className={`z-[2] fixed bottom-0 ${className} lg:hidden`}
      width="12"
      height="32"
      viewBox="0 0 12 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        onTouchStart={handleTouch}
        onTouchEnd={handleTouch}
        id={idA}
        d="M3.5 4L1 7L2.66667 9V14H9.33333V9L11 7L6 1L3.5 4Z"
        fill="#1E9686"
      />
      <path
        d="M3.5 4L1 7L2.66667 9V14H9.33333V9L11 7L6 1L3.5 4Z"
        stroke="#1E9686"
        strokeWidth="0.06"
      />
      <path
        d="M3.5 4L1 7L2.66667 9V14H9.33333V9L11 7L6 1L3.5 4Z"
        stroke="#5EE4D2"
        strokeWidth="0.06"
      />
      <path
        onTouchStart={handleTouch}
        onTouchEnd={handleTouch}
        id={idB}
        d="M8.5 28L11 25L9.33333 23L9.33333 18H2.66667V23L1 25L6 31L8.5 28Z"
        fill="#1E9686"
      />
      <path
        d="M8.5 28L11 25L9.33333 23L9.33333 18H2.66667V23L1 25L6 31L8.5 28Z"
        stroke="#1E9686"
        strokeWidth="0.06"
      />
      <path
        d="M8.5 28L11 25L9.33333 23L9.33333 18H2.66667V23L1 25L6 31L8.5 28Z"
        stroke="#5EE4D2"
        strokeWidth="0.06"
      />
      <g filter="url(#filter0_d_308_72)">
        <path d="M6 5L4 8H8L6 5Z" fill="#D9D9D9" />
        <path
          d="M7.06574 7.5H4.93426L6 5.90139L7.06574 7.5Z"
          stroke="#5EE4D2"
        />
      </g>
      <g filter="url(#filter1_d_308_72)">
        <path d="M6 27L8 24H4L6 27Z" fill="#D9D9D9" />
        <path
          d="M4.93426 24.5H7.06574L6 26.0986L4.93426 24.5Z"
          stroke="#5EE4D2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_308_72"
          x="3.7"
          y="4.7"
          width="4.6"
          height="3.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.368627 0 0 0 0 0.894118 0 0 0 0 0.823529 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_308_72"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_308_72"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_308_72"
          x="3.7"
          y="23.7"
          width="4.6"
          height="3.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.368627 0 0 0 0 0.894118 0 0 0 0 0.823529 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_308_72"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_308_72"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Stick;
