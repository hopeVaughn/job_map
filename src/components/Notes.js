import React, { useState } from "react";
import styled from "styled-components";

function Notes() {
  const fakeNotes = [
    {
      timestamp: 1669262514,
      text: "No need to run No need to runNo need to runNo need to runNo need to runNo need to runNo need to runNo need to runNo need to run No need to runNo need to runNo need to runNo need to runNo need to runNo need to runNo need to runNo need to run",
    },
    { timestamp: 1669262915, text: "and hide," },
    { timestamp: 1669272516, text: "it's a wonderful," },
    { timestamp: 1669362514, text: "wonderful life" },
    { timestamp: 1669262514, text: "No need to run" },
    { timestamp: 1669262915, text: "and hide," },
    { timestamp: 1669272516, text: "it's a wonderful," },
    { timestamp: 1669362514, text: "wonderful life" },
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

          {notes.map((note, key) => (
            <div className="note" key={key}>
              <span className="note-date">
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
  padding 0 5px;
  width: 6em;
  min-width: 6em;
  height: 1.6em;
}
.new-note {
  background-color: #b1b7c4;
}
`;

export default Notes;