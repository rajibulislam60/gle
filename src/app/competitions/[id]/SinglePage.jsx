"use client";

import React, { useEffect, useState } from "react";
import Container from "../../../container/Container";
import { useParams } from "next/navigation";
import Data from "@/components/data/Data";
import Image from "next/image";
import Link from "next/link";

export default function SinglePage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    Data().then((res) => {
      const allData = res.competitionsdata;

      const found = allData.find((item) => item.id.toString() === id);

      setSingleData(found || null);
    });
  }, [id]);

  if (!singleData) return <p>Loading...</p>;

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-8">
        {/* IMAGE */}
        <div>
          <Image
            src={singleData.image}
            alt={singleData.title}
            width={600}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h2 className="text-3xl font-bold">{singleData.title}</h2>

          <p className="text-gray-500 mt-2">{singleData.tagline}</p>

          <h3 className="mt-3 text-gray-600">
            Registration Deadline: {singleData.deadline}
          </h3>

          <p className="mt-4">{singleData.description}</p>
          {/* BUTTON */}
          <Link href="https://forms.gle/pPD6oG9fbSiPmVWY8" className="w-full">
            <button className="w-full  cursor-pointer mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
              Register Now
            </button>
          </Link>

          {/* WHY JOIN */}
          {singleData.whyJoin && (
            <div className="mt-5">
              <h4 className="font-semibold text-lg">Why Join</h4>
              <ul className="list-disc ml-5 text-gray-700">
                {singleData.whyJoin.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* SUBJECTS */}
          {singleData.subjects && (
            <div className="mt-5">
              <h4 className="font-semibold text-lg">Subjects</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {singleData.subjects.map((sub, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* EXAM STRUCTURE */}
          {singleData.examStructure && (
            <div className="mt-5">
              <h4 className="font-semibold text-lg">
                Exam Structure ({singleData.examStructure.mode})
              </h4>

              <ul className="list-disc ml-5 text-gray-700">
                {singleData.examStructure.stages.map((stage, i) => (
                  <li key={i}>
                    {stage.name} - {stage.level}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* RESULTS */}
          {singleData.results && (
            <div className="mt-5">
              <h4 className="font-semibold text-lg">Results</h4>
              <p>{singleData.results.evaluation}</p>
              <p>Publish: {singleData.results.publishTime}</p>
            </div>
          )}

          {/* REWARDS */}
          {singleData.rewards && (
            <div className="mt-5">
              <h4 className="font-semibold text-lg">Rewards</h4>

              <p className="font-medium mt-2">Top Performers</p>
              <ul className="list-disc ml-5">
                {singleData.rewards.topPerformers.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="font-medium mt-3">All Participants</p>
              <ul className="list-disc ml-5">
                {singleData.rewards.allParticipants.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* REGISTRATION */}
          {singleData.registration && (
            <div className="mt-6 p-4 border rounded-lg">
              <h4 className="font-semibold text-lg">Registration</h4>
              <p>Fee: {singleData.registration.fee}</p>

              <p className="mt-1">
                Payment: {singleData.registration.paymentMethods.join(", ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
