import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { FaRegEdit, FaRegCheckSquare } from "react-icons/fa";
import { MdDeleteOutline, MdClose } from "react-icons/md";

function NoteElement(props) {
  const note = props.note;

  const [noteText, setNoteText] = useState(props.note.note);
  const [noteMode, setNoteMode] = useState("showText");

  const editNote = () => {
    setNoteMode("edit");
  };

  const data = { note: noteText };

  const saveNote = () => {
    Axios.put(`http://localhost:8080/api/applications/notes/${note.id}`, data)
      .then((res) => {
        setNoteMode("showText");
        console.log("reeeeees", res);
      })
      .catch((err) => {
        alert(err.message || "Network error");
        console.log(err);
      });
  };

  const deleteNote = () => {
    Axios.delete(`http://localhost:8080/api/applications/notes/${note.id}`)
      .then((res) => {
        props.removeNoteById(note.id);
        console.log("reeeeees", res);
      })
      .catch((err) => {
        alert(err.message || "Network error");
        console.log(err);
      });
  };

  return (
    <Wrapper className="wrap-note">
      <div className={`note ${noteMode === "delete" && "red" } ${noteMode === "edit" && "blue" }`}>
        <span className="note-date">
          {Date(note.timestamp).toString().split(" ").slice(1, 4).join("-")}
        </span>

        {noteMode === "showText" && (
          <div className="note-show-wrapper">
            <span className="note-text">{noteText}</span>
            <div className="note-buttons">
              <button className="button-toggle" onClick={editNote}>
                <FaRegEdit />
              </button>

              <button
                className="button-toggle"
                onClick={() => setNoteMode("delete")}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        )}

        {noteMode === "edit" && (
          <div className="note-show-wrapper">
            <input
              type="text"
              name="note"
              id="typeText"
              className="input"
              value={noteText}
              onChange={(event) => setNoteText(event.target.value)}
            />
            <button onClick={saveNote}>save</button>
          </div>
        )}

        {noteMode === "delete" && (
          <div className="note-show-wrapper">
            <span className="delete-confirmation">Delete the note?</span>
            <div className="note-buttons">
              
              <button className="button-toggle" onClick={deleteNote}>
                Delete
              </button>

              <button className="button-toggle" onClick={() => setNoteMode("showText")}>
                Cancel
              </button>
              
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  height: 6vh;
}

  .red {
    background-color: #ee5253 !important;
    
  }

  .blue {
    background-color: #829ab1 !important;    
  }
  .note-date {
    background-color: #ae88d1;
    border-radius: 10px;
    margin: 2px 7px;
    padding: 0 0.5em;
    min-width: 7em;
    height: 1.6em;
  }

  .note-buttons {
    display: flex;
    flex-direction: row;
  }

  .note-text {
    width: 70%;
  }

  .note-show-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  
  .button-toggle {
    font-size: 1.2rem;
    color: var(--clr-black);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    margin 0 5px;
    
  }
  .button-toggle:hover {
    color: var(--clr-red-dark);
    font-size: 1.7rem;
  }
  
  .delete-confirmation {
    text-align: center;
    width: 70%;
  }
`;

export default NoteElement;
