import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Title from "./components/Title";
import phonebookService from "./services/phonebookService";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [filterWord, setFilterWord] = useState("");
    const [filtered, setFiltered] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        phonebookService
            .getAll()
            .then((data) => setPersons(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Title text="Phonebook" />
            <Notification message={notificationMessage} isError={isError} />
            <Filter setFiltered={setFiltered} setFilterWord={setFilterWord} />
            <Title text="add a new" />
            <PersonForm
                setNewName={setNewName}
                setNewPhoneNumber={setNewPhoneNumber}
                persons={persons}
                newName={newName}
                newPhoneNumber={newPhoneNumber}
                setPersons={setPersons}
                setNotificationMessage={setNotificationMessage}
                setIsError={setIsError}
            />
            <Title text="Numbers" />
            <Persons
                filtered={filtered}
                filterWord={filterWord}
                persons={persons}
                setPersons={setPersons}
                setNotificationMessage={setNotificationMessage}
                setIsError={setIsError}
            />
        </div>
    );
};

export default App;
