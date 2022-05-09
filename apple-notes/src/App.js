import Editor from "./components/Editor";
import EmptyNotes from "./components/EmptyNotes";
import Sidebar from "./components/Sidebar";
import notesData from "./notesdata";
import Split from "react-split";

export default function App() {
  if (notesData.length === 0) {
    return <EmptyNotes />;
  }
  return (
    <main>
      <Split sizes={[30, 70]} direction='horizontal' className='split'>
        <Sidebar />
        <Editor />
      </Split>
    </main>
  );
}
