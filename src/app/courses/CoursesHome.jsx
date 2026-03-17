"use client";
import { useEffect, useState } from "react";
import Container from "@/container/Container";
import Data from "@/components/data/Data";
import Image from "next/image";

export default function CoursesHome() {
  const [coursesProduct, setCoursesProduct] = useState([]);

  useEffect(() => {
    Data().then((res) => {
      setCoursesProduct(res.coursesdata);
    });
  }, []);

  return (
    <div>
      <Container>
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            All <span className="text-blue-600">Courses</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {coursesProduct.map((item) => (
              <div className="bg-gray-200 rounded-[12px]" key={item.id}>
                <Image
                  className="w-full h-[150px] lg:h-[200px] object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-3">
                  <h2 className="text-xl lg:text-2xl font-bold">{item.name}</h2>
                  <p className="text-gray-700 mt-3">{item.description}</p>
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
