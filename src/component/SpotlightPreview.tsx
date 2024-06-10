import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./component/ui/spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Master The Art of Music 
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Music is an art form and cultural activity whose medium is sound organized in time. It is a universal language that transcends boundaries and has the power to evoke a wide range of emotions and moods.
        </p>
      </div>
    </div>
  );
}
