import React from "react";

function WeatherInfo({ weather, desc }) {
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col">
        <p className="font-medium text-4xl text-white p-2 capitalize ">
          {desc[0]?.description}
        </p>
        <p className="font-extrabold text-4xl text-white p-2">
          {weather?.main?.temp} °C
        </p>
        <p className="font-medium text-xl text-white p-2 ">{weather.name}</p>
      </div>
      <div className="flex flex-col">
        <p className="font-normal text-2xl text-white p-2">
          Feels like {weather?.main?.feels_like} °C
        </p>
        <p className="font-normal text-2xl text-white p-2">
          Humidity: {weather?.main?.humidity} %
        </p>
        <p className="font-normal text-xl text-white p-2">
          Wind Speed: {weather?.wind?.speed} km/h
        </p>
      </div>
    </div>
  );
}

export default WeatherInfo;
