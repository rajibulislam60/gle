import Container from "@/container/Container";
import React from "react";
import Image from "next/image";
import Getapp from "../../images/get-app-1.png";

export default function DetailsFooter() {
  return (
    <div className="bg-[#356df1] text-white">
      <Container>
        <div className="flex gap-8 lg:gap-10 items-center">
          <div>
            <Image src={Getapp} alt="Image" />
          </div>
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-5 lg:mb-8">
              Online Learning Now In Your Fingertips.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              explicabo, illum consectetur aperiam quidem rem sed magni esse
              possimus omnis?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
