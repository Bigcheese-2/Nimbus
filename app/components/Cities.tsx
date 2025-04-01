"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { WeatherData } from "../types/weather";
import { MapPin, Thermometer } from "lucide-react"; // Icons
import "swiper/css";

const cities = ["New York", "London", "Tokyo", "Lagos", "Dubai", "Sydney"];

export default function Cities() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const requests = cities.map((city) =>
          axios.get<WeatherData>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          )
        );

        const responses = await Promise.all(requests);
        setWeatherData(responses.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [API_KEY]);

  return (
    <div className="relative w-full overflow-hidden pb-20">
      <div className="flex w-max animate-scroll">
        {[...weatherData, ...weatherData].map((weather, index) => (
          <div
            key={index}
            className="w-[350px] p-4 md:p-6 rounded-2xl shadow-lg text-white mx-3"
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
              <p className=" text-2xl md:text-4xl font-semibold">
                {weather.main.temp}°C
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
                className="w-12 h-12"
              />
            </div>

            <p className="text-center text-lg capitalize">
              {weather.weather[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <p>
                <span className="font-bold">Humidity:</span>{" "}
                {weather.main.humidity}%
              </p>
              <p>
                <span className="font-bold">Visibility:</span>{" "}
                {weather.visibility / 1000}km
              </p>
              <p>
                <span className="font-bold">Air Pressure:</span>{" "}
                {weather.main.pressure}hPa
              </p>
              <p>
                <span className="font-bold">Wind:</span> {weather.wind.speed}{" "}
                m/s
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
