import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useClickCount from "./custom-hooks/useClickCount";
import DivEntry from "./DivEntry";
import LocalStorage from "./LocalStorage";

function App() {
  const [countBlue, handleBlueClick] = useClickCount();
  const [countGreen, handleGreenClick] = useClickCount();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button style={{ background: "blue" }} onClick={handleBlueClick}>
          count is {countBlue}
        </button>
        <button style={{ background: "green" }} onClick={handleGreenClick}>
          count is {countGreen}
        </button>
        <DivEntry />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <LocalStorage/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
