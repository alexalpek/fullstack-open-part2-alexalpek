import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Result from "./components/Result";

function App() {
    const [countries, setCountries] = useState([]);
    const [filterWord, setFilterWord] = useState("");
    const [filtered, setFiltered] = useState(false);

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => {
            setCountries(response);
        });
    }, []);

    return (
        <div>
            <Filter setFilterWord={setFilterWord} setFiltered={setFiltered} />
            <Result
                filtered={filtered}
                filterWord={filterWord}
                countries={countries}
            />
        </div>
    );
}

export default App;
