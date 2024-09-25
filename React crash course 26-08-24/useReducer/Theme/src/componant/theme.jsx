import { useReducer } from "react";

const TOGGLE_THEME = "TOGGLE_THEME";

function Reducer(state, action) {
  if (action.type === TOGGLE_THEME) {
    return state === "light" ? "dark" : "light";
  }
  return state;
}

function Theme() {
  const [state, dispatch] = useReducer(Reducer, "light");

  return (
    <div
      style={{ background: state === "light" ? "red" : "blue" }}
      className={state}
    >
      <h1 style={{ color: state === "light" ? "blue" : "red" }}>
        Theme toggle button {state}
      </h1>
      <button onClick={() => dispatch({ type: TOGGLE_THEME })}>
        Toggle button
      </button>
    </div>
  );
}

export default Theme;
