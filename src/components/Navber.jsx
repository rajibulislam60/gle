import React from "react";
import Container from "./../container/Container";
import { User } from "@deemlol/next-icons";

export default function Navber() {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-3">
          <div>
            <ul className="flex gap-5 font-medium">
              <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                Home
              </li>
              <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                Courses
              </li>
              <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                Competitions
              </li>
              <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                Events
              </li>
              <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                Blog
              </li>
              <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                Career
              </li>
            </ul>
          </div>
          <div className="flex gap-8 items-center">
            <button className="bg-[#356df1] hover:bg-[#031030]  text-white font-normal px-4 py-2 rounded-[8px] cursor-pointer uppercase duration-[0.3s]">
              get started
            </button>
            <button className=" flex gap-2 items-center  text-gray-600 hover:text-blue-600 font-normal px-4 py-2 rounded-[8px] cursor-pointer duration-[0.3s]">
              <User size={20} /> Log In
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
