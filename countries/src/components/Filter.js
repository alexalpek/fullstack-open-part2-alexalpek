import React from "react";

const Filter = ({ setFiltered, setFilterWord }) => {
    const handleFilterSubmit = (event) => {
        let filterWord = event.target.value;
        setFilterWord(filterWord);
        if (filterWord === "") {
            setFiltered(false);
        } else {
            setFiltered(true);
        }
    };

    return (
        <div>
            find countries
            <input
                onChange={(event) => handleFilterSubmit(event, setFilterWord)}
            />
        </div>
    );
};

export default Filter;
