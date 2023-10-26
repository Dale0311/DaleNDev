import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FaBars } from "react-icons/fa6";

function Nav() {
  return (
    <nav className="fixed w-full px-4 sm:px-0 py-4 drop-shadow-md  bg-white">
      <div className="container  flex justify-between items-center">
        <a className="logo font-extrabold text-2xl hidden sm:inline">
          Dale N Dev
        </a>
        <a className="logo font-extrabold text-2xl sm:hidden">DND</a>
        <ul className="space-x-4 text-lg font-medium hidden md:flex">
          <li className="hover:text-[#6C63FF]">
            <a href="#">About</a>
          </li>
          <li className="hover:text-[#6C63FF]">
            <a href="#">Projects</a>
          </li>
          <li className="hover:text-[#6C63FF]">
            <a href="#">Contact</a>
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
                  <ul className="space-x-4 text-lg font-medium">
                    <li className="hover:text-[#6C63FF]">
                      <a href="#">About</a>
                    </li>
                    <li className="hover:text-[#6C63FF]">
                      <a href="#">Projects</a>
                    </li>
                    <li className="hover:text-[#6C63FF]">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
