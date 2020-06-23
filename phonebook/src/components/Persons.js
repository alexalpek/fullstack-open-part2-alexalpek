import React from "react";
import phonebookService from "../services/phonebookService";

const Persons = ({
    filtered,
    persons,
    filterWord,
    setPersons,
    setNotificationMessage,
    setIsError,
}) => {
    const personsToShow = filtered
        ? persons.filter((person) =>
              person.name.toLowerCase().includes(filterWord.toLowerCase())
          )
        : persons;

    const displayNotification = (message, error = false) => {
        setNotificationMessage(message);
        setTimeout(() => {
            setNotificationMessage(null);
            if (error) {
                setIsError(false);
            }
        }, 5000);
    };

    const deleteHandler = (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            phonebookService
                .deletePerson(person.id)
                .then(setPersons(persons.filter((p) => p.id !== person.id)))
                .then(displayNotification(`${person.name} is deleted.`))
                .catch((e) => {
                    setIsError(true);
                    displayNotification(
                        `Information of ${person.name} has been already removed from the server`,
                        true
                    );
                });
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
