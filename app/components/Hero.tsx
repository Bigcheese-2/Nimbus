"use client";
import React from "react";
import SearchBar from "./search/SearchBar";
import { useWeather } from "@/hooks/useWeather";
import { Loader2 } from "lucide-react";
import SearchDisplay from "./search/SearchDisplay";

export default function Hero() {
  const { weather, error, loading, fetchWeather } = useWeather();
  return (
    <div>
      <div className="flex flex-col gap-10 py-20">
        <div className=" flex flex-col gap-3  text-center max-w-4xl mx-auto">
          <h1 className="text-3xl xl:text-6xl text-white font-bold">
            Stay Ahead of the Weather with
            <span className="text-[#AD36CB]/80 ml-1">Nimbus</span>
          </h1>
          <p className="text-[#695D5D]">
            Get real-time, accurate forecasts for your city and beyond
          </p>
        </div>
        <SearchBar onSearch={fetchWeather} loading={loading} />
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {loading && (
          <div className="mt-6 flex flex-col items-center justify-center">
            <Loader2 className="h-8 w-8 text-[#AD36CB] animate-spin" />
            <p className="text-white mt-2">Fetching weather data...</p>
          </div>
        )}

        {!loading && weather && <SearchDisplay weather={weather} />}
      </div>
    </div>
  );
}
