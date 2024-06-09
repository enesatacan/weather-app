import "./App.css";
import { useState } from "react";
import SearchCity from "./Components/SearchCity";
import Weather from "./Components/Weather";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const handleCityChange = (newCity) => {
    setCity(newCity);
  };
  let today = new Date();

  let gun = today.getDate();
  let ay = today.getMonth() + 1; // Ay indeksi 0'dan başlar, bu yüzden +1 ekliyoruz
  let yil = today.getFullYear();

  console.log("Bugünün tarihi: " + gun + "/" + ay + "/" + yil);
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: "center" }}>Weather App</h1>
        <p>
          Today: {gun}/{ay}/{yil}
        </p>
        <SearchCity onCityChange={handleCityChange} />
        <Weather
          city={city}
          setWeatherData={setWeatherData}
          weatherData={weatherData}
        />
      </header>
    </div>
  );
}

export default App;
