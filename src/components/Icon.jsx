/* eslint-disable react/prop-types */
import Backlog from "../assets/Backlog.svg";
import Cancelled from "../assets/Cancelled.svg";
import Done from "../assets/Done.svg";
import Highprt from "../assets/Img - High Priority.svg";
import Urgprtclr from "../assets/SVG - Urgent Priority colour.svg";
import Urgprtgrey from "../assets/SVG - Urgent Priority grey.svg";
import Todo from "../assets/To-do.svg";
import Inprogress from "../assets/in-progress.svg";
import Noprt from "../assets/No-priority.svg";
import Lowprt from "../assets/Img - Low Priority.svg";
import Medprt from "../assets/Img - Medium Priority.svg";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Board.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Icon({ id, purpose = "header", extraData = null }) {
  const { state } = useContext(AppContext);
  let icon = null;
  let avail = null;
  let init = "";
  if (state.group === "status" && purpose === "header") {
    icon =
      (id === "In progress" && Inprogress) ||
      (id === "Backlog" && Backlog) ||
      (id === "Todo" && Todo) ||
      (id === "Done" && Done) ||
      Cancelled;
  } else if (state.group === "priority" && purpose === "header") {
    icon =
      (id === "0" && Noprt) ||
      (id === "1" && Lowprt) ||
      (id === "2" && Medprt) ||
      (id === "3" && Highprt) ||
      Urgprtclr;
  } else if (state.group === "user" && purpose === "header") {
    avail = state.data[id]?.[0].user.avail;
    init = state.data[id]?.[0].user.name
      .split(" ")
      .map((str) => str[0].toUpperCase())
      .join("");
  } else if (purpose === "card") {
    if (id.startsWith("usr")) {
      init = extraData.name
        .split(" ")
        .map((str) => str[0].toUpperCase())
        .join("");
      avail = extraData.avail;
    } else {
      icon =
        (id === "In progress" && Inprogress) ||
        (id === "Backlog" && Backlog) ||
        (id === "Todo" && Todo) ||
        (id === "Done" && Done) ||
        (id === "Cancelled" && Cancelled) ||
        (id === "0" && Noprt) ||
        (id === "1" && Lowprt) ||
        (id === "2" && Medprt) ||
        (id === "3" && Highprt) ||
        Urgprtgrey;
    }
  }

  if (init === "") return <img src={icon} alt={id} />;
  return (
    <div className="name-icon" style={{ backgroundColor: getRandomColor() }}>
      {init}
      <div
        className="status-indicator"
        style={{ backgroundColor: avail ? "green" : "grey" }}
      ></div>
    </div>
  );
}
