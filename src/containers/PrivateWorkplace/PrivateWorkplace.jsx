import React, { useState } from "react";
import "./Workplace.scss";

import CreateArea from "./CreateArea";
import Note from "./Note";
import Count from "./Count";
import PrivateSidebar from "../PrivateHeader/PrivateSidebar";

function App(props) {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevValue) => {
            return [...prevValue, newNote];
        });
    }

    function deleteNotes(id) {
        setNotes((preValue) => {
            return [...preValue.filter((note, index) => index !== id)];
        });
    }
    return (
        <div style={{ width: "100%" }}>
            <div className="header">
                <img src="photos/homebox.png" alt="homebox-logo" style={{ width: "50px" }} />
                <h3>Homebox</h3>
            </div>
            <div className="private-workplace">
                <Count
                    count={
                        notes.length === 0
                            ? "No Notes"
                            : `Showing ${notes.length} Notes`
                    }
                />
                <CreateArea onAdd={addNote} />
                {notes.map((note, index) => (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNotes}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;