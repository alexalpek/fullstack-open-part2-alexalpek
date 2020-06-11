import React from "react";

const Persons = ({ filtered, persons, filterWord }) => {
    const personsToShow = filtered
        ? persons.filter((person) =>
              person.name.toLowerCase().includes(filterWord.toLowerCase())
          )
        : persons;

    return (
        <div>
            {personsToShow.map((person) => (
                <div key={person.name}>
                    {person.name} {person.number}
                </div>
            ))}
        </div>
    );
};

export default Persons;
