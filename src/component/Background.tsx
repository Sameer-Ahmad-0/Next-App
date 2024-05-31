"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";



const Background = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Join Our Music App 
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
      Music is an art form and cultural activity whose medium is sound organized in time. It is a universal language that transcends boundaries and has the power to evoke a wide range of emotions and moods. Music combines elements such as rhythm, melody, harmony, and dynamics to create compositions that can be simple or complex.
      </p>
      <input
        type="text"
        placeholder="hi@manuarora.in"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-3 text-white bg-neutral-950 placeholder:text-neutral-700"
      />
    </div>
    <BackgroundBeams />
  </div>
  )
}

export default Background
