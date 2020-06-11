import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Title from "./components/Title";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [filterWord, setFilterWord] = useState("");
    const [filtered, setFiltered] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((response) => {
            setPersons(response.data);
        });
    }, []);

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
