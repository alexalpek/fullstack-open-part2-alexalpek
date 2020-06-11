import React, { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

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
            };
            setPersons(persons.concat(nameToAdd));
        }
    };

    const handleChange = (event) => {
        setNewName(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map((person) => (
                    <div key={person.name}>{person.name}</div>
                ))}
            </div>
        </div>
    );
};

export default App;
