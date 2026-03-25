import React from "react";
import Container from "@/container/Container";

export default function LoginPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="lg:w-[40%] mx-auto bg-gray-200 p-5 rounded-[12px]">
          <h3 className="text-xl lg:text-3xl font-bold text-center">Log in</h3>
          <form action="">
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
            <div className="mt-1 lg:mt-2">
              <button className="underline text-[#356df1] cursor-pointer">
                Forget Password
              </button>
            </div>

            <button className="bg-[#356df1] hover:bg-[#031030] text-[12px] lg:text-[16px] text-white font-light lg:font-normal px-3 lg:px-4 py-2 rounded-[8px] cursor-pointer uppercase duration-[0.3s] mt-8 lg:mt-12 w-full">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
