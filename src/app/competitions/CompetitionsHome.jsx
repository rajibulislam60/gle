"use client";
import Container from "@/container/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Data from "@/components/data/Data";

export default function CompetitionsHome() {
  const [competitionProduct, setCompetitionProduct] = useState([]);

  useEffect(() => {
    Data().then((res) => {
      setCompetitionProduct(res.competitionsdata);
    });
  }, []);
  return (
    <div>
      <Container>
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            All <span className="text-blue-600">Competitions</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {competitionProduct.map((item) => (
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
