import { useState } from "react";
import axios from "axios";
import { WeatherData } from "@/app/types/weather";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const fetchWeather = async (city: string) => {
    if (!city) return;
    setError("");
    setLoading(true);

    try {
      const res = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      setError("City does not exist");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchTomorrowWeather = async (city: string) => {
    if (!city) return;
    setError("");
    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1); // Get next day's date
      const tomorrowDate = tomorrow.toISOString().split("T")[0]; // Format: YYYY-MM-DD

      const tomorrowForecast = res.data.list.find((item: any) =>
        item.dt_txt.startsWith(tomorrowDate)
      );

      if (tomorrowForecast) {
        setWeather({
          name: res.data.city.name,
          main: tomorrowForecast.main,
          weather: tomorrowForecast.weather,
          wind: tomorrowForecast.wind,
          visibility: tomorrowForecast.visibility,
          dt: tomorrowForecast.dt,
        });
      } else {
        setError("No forecast data available for tomorrow.");
        setWeather(null);
      }
    } catch (err) {
      setError("City does not exist");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, error, loading, fetchWeather, fetchTomorrowWeather };
}
