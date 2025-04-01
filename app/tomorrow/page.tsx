"use client";
import React from "react";
import SearchBar from "../components/search/SearchBar";
import { useWeather } from "@/hooks/useWeather";
import moment from "moment";
import { MapPin, Thermometer } from "lucide-react";

export default function TomorrowWeather() {
  const { weather, loading, error, fetchTomorrowWeather } = useWeather();

  return (
    <div>
      <div className="flex flex-col gap-8 py-24 items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          {" "}
          <h1 className="text-3xl xl:text-6xl font-bold text-[#AD36CB]/60">
            Tomorrow's Weather
          </h1>
          <p className="text-[#695D5D]">Stay Prepared for What’s Ahead</p>
        </div>

        <SearchBar onSearch={fetchTomorrowWeather} loading={loading} />

        {error && <p className="text-red-500 mt-3">{error}</p>}

        {!loading && weather && (
          <div
            className="mt-6 w-[350px] p-6 rounded-2xl shadow-lg text-white"
            style={{
              background: "linear-gradient(120deg, #9B34EF, #141414)",
            }}
          >
            <div className="flex items-center gap-2 text-lg font-bold">
              <MapPin className="w-5 h-5 text-white" />
              <span>{weather.name}</span>
            </div>

            <p className="text-sm mt-1">
              {moment.unix(weather.dt).format("MMM DD, dddd")}
            </p>

            <div className="flex justify-center items-center gap-3 my-4">
              <Thermometer className="w-6 h-6 text-white" />
              <p className="text-4xl font-semibold">{weather.main.temp}°C</p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
                className="w-12 h-12"
              />
            </div>

            <p className="text-center text-lg">
              {weather.weather[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <p>
                <span className="font-bold">Humidity:</span>{" "}
                {weather.main.humidity}%
              </p>
              <p>
                <span className="font-bold">Wind:</span> {weather.wind.speed}{" "}
                m/s
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
