import Container from "@/container/Container";
import React from "react";

export default function RegistrationPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="lg:w-[50%] mx-auto bg-gray-200 p-5 rounded-[12px]">
          <h3 className="text-xl lg:text-3xl font-bold text-center">
            Registration
          </h3>
          <form action="">
            <div className="mt-2 lg:mt-3">
              <label className="text-[18px] font-medium" htmlFor="">
                Full Name:
                <input
                  className="w-full border text-[14px] font-normal rounded-[8px] px-3 py-2"
                  type="text"
                  placeholder="Full name ..."
                />
              </label>
            </div>
            <div className="mt-2 lg:mt-3">
              <label className="text-[18px] font-medium" htmlFor="">
                E-mail:{" "}
                <input
                  className="w-full border text-[14px] font-normal rounded-[8px] px-3 py-2"
                  type="mail"
                  placeholder="example@gmail.com"
                />
              </label>
            </div>
            <div className="mt-2 lg:mt-3">
              <label className="text-[18px] font-medium" htmlFor="">
                Phone Number:{" "}
                <input
                  className="w-full border text-[14px] font-normal rounded-[8px] px-3 py-2"
                  type="number"
                  placeholder="Phone number ..."
                />
              </label>
            </div>
            <div className="mt-2 lg:mt-3">
              <label className="text-[18px] font-medium" htmlFor="">
                Password:{" "}
                <input
                  className="w-full border text-[14px] font-normal rounded-[8px] px-3 py-2"
                  type="password"
                  placeholder="******"
                />
              </label>
            </div>
            <div className="mt-2 lg:mt-3">
              <label className="text-[18px] font-medium" htmlFor="">
                Re-Password:{" "}
                <input
                  className="w-full border text-[14px] font-normal rounded-[8px] px-3 py-2"
                  type="password"
                  placeholder="******"
                />
              </label>
            </div>

            <button className="bg-[#356df1] hover:bg-[#031030] text-[12px] lg:text-[16px] text-white font-light lg:font-normal px-3 lg:px-4 py-2 rounded-[8px] cursor-pointer uppercase duration-[0.3s] mt-10 lg:mt-14 w-full">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
