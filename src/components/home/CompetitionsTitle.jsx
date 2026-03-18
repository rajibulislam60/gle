"use client";
import Container from "@/container/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Data from "../data/Data";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@deemlol/next-icons";

export default function CompetitionsTitle() {
  const [upcomingCompetitions, setUpcomingCompetitions] = useState([]);

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/courses");
  };

  useEffect(() => {
    Data().then((res) => {
      setUpcomingCompetitions(res.coursesdata.slice(0, 4));
    });
  }, []);
  return (
    <div className="py-12 lg:py-18">
      <Container>
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-blue-600">
              UpComing <span className="text-black">Competitions</span>
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mt-12 lg:mt-16">
            {upcomingCompetitions.map((item) => (
              <div className="bg-gray-200 rounded-[12px]" key={item.id}>
                <Image
                  className="w-full h-[100px] lg:h-[200px] object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-3">
                  <h2 className="text-xl lg:text-2xl font-bold">{item.name}</h2>
                  <p className="text-gray-700 mt-3 line-clamp-2">
                    {item.description}
                  </p>
                  <button className="w-full bg-[#356df1] hover:bg-[#031030] text-white text-sm lg:text-base px-5 py-3 rounded-lg duration-300 mt-5">
                    Registration
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
