import React from "react";
import phonebookService from "../services/phonebookService";

const PersonForm = ({
    setNewName,
    setNewPhoneNumber,
    persons,
    newName,
    newPhoneNumber,
    setPersons,
    setNotificationMessage,
    setIsError,
}) => {
    const nameAlreadyInPhonebook = (name) => {
        const result = persons.filter((person) => person.name === name);
        return result.length !== 0;
    };

    const displayNotification = (message, error = false) => {
        setNotificationMessage(message);
        setTimeout(() => {
            setNotificationMessage(null);
            if (error) {
                setIsError(false);
            }
        }, 5000);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nameAlreadyInPhonebook(newName)) {
            if (
                window.confirm(
                    `${newName} is already in the phonebook, replace the old number with a new one?`
                )
            ) {
                const currentDataOfPerson = persons.find(
                    (person) => person.name === newName
                );
                const newPerson = {
                    ...currentDataOfPerson,
                    number: newPhoneNumber,
                };
                phonebookService
                    .update(currentDataOfPerson.id, newPerson)
                    .then(
                        setPersons(
                            persons.map((p) =>
                                p.id === currentDataOfPerson.id ? newPerson : p
                            )
                        )
                    )
                    .then(
                        displayNotification(
                            `${newPerson.name}'s phone number is changed.`
                        )
                    )
                    .catch((e) => {
                        setIsError(true);
                        displayNotification(
                            `Information of ${newPerson.name} has been already removed from the server`,
                            true
                        );
                        setPersons(
                            persons.filter(
                                (person) => person.id !== newPerson.id
                            )
                        );
                    });
            }
        } else {
            const nameToAdd = {
                name: newName,
                number: newPhoneNumber,
            };
            phonebookService
                .create(nameToAdd)
                .then((person) => setPersons(persons.concat(person)))
                .then(displayNotification(`${nameToAdd.name} is created.`))
                .catch((error) => console.log(error));
        }
    };

    const handleChange = (event, handler) => {
        handler(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name:
                <input onChange={(event) => handleChange(event, setNewName)} />
                <div>
                    number:
                    <input
                        onChange={(event) =>
                            handleChange(event, setNewPhoneNumber)
                        }
                    />
                </div>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;
