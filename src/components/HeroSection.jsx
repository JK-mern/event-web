import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div className=" bg-heroSection h-lvh bg-cover bg-center bg-blend-multiply bg-[#2E2C77]  bg-opacity-90 ">
     
      <Navbar  />
      <div className="relative pt-48 pb-48 md:pt-80 text-white z-10">
        <h2 className="max-w-screen-2xl mx-auto p-4 text-center text-3xl md:text-7xl font-extrabold">
          Smart Team Bake <br /> State Convention 2024
        </h2>
        <div className="flex justify-center mt-4 gap-4">
          <button className="btn md:btn-wide">Book Tickets</button>
          <button className="btn md:btn-wide">Details</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
 

