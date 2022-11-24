import React, { useState } from "react";
import styled from 'styled-components';


function Notes() {
  const fakeNotes = [    
    {timestamp: 1669262514, text: "No need to run"},
    {timestamp: 1669262915, text: "and hide,"},
    {timestamp: 1669272516, text: "it's a wonderful,"},
    {timestamp: 1669362514, text: "wonderful life"},
    {timestamp: 1669262514, text: "No need to run"},
    {timestamp: 1669262915, text: "and hide,"},
    {timestamp: 1669272516, text: "it's a wonderful,"},
    {timestamp: 1669362514, text: "wonderful life"},
  ];

  const [showAdd, setShowAdd] = useState(false);

  return (
    <Wrapper>
      <div className="notes-component">
        <h5>Historic</h5>

        <div className="notes-container">
          {showAdd && <input type="text" id="typeText" className="form-control input" placeholder="Add Note"/>}
          {fakeNotes.map((note) =>
            <div className="note">
              <span className="note-date">{new Date(note.timestamp).toISOString().split('T')[0]}</span>
              <span>{note.text}</span>
            </div> 
          )}
        </div>

        <button 
          className="btn"
          onClick={() => setShowAdd(!showAdd)}
        >{showAdd ? 'Save Note' : 'Add New Note'}</button>
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
}

.notes-component {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.note {
  width: 100%;
  background-color: #69822f;
  color: white;
  margin: 2px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row; 

}

.note-date {
  background-color: #854803;
  border-radius: 10px;
  margin: 2px 7px;
  padding 0 5px;
}

`

export default Notes;
