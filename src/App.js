import React, { useState } from "react";
import axios from "axios";
import WeatherHeader from "./components/WeatherHeader";
import WeatherInfo from "./components/WeatherInfo";

import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [localTime, setLocalTime] = useState('');
  const apiKey = "60eef7b03eb6a04edc88f83bf6699dd4";

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
      setError(null);
      updateTime(response.data.timezone);
    } catch (err) {
      setWeather(null);
      setError("City not found");
    }
  };

  const updateTime = (timezoneOffset) => {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const cityTime = new Date(utcTime + timezoneOffset * 1000);
    setLocalTime(cityTime.toLocaleTimeString());
  };


  const getBackgroundColor = () => {
    if (!weather) return "bg-gray-200";
    switch (weather.weather[0].main) {
      case "Clear":
    return "bg-clear-image";

      case "Clouds":
        return "bg-gray-300";
      case "Rain":
        return "bg-blue-300";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div
      className={`app min-h-screen flex flex-col items-center justify-center ${getBackgroundColor()} transition-colors duration-500`}
    >
      <WeatherHeader
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />
      <WeatherInfo weather={weather} error={error} time={localTime} />
    </div>
  );
}

export default App;
