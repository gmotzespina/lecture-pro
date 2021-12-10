import "./App.css";
import WebViewer from "@pdftron/pdfjs-express-viewer";
import { useEffect, useRef, useState } from "react";

interface CoreInstance {
  clearSearchResults: () => null;
  UI: {
    searchTextFull: (pattern: String, options?: any) => null;
  };
}

function App() {
  const viewer = useRef(null);
  const [coreInstance, setCoreInstance] = useState<CoreInstance>();
  const [UIInstance, setUIInstance] = useState<any>();

  // const docViewer = new DocumentViewer();

  useEffect(() => {
    WebViewer(
      {
        path: "webviewer/lib",
        initialDoc: "assets/book.pdf",
        licenseKey: "ThTZn5MlPR1UiopS0hmK",
      },
      viewer.current
    ).then((instance) => {
      // now you can access APIs through the WebViewer instance
      const { Core, UI } = instance;

      setCoreInstance(Core.documentViewer);
      setUIInstance(UI);

      Core.documentViewer.zoomTo(1, 0, 0);
      // adding an event listener for when a document is loaded
      Core.documentViewer.addEventListener("documentLoaded", () => {
        console.log("document loaded");
      });
    });
  }, []);

  const onClearSearchResults = () => {
    if (coreInstance) {
      coreInstance.clearSearchResults();
    }
  };

  const onSearch = () => {
    if (coreInstance) {
      console.log(
        UIInstance.searchTextFull("Text Information Systems", {
          caseSensitive: true,
        })
      );
    }
  };

  return (
    <div className="container">
      <div className="reading-title">
        <h1>Text Information Systems</h1>
      </div>
      <div className="sidebar">
        <header className="App-header">
          <p className="extension-header">This is my chrome extension</p>
          <button onClick={onClearSearchResults}>clearSearchResults</button>
          <button onClick={onSearch}>perform search</button>
        </header>
        <div className="webviewer" ref={viewer}></div>
      </div>
    </div>
  );
}

export default App;
