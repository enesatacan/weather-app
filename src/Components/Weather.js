import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Weather({ city, setWeatherData, weatherData }) {
  const API_KEY = "5aa6db4532ce10a6e861bbeb112edf80";
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
          );
          setWeatherData(response.data);
          setWeatherIcon(getWeatherIcon(response.data.weather[0].icon));
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };

      fetchWeather();
    }
  }, [city, setWeatherData]);

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <div
      style={{
        width: "60%",
        backgroundColor: "white",
        borderRadius: "0px 0px 10px 10px",
      }}
    >
      <div style={{ color: "black", padding: 10 }}>
        {weatherData && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              justifyContent: "space-around",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>{(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {weatherIcon && (
                <img
                  style={{ marginRight: 20 }}
                  src={weatherIcon}
                  alt="Weather Icon"
                />
              )}
              <p style={{ textTransform: "capitalize" }}>
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Weather.propTypes = {
  city: PropTypes.string.isRequired,
  setWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.object,
};

export default Weather;
