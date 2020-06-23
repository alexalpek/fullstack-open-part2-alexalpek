import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capitalName }) => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);

    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios
            .get(
                `http://api.weatherstack.com/current?access_key=${apiKey}&query=${capitalName}`
            )
            .then((response) => {
                setWeather(response.data.current);
                setLoading(false);
            });
    }, [apiKey, capitalName]);

    if (loading) {
        return <div>loading...</div>;
    }
    return (
        <div>
            <h2>Weather in {capitalName}</h2>
            <div>
                <b>temperature</b> {weather.temperature} Celsius
            </div>
            <img src={weather.weather_icons[0]} alt="" />
            <div>
                <b>wind</b> {weather.wind_speed} mph {weather.wind_dir}
            </div>
        </div>
    );
};

export default Weather;
