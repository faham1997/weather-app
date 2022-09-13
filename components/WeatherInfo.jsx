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
        <div>Feels like {weather?.main?.feels_like} C</div>
        <div>Humidity: {weather?.main?.humidity}</div>
        <div>Wind Speed:{weather?.wind?.speed}</div>
      </div>
    </div>
  );
}

export default WeatherInfo;
