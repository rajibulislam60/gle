import Container from "@/container/Container";
import React from "react";
import Image from "next/image";
import FooterLogo from "../images/gle-logo.png";

export default function Footer() {
  return (
    <div className="py-12 bg-[#fefefe]">
      <Container>
        <div className="lg:flex justify-between gap-10">
          <div className="lg:w-[45%]">
            <Image src={FooterLogo} alt="Footer Logo Image" />
            {/* <button className=" flex gap-1 lg:gap-2 items-center  text-gray-600 hover:text-blue-600 font-light lg:font-normal px-2 py-1 lg:px-4 lg:py-2 rounded-[8px] cursor-pointer duration-[0.3s] border border-gray-900">
              Contact Sale
            </button> */}
          </div>
          <div className="lg:w-[50%] lg:flex justify-between">
            <div>
              <h3 className="text-xl font-bold text-black">Lists</h3>
              <ul className="text-gray-800 mt-5">
                <li className="cursor-pointer hover:text-black">New courses</li>
                <li className="cursor-pointer hover:text-black">Top rated</li>
                <li className="cursor-pointer hover:text-black">
                  Courses on sale
                </li>
                <li className="cursor-pointer hover:text-black">
                  Courses on sale
                </li>
                <li className="cursor-pointer hover:text-black">
                  Course bundles
                </li>
                <li className="cursor-pointer hover:text-black">
                  Competitions
                </li>
                <li className="cursor-pointer hover:text-black">Blog</li>
                <li className="cursor-pointer hover:text-black">Ebooks</li>
                <li className="cursor-pointer hover:text-black">Events</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Company</h3>
              <ul className="text-gray-800 mt-5">
                <li className="cursor-pointer hover:text-black">About us</li>
                <li className="cursor-pointer hover:text-black">Security</li>
                <li className="cursor-pointer hover:text-black">Contact us</li>
                <li className="cursor-pointer hover:text-black">Careers</li>
                <li className="cursor-pointer hover:text-black">
                  Become a Teacher
                </li>
                <li className="cursor-pointer hover:text-black">
                  Term of Service
                </li>
                <li className="cursor-pointer hover:text-black">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-black">
                  Accessibillity
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Feature</h3>
              <ul className="text-gray-800 mt-5">
                <li className="cursor-pointer hover:text-black">
                  User Management
                </li>
                <li className="cursor-pointer hover:text-black">
                  Learn Management
                </li>
                <li className="cursor-pointer hover:text-black">Reporting</li>
                <li className="cursor-pointer hover:text-black">Forums</li>
                <li className="cursor-pointer hover:text-black">Language</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
