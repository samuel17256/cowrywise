"use client";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  

  return (
    <nav className="bg-gray-100 p-4 fixed w-full top-0 left-0 z-50 shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-6 gap-2">
        <span className="flex items-center text-3xl">
          <Image src="/cowrywiselogo.svg" alt="CowryWise Logo" width={150} height={30} />
        </span>

        <ul className="flex space-x-4 items-center text-lg list-none">
            <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              Personal <AiOutlineDown className="text-sm" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              Business <AiOutlineDown className="text-sm" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              Developer <AiOutlineDown className="text-sm" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              Learn <AiOutlineDown className="text-sm" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button className=" text-blue-600 px-4 text-lg py-2 rounded-md font-bold transition duration-200">
           Log In
        </button>
        <button className="ml-4 bg-blue-600 font-bold text-lg text-gray-100 px-4 py-3 rounded-md transition duration-200 hover:shadow-lg">
          Sign Up for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
