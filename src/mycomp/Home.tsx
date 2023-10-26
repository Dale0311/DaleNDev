import me from "@/assets/imgs/me.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

function Home() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen flex items-center">
      <div className="container flex flex-col md:flex-row justify-center items-center">
        <div className="hero text-lg order-last md:order-first">
          <div className="space-y-4 flex flex-col justify-center mt-4">
            <h1 className="font-bold text-2xl  md:text-6xl text-center md:text-left">
              Junior Front-End React Developer
            </h1>
            <p className="text-center md:text-left md:w-4/5">
              Hello, I'm Albert Dale Cabarle, a dedicated Frontend Developer
              located in Tarlac, Philippines.
            </p>
            <div className="text-3xl flex justify-center space-x-2 text-center md:justify-start">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/albert-dale-cabarle-451444268/"
              >
                <AiOutlineLinkedin />
              </a>
              <a href="https://github.com/Dale0311" target="_blank">
                <FiGithub />
              </a>
            </div>
            <div className="font-semibold flex flex-col md:flex-row space-y-4 md:space-y-0 items-center sm:space-x-8">
              <p className="border-r-2 border-gray-500 px-2 hidden md:inline">
                Tech Stack{" "}
              </p>
              <p className="border-b-2 border-gray-500 md:hidden">
                Tech Stack{" "}
              </p>
              <div className="flex flex-row space-x-2 sm:space-x-4">
                <img
                  src="https://skillicons.dev/icons?i=js,html,css"
                  alt="logos"
                  className="hover:scale-105 transition duration-300 ease-in-out w-1/2"
                />
                <img
                  src="https://skillicons.dev/icons?i=react,tailwindcss,firebase"
                  alt="logos"
                  className="hover:scale-105 transition duration-300 ease-in-out w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <img
            src={me}
            alt="my logo"
            className="w-4/6 md:w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
