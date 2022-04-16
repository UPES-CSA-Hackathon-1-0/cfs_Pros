import React from "react";

const TakeNote = ({ state, ...actions }) => {
  return (
    <div>
      {state.visible === false ? (
        <div className="take-notes1">
          <input
            type="text"
            placeholder="File a ticket ..."
            onClick={actions.handleClick}
            className="initial"
            value={state.notes.title}
            onChange={() => null}
          />
        </div>
      ) : (
        <div className="take-notes2">
          <input
            type="text"
            value={state.notes.title}
            placeholder="Title of the ticket"
            className="title"
            onChange={(e) => actions.handleChangeNote(e.target.value, "title")}
            style={{ fontSize: "24px" }}
          />
          <br></br>
          <input
            type="text"
            value={state.notes.input}
            placeholder="Description of the ticket"
            onChange={(e) => actions.handleChangeNote(e.target.value, "input")}
            className="take-note"
            autoFocus="autofocus"
          />

          <div className="add-button">
            <button onClick={actions.addToNotes}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TakeNote;
