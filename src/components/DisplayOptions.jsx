import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./DisplayOptions.css";
export default function DisplayOptions() {
  const context = useContext(AppContext);
  return (
    <div id="display-options" className="roboto-regular">
      <div className="option-group">
        <span className="labels">Grouping</span>
        <select
          className="roboto-regular opt-select"
          value={context.state.group}
          onChange={(e) => context.setGrouping(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="option-group">
        <span className="labels">Ordering</span>
        <select
          className="roboto-regular opt-select"
          value={context.state.order}
          onChange={(e) => context.setOrdering(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
}
