import projectOneSs from "@/assets/imgs/DaleyFootwear.png";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
function Projects() {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container flex flex-col items-center justify-center p-4 sm:p-20 space-y-4">
        <p className="text-lg font-semibold text-[#6C63FF]">Projects</p>
        <div className=" md:w-4/5 bg-white flex flex-col space-y-4 lg:flex-row p-4 sm:p-8 shadow-md rounded-lg">
          <div>
            <img src={projectOneSs} alt="First project screenshot" />
          </div>
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl font-bold">
              Daley Footwear{" "}
              <span className="text-lg font-semibold">(Oct 2023)</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Daley Footwear is an e-commerce platform that enables users to
              browse, apply filters, and search for specific products. The
              website also provides users with the option to save their shopping
              carts by logging into their accounts. For those without an
              account, they can easily create one.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              <p className="py-2 text-center px-4 rounded bg-[#F9F9F9] shadow-sm transition ease-in-out delay-50 hover:shadow-none">
                React
              </p>
              <p className="py-2 text-center px-4 rounded bg-[#F9F9F9] shadow-sm transition ease-in-out delay-50 hover:shadow-none">
                Firebase
              </p>
              <p className="py-2 text-center px-4 rounded bg-[#F9F9F9] shadow-sm transition ease-in-out delay-50 hover:shadow-none">
                Zustand
              </p>
            </div>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                target="_blank"
                href="https://github.com/Dale0311/DaleyFootWear"
                className="flex items-center gap-2"
              >
                <p>Code</p> <FiGithub />
              </a>
              <a
                target="_blank"
                href="https://cheerful-cactus-ec721d.netlify.app/"
                className="flex items-center gap-2"
              >
                <p>Live Demo</p> <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
