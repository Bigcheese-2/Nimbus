import React from "react";
import { MapPin, Thermometer } from "lucide-react";
import moment from "moment";
import { WeatherData } from "@/app/types/weather";

interface WeatherDisplayProps {
  weather: WeatherData;
}

export default function SearchDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div
      className="mt-6 w-[350px] mx-auto p-6 rounded-2xl shadow-lg text-white"
      style={{ background: "linear-gradient(120deg, #9B34EF, #141414)" }}
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

      <p className="text-center text-lg">{weather.weather[0].description}</p>

      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <p>
          <span className="font-bold">Humidity:</span> {weather.main.humidity}%
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
          <span className="font-bold">Wind:</span> {weather.wind.speed} m/s
        </p>
      </div>
    </div>
  );
}
