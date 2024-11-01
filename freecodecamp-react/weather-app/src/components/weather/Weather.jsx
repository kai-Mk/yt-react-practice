import React, { useEffect, useState } from "react";
import Search from "../search/Search";

const Weather = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async (param) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=4858cac6e52bd7dcf375ef5c4c86891b`
            );
            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleSearch = () => {
        fetchWeatherData(search);
    };

    const getCurrentDate = () => {
        return new Date().toLocaleDateString("en-us", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    useEffect(() => {
        fetchWeatherData("japan");
    }, []);

    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2);
    };

    return (
        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div>
                    <div className="city-name">
                        <h2>
                            {weatherData?.name},&nbsp;
                            <span>{weatherData?.sys?.country}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{getCurrentDate()}</span>
                    </div>
                    <div className="temp">
                        {kelvinToCelsius(weatherData?.main?.temp)}℃
                    </div>
                    <p className="description">
                        {weatherData &&
                        weatherData.weather &&
                        weatherData.weather[0]
                            ? weatherData.weather[0].description
                            : ""}
                    </p>
                    <div className="weather-info">
                        <div className="column">
                            <div>
                                <p className="wind">
                                    {weatherData?.wind?.speed}m/s
                                </p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <p className="humidity">
                                    {weatherData?.main?.humidity}%
                                </p>
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
