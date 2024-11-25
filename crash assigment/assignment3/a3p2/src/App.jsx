import "./App.css";
import ChangeColor1 from "./components/ChangeColor1";
import ChangeColor2 from "./components/ChangeColor2";
import FocusInput1 from "./components/FocusInput1";
import FocusInput2 from "./components/FocusInput2";

function App() {
  return (
    <>
      <h1> Example No 1</h1>
      <FocusInput1 />
      <br />
      <br />
      <h1> assignment 1</h1>
      <FocusInput2 />

      <br />
      <br />
      <h1> Example No 2</h1>
      <ChangeColor1 />

      <br />
      <br />
      <h1> assignment 2</h1>
      <ChangeColor2 />
    </>
  );
}

export default App;
