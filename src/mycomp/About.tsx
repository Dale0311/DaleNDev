import bgImg from "@/assets/imgs/about.jpg";
import { FaReact } from "react-icons/fa6";
function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center p-20 space-y-4 md:space-x-12 container ">
      <div className="min-w-1/3 relative flex items-start">
        <img src={bgImg} alt="about image " className="rounded-xl w-full" />
        <FaReact className="absolute bg-white h-32 w-32 -top-4 -right-10 p-4 rounded-full" />
      </div>
      <div className="space-y-4">
        <p className="text-lg font-semibold text-[#6C63FF]">About me</p>
        <h2 className="text-2xl font-bold">
          A dedicated Front-end Developer based in Tarlac, Philippines
        </h2>
        <p className="text-gray-500">
          Greetings! I'm Albert Dale Cabarle, a recent graduate with a
          Bachelor's degree in Information Technology and a budding junior
          frontend developer. Proficient in HTML, CSS, JavaScript, React, Redux
          Toolkit, Tailwind, and Firebase, I bring a solid foundation to create
          visually stunning and responsive web applications. I'm eager to bring
          my passion for elegant solutions and commitment to excellence to your
          team. Let's connect and explore the exciting possibilities ahead!
        </p>
      </div>
    </div>
  );
}

export default About;
