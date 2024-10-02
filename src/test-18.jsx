import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [location, setLocation] = useState(''); // No default location set
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location !== '') {
      fetchWeather(); // Missing dependency array will cause this to run on every render
    }
  });

  const fetchWeather = async () => {
    setLoading(true);

    // No error handling for invalid location or network issues
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=API_KEY&q=${location}`
    );
    const data = await response.json();
    setWeather(data); // Assuming data structure without validation

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() === '') {
      alert('Location cannot be empty!');
      // Missing return, so it will still attempt to fetch weather even after alert
    }
    fetchWeather();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}

      {/* Potential error: accessing weather data before it's fully fetched */}
      {weather && (
        <div>
          <h2>Weather in {weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p> {/* Assuming temp_c exists */}
        </div>
      )}

      {/* Logic issue: No message displayed when there's no weather data */}
    </div>
  );
};

// No export statement
