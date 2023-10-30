import bgImg from "@/assets/imgs/about.jpg";
import { FaReact } from "react-icons/fa6";
function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center p-10 sm:p-20 space-y-4 md:space-x-12 container ">
      <div className="min-w-1/3 relative flex items-start">
        <img src={bgImg} alt="about image " className="rounded-xl w-full" />
        <FaReact className="absolute bg-white h-20 w-20 sm:h-32 sm:w-32 -top-4 -right-10 p-4 rounded-full" />
      </div>
      <div className="space-y-4">
        <p className="text-xl font-semibold text-[#6C63FF]">About me</p>
        <h2 className="text-xl sm:text-2xl font-bold">
          A dedicated Front-end Developer based in Tarlac, Philippines
        </h2>
        <p className="text-sm sm:text-base text-gray-500">
          Greetings! I'm Albert Dale Cabarle, a recent graduate with a
          Bachelor's degree in Information Technology and a budding junior
          frontend developer. Proficient in HTML, CSS, JavaScript, React, Redux
          Toolkit, Tailwind, and Firebase, I bring a solid foundation to create
          visually stunning and responsive web applications.
        </p>
      </div>
    </div>
  );
}

export default About;
