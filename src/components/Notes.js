import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from 'axios';

function Notes(props) {

  const applicationID = props.applicationID;

  // the api call to the back to create a note needs to send the time stamp info as in integer

  const [notes, setNotes] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:8080/api/applications/${applicationID}/notes`).then((res) => {


      setNotes(res.data)

    })
  }, []);

  const saveClicked = () => {

    setShowAdd(false);
    if (!newNote) return;

    setNewNote("");
    const data = { note: newNote }

    Axios.post(`http://localhost:8080/api/applications/${applicationID}/notes`, data).then((res) => {
      console.log("reeeeees", res);
      const { id, timestamp, note } = res.data[0];
      setNotes([{ id: id, timestamp: timestamp, note: note }, ...notes]);
    })
  };

  const addNewNoteClicked = () => {
    setShowAdd(true)
  }

  return (
    <Wrapper>
      <div className="notes-component">
        <h5>Notes</h5>

        <div className="notes-container">
          {showAdd && (
            <div className="note new-note">
              <span className="note-date">
                {Date(Date.now()).toString().split(" ").slice(1, 4).join('-')}
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

          {notes.map((note) => (
            <div className="note" key={note.id}>
              <span className="note-date">
                {Date(note.timestamp).toString().split(" ").slice(1, 4).join('-')}
              </span>
              <span>{note.note}</span>
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
  font-size: min(2vh, 2vw)
}
.note-date {
  background-color: #ae88d1;
  border-radius: 10px;
  margin: 2px 7px;
  padding: 0 0.5em;
  min-width: 7em;
  height: 1.6em;
}
.new-note {
  background-color: #b1b7c4;
}
`;

export default Notes;