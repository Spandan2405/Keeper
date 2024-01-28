import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    // Doubt 9.06
    setNote((prevValue) => {
      if (name === "title")
        return {
          title: value,
          content: prevValue.content,
        };
      else if (name === "content")
        return {
          title: prevValue.title,
          content: value,
        };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
