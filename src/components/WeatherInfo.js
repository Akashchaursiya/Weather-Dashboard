import React from "react";
import { FaSun, FaCloud, FaCloudRain, FaWind, FaEye, FaCloudSun } from "react-icons/fa";

function WeatherInfo({ weather, error, time }) {
  const renderIcon = () => {
    if (!weather) return null;
    switch (weather.weather[0].main) {
      case "Clear":
        return <FaSun className="w-24 h-24 text-yellow-400" />;
      case "Clouds":
        return <FaCloud className="w-24 h-24 text-gray-400" />;
      case "Rain":
        return <FaCloudRain className="w-24 h-24 text-blue-400" />;
      default:
        return <FaCloudSun className="w-24 h-24 text-yellow-300" />;
    }
  };

  return (
    <main className="text-center p-2  rounded-lg shadow-lg max-w-md mx-auto mt-10">
      {error && <p className="text-red-400 mb-4">{error}</p>}
      {weather && (
        <div className="weather-info flex justify-between items-center">
          <div className="details-container text-left">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">City: {weather.name}</h2>
            <p className="text-xl text-gray-600">Temperature: {Math.round(weather.main.temp)}°C</p>
            <p className="text-lg capitalize text-gray-600">{weather.weather[0].description}</p>
            <p className="text-lg mb-2 text-gray-600">Humidity: {weather.main.humidity}%</p>

            <p className="text-lg mb-2 text-gray-600">
              <FaWind className="inline mr-1 text-gray-500" />
              Wind Speed: {weather.wind.speed} m/s
            </p>
            <p className="text-lg mb-2 text-gray-600">Feels Like: {Math.round(weather.main.feels_like)}°C</p>

            <p className="text-lg mb-2 text-gray-600">
              <FaEye className="inline mr-1 text-gray-500" />
              Visibility: {weather.visibility / 1000} km
            </p>

            {weather.rain && weather.rain['1h'] > 0 && (
              <p className="text-lg mb-2 text-gray-600">
                <FaCloudRain className="inline mr-1 text-blue-400" />
                Rain: {weather.rain['1h']} mm
              </p>
            )}
          </div>
          <div className="icon-container text-5xl">
            {renderIcon()}
            <p className="text-sm mt-2 font-bold text-gray-500">Current Time: {time}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default WeatherInfo;
