import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        <a href="http://localhost:6006/" target={"_blank"} style={{ textDecoration: 'none' }}>
          <span style={{ color: "#9789e5" }}>co</span>mpoaktion
        </a>
      </h1>
    </div>
  );
}

export default App;
