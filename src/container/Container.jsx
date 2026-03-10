import React from "react";

export default function Container({ children }) {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:max-w-[1290px]">
      {children}
    </div>
  );
}
