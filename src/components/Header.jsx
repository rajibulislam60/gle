import React from "react";
import Image from "next/image";
import Container from "./../container/Container";
import HeaderImage from "../images/gle-logo.png";
import { Search } from "@deemlol/next-icons";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-4 border-b">
          <Image src={HeaderImage} alt="logo" className="h-10 w-auto" />
          <div className="relative w-[70%]">
            <input
              type="text"
              placeholder="Searching for anything..."
              className="w-full px-12 py-2 pr-10 border border-gray-300 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />

            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
