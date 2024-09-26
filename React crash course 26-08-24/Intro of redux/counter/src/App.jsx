import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/action";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter Application</h1>
      <hr />
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button>{count}</button>
        <button onClick={() => dispatch(decrement())}  disabled={count <= 0}  >Decrement</button>
      </div>
    </>
  );
}

export default App;
