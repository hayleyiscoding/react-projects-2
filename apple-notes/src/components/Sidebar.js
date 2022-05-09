import Note from "./Note";

export default function Sidebar() {
  return (
    <aside className='aside'>
      <div className='aside--header flex align-center'>
        <h2 className='aside--header--title'>Notes</h2>
        <button className='aside--header--button'>+</button>
      </div>

      <ul className='aside--notes flex column align-around'>
        <Note />
        <Note />
        <Note />
        <Note />
      </ul>
    </aside>
  );
}
