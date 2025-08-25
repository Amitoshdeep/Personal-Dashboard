import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
//   const [city, setCity] = useState("Amloh, punjab");
    const [city , setCity] = useLocalStorage("city","");

  const API_KEY = "e183315bc3944697b0372353252408";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );

        const data = await res.json();

        setWeather({
          temp: data.current.temp_c,
          condition: data.current.condition.text,
          icon: data.current.condition.icon,
          wind: data.current.wind_kph,
        });
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="relative z-10 text-right">

      {/* <h2 className="text-lg font-semibold">{city}</h2>

      <p className="text-4xl flex items-center gap-2 justify-end p-2">
        {weather.temp} <sup className="text-xl">°C</sup>
        <img src={weather.icon} alt={weather.condition} className="w-10 h-10" />
      </p>

      <p className="text-lg">💨 {weather.wind} kph</p>

      <p className="text-sm">{weather.condition}</p> */}

        <div className="flex items-center gap-1">
          <p className="text-4xl flex gap-1 p-4">
              <sub>
              <img 
                  src={weather.icon} 
                  alt={weather.condition} 
                  className="w-7 aspect-square inline-block" 
                  />
              </sub>

              {weather.temp}
              <sup className="text-lg">°C</sup>
          </p>
          
          <p className="text-4xl flex gap-1 p-3">
              {/* <sub className="text-sm flex items-end">
                💨
              </sub> */}

              {weather.wind}
              <sup className="text-lg">km/h</sup>
          </p>

          
        </div>

        <h2 className="text-2xl font-semibold">
            {city}
        </h2>

        <p className="text-sm">{weather.condition}</p>

    </div>
  );
}

export default WeatherWidget;
