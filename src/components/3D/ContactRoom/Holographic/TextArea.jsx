function TextArea({ label, value, handleChange = () => {}, className = "" }) {
  return (
    <div className={`w-[650px] ${className}`}>
      <label className="text-[38px] ml-14">{label}</label>
      <div className="relative w-full  h-[300px] flex flex-col justify-center items-center">
        <img
          src="/images/textArea.svg"
          className="object-fill w-full h-full absolute"
        />
        <textarea
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
