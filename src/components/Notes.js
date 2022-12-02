import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import NoteElement from "./NoteElement";

function Notes(props) {
  const applicationID = props.applicationID;

  // the api call to the back to create a note needs to send the time stamp info as in integer

  const [notes, setNotes] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newNote, setNewNote] = useState("");

  //fetch all notes related to a given application
  useEffect(() => {
    Axios.get(
      `http://localhost:8080/api/applications/${applicationID}/notes`
    ).then((res) => {
      setNotes(res.data);
    });
  }, []);

  const removeNoteById = (id) => {
    const newNotes = notes.filter((el) => el.id !== id);
    setNotes(newNotes);
  };

  const saveClicked = () => {
    setShowAdd(false);
    if (!newNote) return;

    setNewNote("");
    const data = { note: newNote };

    //post new note related to a given application
    Axios.post(
      `http://localhost:8080/api/applications/${applicationID}/notes`,
      data
    )
      .then((res) => {
        const { id, timestamp, note } = res.data[0];
        setNotes([{ id: id, timestamp: timestamp, note: note }, ...notes]);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //focus a cursor in the input field if it appears
  useEffect(() => {
    if (!showAdd) return;
    document.getElementById("typeText").focus();
  }, [showAdd]);

  const addNewNoteClicked = () => {
    setShowAdd(true);
  };

  return (
    <Wrapper className="notes-component-wrapper">
      <div className="notes-component">
        <h3>Notes</h3>

        <button
          className="btn"
          onClick={() => (showAdd ? saveClicked() : addNewNoteClicked())}
        >
          {showAdd ? "Save Note" : "Add New Note"}
        </button>

        <div className="notes-container">
          {showAdd && (
            <div className="note new-note">
              <span className="note-date">
                {Date(Date.now()).toString().split(" ").slice(1, 4).join("-")}
              </span>
              <input
                type="text"
                name="note"
                id="typeText"
                className="input"
                placeholder="Add Note"
                autoComplete="off"
                onChange={(event) => setNewNote(event.target.value)}
              />
            </div>
          )}

          {notes.map((note) => (
            <NoteElement
              note={note}
              key={note.id}
              removeNoteById={removeNoteById}
            />
          ))}
          {notes.length === 0 && !showAdd && (
            <p className="no-notes-message">There are no notes yet, click the button above to add first!</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`

  .notes-component {
    font-family: 'Delight Coffee', sans-serif;
    color: var(--clr-complement-1);
    font-size:2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    background: rgb(35, 6, 51);
    padding: 2vh 0;
    border-radius: 5px;
    width: 100vw;
}
  .notes-container {
    background: rgb(35, 6, 51);
    height: 30vh;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
    padding: 50px;

    padding: 0 4px;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.8em;
      border-radius: 10px;

    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #334e68;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #F18805;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: white;
    }
  }

  .no-notes-message {
    width: 100%;
    height: 80%;
    text-align: center;
    padding: 13vh 0;
    font-size: 1.4rem;
    background: rgb(35, 6, 51);
  }

  .input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #102a43;
    min-height: 6vh;
    font-size: 1.4rem;
  }

  .note {
    width: 100%;
    background-color: #bcccdc;
    color: black;
    margin: 2px 0;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: min(3vh, 3vw);
    min-height: 6vh;
  }

  .note-date {
    background-color: #F18805;
    border-radius: 10px;
    margin: 2px 7px;
    padding: 0 0.5em;
    min-width: 7em;
    height: 1.6em;
  }
  .new-note {
    background-color: #b1b7c4;
  }
  .wrap-note {
    width: 100%;
  }
  .btn{
    font-size:1.5rem;
  }
`;

export default Notes;
