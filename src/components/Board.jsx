import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Board.css";
import Group from "./Group";

export default function Board() {
  const statuses = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
  const priorities = {
    0: "No Priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  };
  const { state } = useContext(AppContext);

  if (!state.data) return <h3>Loading...</h3>;

  return (
    <div id="board-container">
      <div id="board">
        {state.group === "status" &&
          statuses.map((sts) => <Group key={sts} name={sts} id={sts} />)}
        {state.group === "priority" &&
          Object.keys(priorities).map((prt) => (
            <Group key={prt} name={priorities[prt]} id={prt} />
          ))}
        {state.group === "user" &&
          Object.keys(state.data).map((uid) => (
            <Group key={uid} name={state.data[uid][0].user.name} id={uid} />
          ))}
        {/* <pre>{JSON.stringify(state.data, null, 2)}</pre> */}
      </div>
    </div>
  );
}
