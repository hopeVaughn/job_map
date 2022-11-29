import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { FaRegEdit} from 'react-icons/fa'
import { MdDeleteOutline} from 'react-icons/md'



function NoteElement(props) {
  const note = props.note;

  const [noteText, setNoteText] = useState(props.note.note);
  const [editMode, setEditMode] = useState(false);

  const editNote = () => {
    setEditMode(true);
  };

  const data = { note: noteText };

  const saveNote = () => {
    Axios.put(
      `http://localhost:8080/api/applications/notes/${note.id}`,
      data
    ).then((res) => {
      setEditMode(false);
      console.log("reeeeees", res);
    })
    .catch(err => {
      alert(err.message || "Network error");
      console.log(err);
    })     
    
  };

  const deleteNote = () => {
    Axios.delete(
      `http://localhost:8080/api/applications/notes/${note.id}`
      
    ).then((res) => {
      props.removeNoteById(note.id)
      console.log("reeeeees", res);
    })
    .catch(err => {
      alert(err.message || "Network error");
      console.log(err);
    })

  }

  return (
    <Wrapper className="wrap-note">
    <div className="note">
      <span className="note-date">
        {Date(note.timestamp).toString().split(" ").slice(1, 4).join("-")}
      </span>

      {!editMode && (
        <div className="note-show-wrapper">
          <span className="note-text">{noteText}</span>
          <div className="note-buttons">      
            <FaRegEdit onClick={editNote} />          
            <MdDeleteOutline onClick={deleteNote}/>
          </div>

        </div>
      )}

      {editMode && (
        <div>
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
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`

.note {
  width: 100%;
  background-color: #c5d0e6;
  color: black;
  margin: 2px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;  
  align-items: center;
  font-size: min(2vh, 2vw);
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
`

export default NoteElement;
