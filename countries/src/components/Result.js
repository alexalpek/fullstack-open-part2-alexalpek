import React from "react";
import CountryInfo from "./CountryInfo";

const Result = ({
    filtered,
    filterWord,
    countries,
    showCountry,
    setShowCountry,
}) => {
    const countriesToShow = filtered
        ? countries.data.filter((country) =>
              country.name.toLowerCase().includes(filterWord.toLowerCase())
          )
        : countries.data;

    const handleClick = (country) => {
        setShowCountry(country);
    };

    if (filtered === false) {
        return <div />;
    }

    if (showCountry !== null) {
        return <CountryInfo countryData={showCountry} />;
    }

    if (countriesToShow.length > 10) {
        return <div>Too many matches, please specify another filter</div>;
    } else if (countriesToShow.length < 10 && countriesToShow.length > 1) {
        return (
            <div>
                {countriesToShow.map((country) => (
                    <div
                        key={`${country.name}-div`}
                        style={{ display: "flex" }}
                    >
                        <div key={country.name}>{country.name} </div>
                        <button
                            key={`${country.name}button`}
                            onClick={() => handleClick(country)}
                        >
                            show
                        </button>
                    </div>
                ))}
            </div>
        );
    } else if (countriesToShow.length === 1) {
        return <CountryInfo countryData={countriesToShow[0]} />;
    } else {
        return <div>Nothing found.</div>;
    }
};

export default Result;
