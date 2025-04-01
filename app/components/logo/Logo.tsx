"use client";
import React, { useState, useEffect } from "react";
import { CloudLightning } from "lucide-react";

export default function Logo() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formattedTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-0.5 items-center justify-center h-full">
      <CloudLightning className="text-[#AD36CB] h-4 w-4" />
      <div className="relative">
        <h1
          className="text-xl md:text-3xl font-bold bg-gradient-to-r 
             from-[#AD36CB] from-0% 
             via-[#AD36CB] via-[55%] 
             to-[#333333] to-[80%] 
             text-transparent bg-clip-text"
        >
          NIMBUS
        </h1>
        <p className="text-xs text-white absolute right-0">{time}</p>
      </div>
    </div>
  );
}
