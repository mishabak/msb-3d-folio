import { useRef } from "react";
import HolographicWrapper from "./HolographicWrapper";

const Form = () => {
  const buttonRef = useRef();

  const resume = `https://drive.usercontent.google.com/u/0/uc?id=${
    import.meta.env.VITE_APP_RESUME_DRIVE_ID
  }&export=download`;

  const handleResumeClick = () => {
    const cofm = confirm("Are you sure you want to download the resume?");
    if (cofm) buttonRef.current.click();
  };
  return (
    <div
      className="
     drop-shadow-[0px_0px_3px_#86e9c3] font-thin flex  items-center justify-center h-full w-full"
    >
      <a
        ref={buttonRef}
        href={resume}
        download={"resume.pdf"}
        className="hidden"
      ></a>
      <div className="text-[22px] w-[400px]">
        Download my resume to learn more about my skills, experience, and
        achievements. I look forward to the opportunity to discuss how I can
        contribute to your team!
      </div>

      <div className="bg-contain w-[275px] h-[300px] relative">
        <img
          onClick={handleResumeClick}
          className="cursor-pointer w-[168px] h-[236px] ml-7 mt-7 bg-opacity-75 absolute"
          src="/images/resume.png "
          alt=""
        />
        <img
          src="/images/resumeFrame.svg"
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
};
function Holo1() {
  return (
    <HolographicWrapper
      height={700}
      position={[-2.112, 1.403, -0.11]}
      rotation={[0, 1.1, 0]}
      width={800}
    >
      <Form />
    </HolographicWrapper>
  );
}

export default Holo1;
