import { useReducer } from "react";
const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY";
function Reducer(state, action) {
  if (action.type == TOGGLE_VISIBILITY) {
    return state === false ? true : false;
  }
}

export const ToggleMassage = () => {
  const [state, dispatch] = useReducer(Reducer, false);
  return (
    <div>
      <h1 style={{ display: state === false ? "none" : "block" }}>
        Hello World
      </h1>
      <button
        onClick={() => {
          dispatch({ type: TOGGLE_VISIBILITY });
        }}
      >
        Toggle massage
      </button>
      <p>{state}</p>
    </div>
  );
};
