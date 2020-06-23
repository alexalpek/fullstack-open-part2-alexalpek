import React from "react";
import phonebookService from "../services/phonebookService";

const Persons = ({ filtered, persons, filterWord, setPersons }) => {
    const personsToShow = filtered
        ? persons.filter((person) =>
              person.name.toLowerCase().includes(filterWord.toLowerCase())
          )
        : persons;

    const deleteHandler = (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            phonebookService
                .deletePerson(person.id)
                .then(setPersons(persons.filter((p) => p.id !== person.id)));
        }
    };

    return (
        <div>
            {personsToShow.map((person) => (
                <div key={person.name}>
                    {person.name} {person.number}{" "}
                    <button onClick={() => deleteHandler(person)}>
                        delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Persons;
