"use client";
import React, { useState } from "react";
import Container from "./../container/Container";
import { User, Menu } from "@deemlol/next-icons";
import Home from "@/app/page";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navber() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleNavigatelogin = () => {
    router.push("/login");
  };

  const handleNavigateRegistration = () => {
    router.push("/registration");
  };

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-3">
          <div>
            <ul className="hidden lg:flex gap-5 font-medium">
              <Link href="/">
                <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href="/courses">
                <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                  Courses
                </li>
              </Link>
              <Link href="/competitions">
                <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                  Competitions
                </li>
              </Link>

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
            <Menu
              onClick={() => setOpen(!open)}
              size={24}
              className="lg:hidden text-black"
            />
          </div>
          <div className="flex gap-2 lg:gap-8 items-center">
            <button
              onClick={handleNavigateRegistration}
              className="bg-[#356df1] hover:bg-[#031030] text-[12px] lg:text-[16px] text-white font-light lg:font-normal px-3 lg:px-4 py-2 rounded-[8px] cursor-pointer uppercase duration-[0.3s]"
            >
              get started
            </button>
            <button
              onClick={handleNavigatelogin}
              className=" flex gap-1 lg:gap-2 items-center  text-gray-600 hover:text-blue-600 font-light lg:font-normal px-2 py-1 lg:px-4 lg:py-2 rounded-[8px] cursor-pointer duration-[0.3s]"
            >
              <User size={20} /> Log In
            </button>
          </div>
        </div>
        <div>
          {open && (
            <div className="lg:hidden w-full bg-gray-50 p-3 rounded-[8px] duration-[0.3s]">
              <ul className="font-medium">
                <Link href="/">
                  <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link href="/courses">
                  <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                    Courses
                  </li>
                </Link>
                <Link href="/competitions">
                  <li className="text-gray-800 hover:text-gray-950 cursor-pointer">
                    Competitions
                  </li>
                </Link>

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
          )}
        </div>
      </Container>
    </div>
  );
}
