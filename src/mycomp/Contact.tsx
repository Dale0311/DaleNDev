import { FiMail } from "react-icons/fi";
import { Separator } from "@/components/ui/separator";
import { GrLocation } from "react-icons/gr";
function Contact() {
  return (
    <div className="">
      <div className="container flex flex-col  justify-center p-4 sm:p-20 space-y-8">
        <div>
          <p className="text-xl font-semibold text-[#6C63FF]">Contact</p>
          <h1 className="text-lg sm:text-2xl font-semibold">
            Reach out to me via email to discuss collaborations, opportunities,
            or just to say hello👋 !
          </h1>
        </div>
        <div className="h-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
          <div className="flex flex-col text-center sm:text-left sm:flex-row items-center sm:space-x-2">
            <div className="p-4 rounded-full shadow-md text-2xl w-fit border-2 border-[#6C63FF]">
              <FiMail />
            </div>
            <div>
              <p className="font-semibold">Mail</p>
              <p className="text-gray-500 text-sm">mrdalecabarle@gmail.com</p>
            </div>
          </div>
          <Separator orientation="vertical" className="hidden sm:inline" />
          <div className="flex flex-col text-center sm:text-left sm:flex-row items-center sm:space-x-2">
            <div className="p-4 rounded-full shadow-md text-2xl w-fit border-2 border-[#6C63FF]">
              <GrLocation />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/mPEV3suDMdt69G1S9"
                className="text-gray-500 text-sm hover:text-[#6C63FF]"
              >
                Tarlac, Philippines
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
