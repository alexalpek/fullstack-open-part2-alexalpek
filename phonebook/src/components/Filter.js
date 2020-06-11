import React from "react";

const Filter = ({ setFiltered, setFilterWord }) => {
    const handleFilterSubmit = (event) => {
        setFilterWord(event.target.value);
        setFiltered(true);
    };

    return (
        <div>
            filter shown with
            <input
                onChange={(event) => handleFilterSubmit(event, setFilterWord)}
            />
        </div>
    );
};

export default Filter;
