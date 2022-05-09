import React from "react";
import Editor from "./components/Editor";
import EmptyNotes from "./components/EmptyNotes";
import Sidebar from "./components/Sidebar";
import notesData from "./notesdata";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesData));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your note here",
    };
    setNotes((prevArray) => [newNote, ...prevArray]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  if (notes.length === 0) {
    return <EmptyNotes newNote={createNewNote} />;
  }
  return (
    <main>
      <Split sizes={[30, 70]} direction='horizontal' className='split'>
        <Sidebar
          notes={notes}
          currentNote={findCurrentNote()}
          setCurrentNoteId={setCurrentNoteId}
          newNote={createNewNote}
          deleteNote={deleteNote}
        />
        {currentNoteId && notes.length > 0 && (
          <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
        )}
      </Split>
    </main>
  );
}
