import { useContext } from "react";
import { AppContext } from "../context/appContext";
import Icon from "./Icon";
import "./Board.css";

/* eslint-disable react/prop-types */
export default function GroupCard({ dt }) {
  const { state } = useContext(AppContext);

  return (
    <div className="card-container roboto-regular">
      <div className="card-body">
        <div className="card-details">
          <div style={{ color: "#78716c" }}>{dt.id}</div>
          <div className="card-info">
            {state.group !== "status" && <Icon id={dt.status} purpose="card" />}
            <div style={{ fontSize: "15px" }}>{dt.title}</div>
          </div>
        </div>
        {state.group !== "user" && (
          <div className="card-publisher">
            <Icon id={dt.userId} purpose="card" extraData={dt.user} />
          </div>
        )}
      </div>
      <div className="card-footer">
        {state.group !== "priority" && (
          <div className="tagbox">
            <Icon purpose="card" id={dt.priority.toString()} />
          </div>
        )}
        <div className="tagbox">
          {dt.tag.map((tag, ind) => (
            <div className="tag" key={ind}>
              <span className="tagmark"></span>
              <div>{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
