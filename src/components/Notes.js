import React, { useState } from "react";
import styled from "styled-components";

function Notes() {


  // the api call to the back to create a note needs to send the time stamp info as in integer
  const fakeNotes = [
    {
      id: 1,
      timestamp: 1669262514,
      text: "No need to run No need to runNo need to runNo need to runNo need to runNo need to runNo need to runNo need to runNo need to run No need to runNo need to runNo need to runNo need to runNo need to runNo need to runNo need to runNo need to run",
    },
    { id: 2, timestamp: 1669262915, text: "and hide," },
    { id: 3, timestamp: 1669272516, text: "it's a wonderful," },
    { id: 4, timestamp: 1669362514, text: "wonderful life" },
    { id: 5, timestamp: 1669262514, text: "No need to run" },
    { id: 6, timestamp: 1669262915, text: "and hide," },
    { id: 7, timestamp: 1669272516, text: "it's a wonderful," },
    { id: 8, timestamp: 1669362514, text: "wonderful life" },
  ];

  const [notes, setNotes] = useState(fakeNotes);
  const [showAdd, setShowAdd] = useState(false);
  const [newNote, setNewNote] = useState("");

  const saveClicked = () => {

    setShowAdd(false);
    if (!newNote) return;
    setNotes([{ timestamp: Date.now(), text: newNote }, ...notes]);
    setNewNote("");
  };

  const addNewNoteClicked = () => {
    setShowAdd(true)
  }

  return (
    <Wrapper>
      <div className="notes-component">
        <h5>Historic</h5>

        <div className="notes-container">
          {showAdd && (
            <div className="note new-note">
              <span className="note-date">
                {new Date().toISOString().split("T")[0]}
              </span>
              <input
                type="text"
                name="note"
                id="typeText"
                className="input"
                placeholder="Add Note"
                onChange={(event) => setNewNote(event.target.value)}
              />
            </div>
          )}
          {/* the return here needs to use the id on the children that are being rendered */}
          {notes.map((note, key) => (
            <div className="note" key={key}>
              <span className="note-date">
                {/* the time stap being rendered here needs to come from the back end as an integer and be rendered here as a readable date */}
                {new Date(note.timestamp).toISOString().split("T")[0]}
              </span>
              <span>{note.text}</span>
            </div>
          ))}
        </div>

        <button className="btn"
          onClick={() =>
            showAdd ? saveClicked() : addNewNoteClicked()
          }>
          {showAdd ? "Save Note" : "Add New Note"}
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.notes-container {
  height: 30vh;
  background-color: #9aa69c;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4px;
  overflow-y: scroll;  
  overflow-x: hidden;
  &::-webkit-scrollbar { width: 0.4em; }
    &::-webkit-scrollbar-track { background: #9aa69c; }
    &::-webkit-scrollbar-thumb { background: grey; }
    &::-webkit-scrollbar-thumb:hover { background: white; }
}
.input {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
}
.notes-component {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note {
  width: 100%;
  background-color: #c5d0e6;
  color: black;
  margin: 2px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}
.note-date {
  background-color: #ae88d1;
  border-radius: 10px;
  margin: 2px 7px;
  padding: 0 5px;
  width: 6em;
  min-width: 6em;
  height: 1.6em;
}
.new-note {
  background-color: #b1b7c4;
}
`;

export default Notes;