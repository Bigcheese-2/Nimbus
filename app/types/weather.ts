export interface WeatherData {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number; pressure: number };
  visibility: number;
  wind: { speed: number };
  dt: number;
}
