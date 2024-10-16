import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import DisplayButton from "./components/DisplayButton";
import DisplayOptions from "./components/DisplayOptions";
import AppContextProvider from "./context/appContext";
export default function App() {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <AppContextProvider>
      <div
        id="container"
        onClick={(e) => {
          if (!e.target.closest("#display-options") && toggleBtn) {
            setToggleBtn(false);
          }
        }}
      >
        <div id="display-container">
          <DisplayButton setToggleBtn={setToggleBtn} />
          {toggleBtn && <DisplayOptions />}
        </div>
        <Board />
      </div>
    </AppContextProvider>
  );
}
