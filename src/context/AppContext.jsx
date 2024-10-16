/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const AppContext = createContext();

async function fetchData(setState) {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    setState((prev) => ({ ...prev, apiData: result }));
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}

export default function AppContextProvider({ children }) {
  const initialGroup = localStorage.getItem("group") || "status";
  const initialOrder = localStorage.getItem("order") || "priority";

  const [state, setState] = useState({
    group: initialGroup,
    order: initialOrder,
    apiData: null,
    data: null,
  });

  useEffect(() => {
    fetchData(setState);
  }, []);

  useEffect(() => {
    if (state.apiData) {
      setData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.apiData, state.group, state.order]);

  function setData() {
    const tempData = state.apiData.tickets.reduce((acc, val) => {
      const userData = state.apiData.users.find(
        (user) => user.id === val.userId
      );
      const grp = state.group === "user" ? "userId" : state.group;
      const dt = {
        ...val,
        user: {
          name: userData.name,
          avail: userData.available,
        },
      };
      if (acc[val[grp]]) {
        acc[val[grp]].push(dt);
      } else {
        acc[val[grp]] = [dt];
      }
      return acc;
    }, {});
    for (const key of Object.keys(tempData)) {
      tempData[key].sort((a, b) =>
        state.order === "title"
          ? a.title.localeCompare(b.title)
          : b.priority - a.priority
      );
    }
    setState((prev) => ({ ...prev, data: tempData }));
  }

  function setGrouping(val) {
    setState((prev) => {
      const newState = { ...prev, group: val };
      localStorage.setItem("group", val);
      return newState;
    });
  }

  function setOrdering(val) {
    setState((prev) => {
      const newState = { ...prev, order: val };
      localStorage.setItem("order", val);
      return newState;
    });
  }
  return (
    <AppContext.Provider value={{ state, setGrouping, setOrdering, setData }}>
      {children}
    </AppContext.Provider>
  );
}
