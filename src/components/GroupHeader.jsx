/* eslint-disable react/prop-types */

import Add from "../assets/add.svg";
import Dots from "../assets/3 dot menu.svg";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Board.css";
import Icon from "./Icon";

export default function GroupHeader({ name, id }) {
  const { state } = useContext(AppContext);
  return (
    <div className="group-header roboto-regular">
      <div className="header-section">
        <Icon id={id} />
        <p>{name}</p>
        <span>{state.data[id]?.length || 0}</span>
      </div>
      <div className="header-section">
        <img src={Add} alt="add" />
        <img src={Dots} alt="dots" />
      </div>
    </div>
  );
}
