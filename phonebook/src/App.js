import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Title from "./components/Title";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
    ]);
    const [newName, setNewName] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [filterWord, setFilterWord] = useState("");
    const [filtered, setFiltered] = useState(false);

    return (
        <div>
            <Title text="Phonebook" />
            <Filter setFiltered={setFiltered} setFilterWord={setFilterWord} />
            <Title text="add a new" />
            <PersonForm
                setNewName={setNewName}
                setNewPhoneNumber={setNewPhoneNumber}
                persons={persons}
                newName={newName}
                newPhoneNumber={newPhoneNumber}
                setPersons={setPersons}
            />
            <Title text="Numbers" />
            <Persons
                filtered={filtered}
                filterWord={filterWord}
                persons={persons}
            />
        </div>
    );
};

export default App;
