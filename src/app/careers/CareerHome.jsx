"use client";
import Container from "@/container/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Data from "@/components/data/Data";

export default function CareerHome() {
  const [careersData, setCareersData] = useState([]);

  useEffect(() => {
    Data().then((res) => {
      setCareersData(res.jobsdata);
    });
  }, []);
  return (
    <div className="py-8 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-5">
          {careersData.map((item, index) => (
            <div
              className={`flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 p-4 rounded-lg 
              ${index % 2 !== 0 ? "bg-gray-200" : "bg-white"}`}
              key={item.id}
            >
              <div className="flex items-center gap-10">
                <Image
                  className="w-[120px] lg:w-[200px] h-[120px] lg:h-[200px] object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h3 className="text-[16px] lg:text-2xl font-bold">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mt-3 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
              <div>
                <button className="w-full bg-[#356df1] hover:bg-[#031030] text-white text-sm lg:text-base px-5 py-3 rounded-lg duration-300 mt-5">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
