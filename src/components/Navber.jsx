import React from "react";

export default function Navber() {
  return (
    <div className="flex justify-between items-center py-3">
      <h3 className="text-3xl font-bold text-black">
        G<span className="text-gray-700">le</span>
      </h3>
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
      <div>
        <button className="bg-green-400 hover:bg-green-600 text-xl text-white font-normal px-4 py-2 rounded-[8px] cursor-pointer">
          Register Courses
        </button>
      </div>
    </div>
  );
}
