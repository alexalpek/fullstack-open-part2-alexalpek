import React from "react";
import Weather from "./Weather.js";

const CountryInfo = ({ countryData }) => {
    return (
        <div>
            <h2>{countryData.name}</h2>
            <div>capital {countryData.capital}</div>
            <div>population {countryData.population}</div>
            <h2>languages</h2>
            <ul>
                {countryData.languages.map((language) => (
                    <li key={language.name}>{language.name}</li>
                ))}
            </ul>
            <div>
                <img src={countryData.flag} alt="" style={{ width: "150px" }} />
            </div>
            <Weather capitalName={countryData.capital} />
        </div>
    );
};

export default CountryInfo;
