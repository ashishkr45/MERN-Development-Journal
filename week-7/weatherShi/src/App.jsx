import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Weather />
    </div>
  )
}


function Weather() {
  const [city, setCity] = useState("New York"); // Default city
  const [weather, setWeather] = useState(null);
  const API_KEY = "https://api.api-ninjas.com/v1/weather"; // Replace with your OpenWeatherMap API Key

  useEffect(() => {
    fetchWeather(city);
  }, []); // Run once when the component mounts

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => fetchWeather(city)}>Get Weather</button>

      {weather ? (
        <div>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}



export default App
