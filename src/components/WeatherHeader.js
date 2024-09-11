import React from 'react';
import { FaSearch } from 'react-icons/fa';

function WeatherHeader({ city, setCity, fetchWeather }) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Weather Dashboard</h1>
      <div className="flex items-center">
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city" 
          className="p-2 border border-gray-300 rounded-xl mr-2 flex-grow"
        />
        <button 
          onClick={fetchWeather} 
          className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        >
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}

export default WeatherHeader;
