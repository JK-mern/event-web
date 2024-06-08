import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div className="bg-heroSection h-lvh bg-cover bg-center ">
      <Navbar />
      <div className="pt-48 pb-48 md:pt-80  text-white">
        <h2 className="max-w-screen-2xl mx-auto p-4 text-center text-3xl md:text-7xl font-extrabold">
          Discover the Next Big Thing at <br></br>Our Launch Event!
        </h2>
        <div className="flex   justify-center mt-4 gap-4 ">
          <button class="btn   md:btn-wide">Book Tickets</button>
          <button class="btn  md:btn-wide">Details</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
