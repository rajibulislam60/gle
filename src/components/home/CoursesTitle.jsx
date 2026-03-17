"use client";
import Container from "@/container/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Data from "../data/Data";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@deemlol/next-icons";

export default function CoursesTitle() {
  const [popularCourses, setPopularCourses] = useState([]);

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/courses");
  };

  useEffect(() => {
    Data().then((res) => {
      setPopularCourses(res.coursesdata.slice(0, 4));
    });
  }, []);
  return (
    <div>
      <Container>
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-blue-600">
              Popular <span className="text-black">Courses</span>
            </h2>
            <div className="flex gap-2 items-center">
              <p
                onClick={handleNavigate}
                type="button"
                className="text-xl font-normal cursor-pointer"
              >
                See More
              </p>
              <ArrowRight size={20} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:mt-12 py-2 lg:py-6">
            {popularCourses.map((item) => (
              <div className="bg-gray-200 rounded-[12px]" key={item.id}>
                <Image
                  className="w-full h-[150px] lg:h-[200px] object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-3">
                  <h2 className="text-xl lg:text-2xl font-bold">{item.name}</h2>
                  <p className="text-gray-700 mt-3 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-[14px] lg:text-xl font-semibold mt-4 lg:mt-6">
                    {item.teacher}
                  </p>
                  <p className="text-[14px] text-gray-800 font-normal">
                    {item.listen}
                  </p>
                  <p className="text-xl lg:text-2xl font-bold text-blue-600">
                    {item.price}
                  </p>
                  <button className="w-full bg-[#356df1] hover:bg-[#031030] text-white text-sm lg:text-base px-5 py-3 rounded-lg duration-300 mt-5">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
