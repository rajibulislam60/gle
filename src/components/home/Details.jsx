import React from "react";
import Container from "./../../container/Container";

export default function Details() {
  return (
    <div className="bg-gray-200 py-8 lg:py-12">
      <Container>
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center">
            What to expect from a{" "}
            <span className="text-blue-600">GLE Courses</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 justify-between items-center text-center py-8 lg:py-12">
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-semibold">
                Highly Experienced
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-semibold">
                Question, Quiz & Course
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-semibold">
                Dedicated Support
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
