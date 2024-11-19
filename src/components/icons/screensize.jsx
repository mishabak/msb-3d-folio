function ScreenSize({ max = true, onClick = () => {} }) {
  return max ? (
    <svg
      onClick={onClick}
      className="cursor-pointer mr-2"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1H18V7" stroke="white" strokeWidth="1.5" />
      <path d="M1 7L1 1H7" stroke="white" strokeWidth="1.5" />
      <path d="M7 18H1L1 12" stroke="white" strokeWidth="1.5" />
      <path d="M18 12V18H12" stroke="white" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg
      onClick={onClick}
      className="cursor-pointer mr-2"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 6L11 6V-5.96046e-08" stroke="white" strokeWidth="1.5" />
      <path d="M6 0V6H-5.96046e-08" stroke="white" strokeWidth="1.5" />
      <path d="M0 11H6V17" stroke="white" strokeWidth="1.5" />
      <path d="M11 17V11H17" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export default ScreenSize;
