import React from "react";

function EventDetails() {
  return (
    <div className="max-w-screen-2xl mx-auto my-10">
      <h2 className="text-center text-3xl md:text-5xl font-semibold  ">
        Event Details
      </h2>
      <p className="text-justify  p-4 mt-5 mb-2  md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        laboriosam unde sequi dolorem consequuntur magni, voluptatum architecto
        assumenda beatae, labore officia repellendus illum ut facilis, commodi
        adipisci. Dolor, officia earum! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Fuga numquam minus voluptate reprehenderit
        perspiciatis soluta veritatis. Porro a doloribus omnis, corporis quod
        officiis consequatur! Labore, eos esse? Qui, cum. Officia?
      </p>

      <div className="flex  flex-row justify-center items-center gap-10 mt-10 p-4 ">
        <div>
          <h3 className="  md:text-3xl  font-semibold text-center">Date & Time</h3>
          <div className="mt-3">
          <p>Time : 12:00 AM</p>
          <p>Date : 12/12/2024</p>
          </div>
         
        </div>
        <div class="inline-block h-[130px] min-h-[1em] w-0.5 self-stretch bg-black"></div>

        <div>
          <h3 className=" md:text-3xl font-semibold text-center">Venue</h3>
          <div className="mt-3">
            <p>Conferance Hall </p>
            <p>Banglore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
