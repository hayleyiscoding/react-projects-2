export default function Sidebar(props) {
  const notesElements = props.notes.map((note, index) => (
    <li
      className={`aside--note flex align-center justify-between' ${
        note.id === props.currentNote.id ? "selected-note" : ""
      }`}
      key={note.id}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      <h3 className='aside--note--title flex-75'>{note.body.split("\n")[0]}</h3>
      <div
        className='aside--note--delete flex-5'
        onClick={(event) => props.deleteNote(event, note.id)}
      >
        <div
          className={`trash-solid icon ${
            note.id === props.currentNote.id ? "selected-note-icon" : ""
          }`}
        ></div>
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
