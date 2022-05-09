export default function EmptyNotes(props) {
  return (
    <div className='no_notes'>
      <h1 className='no_notes--text'>You have no notes</h1>
      <button className='no_notes--button' onClick={props.newNote}>
        Create one now
      </button>
    </div>
  );
}
