import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { FaBars } from "react-icons/fa6";
interface NavProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}
const Nav: React.FC<NavProps> = ({
  onHomeClick,
  onAboutClick,
  onProjectsClick,
  onContactClick,
}) => {
  return (
    <nav className="fixed w-full px-4 sm:px-0 py-4 drop-shadow-md  bg-white z-50">
      <div className="container  flex justify-between items-center ">
        <p
          className="logo font-extrabold text-2xl hidden sm:inline cursor-pointer"
          onClick={onHomeClick}
        >
          Dale N Dev
        </p>
        <a
          className="logo font-extrabold text-2xl sm:hidden cursor-pointer"
          onClick={onHomeClick}
        >
          DND
        </a>
        <ul className="space-x-4 text-lg font-medium hidden md:flex">
          <li
            className="hover:text-[#6C63FF] cursor-pointer"
            onClick={onAboutClick}
          >
            <a>About</a>
          </li>
          <li
            className="hover:text-[#6C63FF] cursor-pointer"
            onClick={onProjectsClick}
          >
            <a>Projects</a>
          </li>
          <li
            className="hover:text-[#6C63FF] cursor-pointer"
            onClick={onContactClick}
          >
            <a>Contact</a>
          </li>
        </ul>
        <div className="inline md:hidden">
          <Sheet>
            <SheetTrigger>
              <FaBars />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <ul className="space-x-4 text-lg font-medium flex flex-col">
                    <SheetClose>
                      <li
                        className="hover:text-[#6C63FF] cursor-pointer"
                        onClick={() => {
                          onAboutClick();
                        }}
                      >
                        <a>About</a>
                      </li>
                    </SheetClose>
                    <SheetClose>
                      <li
                        className="hover:text-[#6C63FF] cursor-pointer"
                        onClick={() => {
                          onProjectsClick();
                        }}
                      >
                        <a>Projects</a>
                      </li>
                    </SheetClose>
                    <SheetClose>
                      <li
                        className="hover:text-[#6C63FF] cursor-pointer"
                        onClick={() => {
                          onContactClick();
                        }}
                      >
                        <a>Contact</a>
                      </li>
                    </SheetClose>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
