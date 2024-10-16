/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Board.css";
import GroupHeader from "./GroupHeader";
import { AppContext } from "../context/appContext";
import GroupCard from "./GroupCard";
// eslint-disable-next-line no-unused-vars
export default function Group({ name, id }) {
  const { state } = useContext(AppContext);
  return (
    <div className="group-container">
      <GroupHeader id={id} name={name} />
      <div className="group-cards">
        {state.data[id]?.map((ticket) => (
          <GroupCard key={ticket.id} dt={ticket} />
        ))}
      </div>
    </div>
  );
}
