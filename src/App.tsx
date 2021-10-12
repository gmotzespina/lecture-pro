import "./App.css";
import PDFViewer from "./components/pdf-viewer";

function App() {
  return (
    <div className="sidebar">
      <header className="App-header">
        <p>This is my chrome extension</p>
        <PDFViewer />
      </header>
    </div>
  );
}

export default App;
