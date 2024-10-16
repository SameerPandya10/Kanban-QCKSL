/* eslint-disable react/prop-types */
import display from "../assets/Display.svg";
import down from "../assets/down.svg";
import "./DisplayButton.css";

export default function DisplayButton({ setToggleBtn }) {
  return (
    <button
      type="button"
      id="display-btn"
      onClick={() => setToggleBtn((prev) => !prev)}
    >
      <img src={display} alt="display-icon" id="display-svg" />
      <span className="roboto-medium">Display</span>
      <img src={down} alt="down-icon" id="down-svg" />
    </button>
  );
}
