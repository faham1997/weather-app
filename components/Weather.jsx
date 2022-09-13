import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

function Weather() {
  const key = process.env.NEXT_PUBLIC_KEY;
  const [weather, setWeather] = useState([]);
  const [desc, setDesc] = useState([]);
  const [search, setSearch] = useState("");

  const SearchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${key}`
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
      setDesc(data.weather);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SearchWeather("Dhaka");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    SearchWeather(search);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center ">
        <div className="mb-3 mt-10 w-1/3">
          <input
            type="search"
            className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding block w-full border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Enter City"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="flex space-x-2 justify-center p-5">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-orange-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-orange-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <WeatherInfo weather={weather} desc={desc} />
    </div>
  );
}

export default Weather;
