import React, { useState } from "react";
import "../App.css";

const UseStateHooks = () => {
  //const state = useState();
  const [count, setInterval] = useState(0);
  const IncNum = () => {
    setInterval(count + 1);
  };
  return (
    <>
      <div className="heading">
        <h1>{count}</h1>
        <button className="button" onClick={IncNum}>
          click me
        </button>
      </div>
    </>
  );
};
export default UseStateHooks;
