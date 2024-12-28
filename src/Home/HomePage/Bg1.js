import React from "react";
import bg3 from "../../../src/Assests/bg4.webp";
import Emotions from "./Emotions";

export default function Bg1() {
  return (
    <>
      <div className="relative flex items-center justify-center mt-16 mb-16">
        {/* Image */}
        <img
          className="w-full h-[70vh] object-cover max-sm:w-full"
          src={bg3}
          alt="Background"
        />

        {/* Black Shade */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content Over Image (Optional) */}
        <div className="absolute w-[95%] text-white max-lg:w-[90%] max-sm:w-[90%] max-xl:w-[90%] flex flex-col items-center justify-center">
          <div className="text-5xl font-montserrat max-lg:text-2xl max-sm:text-xl">
            "Taking care of your mind is the first step toward taking care of
            your life."
          </div>
          <div className="mt-10 font-montserrat">– My Sight Philosophy</div>
        </div>
      </div>
      <Emotions />
    </>
  );
}
