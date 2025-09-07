import { useState } from "react";
import "./App.css";

function App() {
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(0);

  const trackChange1 = (e: any) => {
    e.preventDefault();

    console.log("Hi Hi", e);
    setFirstNo(e.target.value);
  };

  const trackChange2 = (e: any) => {
    e.preventDefault();

    console.log("Hi Hi", e);
    setSecondNo(e.target.value);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid red",
          width: 700,
          height: 700,
          backgroundColor: "beige",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            color: "red",
            fontSize: "20px",
          }}
        >
          Enter two numbers :
        </div>

        <label style={{ color: "black" }}>
          Enter value 1:{" "}
          <input
            style={{
              backgroundColor: "white",
              color: "black",
            }}
            onChange={(e) => trackChange1(e)}
            name="firstNo"
          />
        </label>

        <hr />

        <label style={{ color: "black" }}>
          Enter value 2:{" "}
          <input
            style={{
              backgroundColor: "white",
              color: "black",
            }}
            onChange={(e) => trackChange2(e)}
            name="secondNo"
          />
        </label>

        <hr />

        <button
          style={{ color: "green" }}
          onClick={(e) => console.log("onClick")}
        >
          Submit
        </button>

        <hr />

        <div style={{ color: "black" }}>
          Your entered values are:
          <hr />
          value 1: {firstNo}
          <hr />
          value 2: {secondNo}
        </div>
      </div>
    </>
  );
}

export default App;
