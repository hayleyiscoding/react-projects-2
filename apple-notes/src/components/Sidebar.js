import { FaTrash } from "react-icons/fa";

export default function Sidebar(props) {
  const notesElements = props.notes.map((note, index) => (
    <li
      className={`aside--note flex align-center' ${
        note.id === props.currentNote.id ? "selected-note" : ""
      }`}
      key={note.id}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      <h3 className='aside--note--title flex-75'>
        {note.body.replace(/[^a-zA-Z ]/g, "").split("\n")[0]}
      </h3>
      <div
        className='aside--note--delete flex-25 text-center'
        onClick={(event) => props.deleteNote(event, note.id)}
      >
        <FaTrash />
      </div>
    </li>
  ));
  return (
    <aside className='aside'>
      <div className='aside--header flex align-center'>
        <h2 className='aside--header--title'>Notes</h2>
        <button className='aside--header--button' onClick={props.newNote}>
          +
        </button>
      </div>

      <ul className='aside--notes flex column align-around'>{notesElements}</ul>
    </aside>
  );
}
