import React from "react";

function Speakers() {
  return (
    <div className="max-w-screen-2xl mx-auto my-10">
      <h2 className="text-center text-3xl md:text-5xl font-semibold  ">
        Speakers
      </h2>

      <div className="flex justify-center  mt-10">
        <div className="items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Santhosh_George_Kulangara_portrait_%282016%29.jpg"
            alt=""
            className="h-64 w-64 rounded-full items-center"
          />
          <h4 className="text-center my-4 font-medium text-xl">Santhosh George Kulangara</h4>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
