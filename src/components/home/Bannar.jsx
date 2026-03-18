"use client";
import Container from "@/container/Container";
import React from "react";
import Image from "next/image";
import BannarImage from "../../images/home-image.png";

export default function Banner() {
  return (
    <div className="py-12 lg:py-20">
      <Container>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Empowering{" "}
                <span className="text-blue-600">
                  Education, Career and Competitive
                </span>{" "}
                Excellence
              </h1>

              <p className="mt-6 text-gray-600 text-base sm:text-lg">
                Discover opportunities to grow through quality education, build
                a successful career, and participate in exciting competitions.
                Our platform connects students with valuable learning resources,
                career guidance, and competitive challenges to help them achieve
                their goals and unlock their full potential.
              </p>

              <div className="w-full flex flex-col sm:flex-row gap-4 mt-8">
                <button className="w-full bg-[#356df1] hover:bg-[#031030] text-white text-sm lg:text-base px-5 py-3 rounded-lg duration-300">
                  Create Your Account
                </button>

                <button className="w-full border border-[#031030] hover:bg-[#031030] hover:text-white text-sm lg:text-base px-5 py-3 rounded-lg duration-300">
                  View Courses
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src={BannarImage}
                alt="Banner Hero Image"
                className="w-full lg:max-w-lg h-auto"
                priority
              />
            </div>
          </div>
          <p className="uppercase text-center mt-10 lg:mt-16 text-[14px] lg:text-xl text-gray-600 font-medium">
            MORE THAN 15k CUSTOMERS TRUST GLE
          </p>
        </div>
      </Container>
    </div>
  );
}
