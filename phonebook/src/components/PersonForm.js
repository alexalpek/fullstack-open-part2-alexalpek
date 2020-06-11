import React from "react";

const PersonForm = ({
    setNewName,
    setNewPhoneNumber,
    persons,
    newName,
    newPhoneNumber,
    setPersons,
}) => {
    const nameAlreadyInPhonebook = (name) => {
        const result = persons.filter((person) => person.name === name);
        return result.length !== 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nameAlreadyInPhonebook(newName)) {
            alert(`${newName} is already added to phonebook!`);
        } else {
            const nameToAdd = {
                name: newName,
                number: newPhoneNumber,
            };
            setPersons(persons.concat(nameToAdd));
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
