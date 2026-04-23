"use client";

import React, { useEffect, useState } from "react";
import Container from "../../../container/Container";
import { useParams } from "next/navigation";
import Data from "@/components/data/Data";
import Image from "next/image";

export default function SinglePage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    Data().then((res) => {
      const allData = res.competitionsdata;

      const found = allData.find((item) => item.id.toString() === id);

      setSingleData(found);
    });
  }, [id]);

  if (singleData === null) return <p>Loading...</p>;
  if (!singleData) return <p>Data not found</p>;

  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Image
              src={singleData.image}
              alt={singleData.title}
              width={500}
              height={300}
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold">{singleData.title}</h2>

            <h3 className="text-gray-500">
              Registration Deadline: {singleData.deadline}
            </h3>

            <p className="mt-4">{singleData.description}</p>

            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
              Registration
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
