import React from "react";
import { CloudLightning } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex gap-0.5 items-center justify-center h-full">
      <CloudLightning className="text-[#AD36CB] h-4 w-4" />
      <div className="relative">
        <h1
          className="text-3xl font-bold  bg-gradient-to-r 
             from-[#AD36CB] from-0% 
             via-[#AD36CB] via-[55%] 
             to-[#333333] to-[80%] 
             text-transparent bg-clip-text"
        >
          NIMBUS
        </h1>
        <p className="text-xs absolute right-0">21:00 pm</p>
      </div>
    </div>
  );
}
