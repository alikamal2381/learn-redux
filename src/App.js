import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, hungry } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const hungry_text = useSelector((state) => state.testReducer);
  const dispatch = useDispatch();

  var hungry_style = {
    color: "red",
    fontSize: 50,
  };

  return (
    <div className="main-container">
      <h1>React Redux</h1>
      <p>
        <strong>React Reduct in action...</strong>
      </p>
      <p>...Keep more practice</p>
      <h3>Counter: {counter}</h3>
      <button className="button" onClick={() => dispatch(increment(5))}>
        +
      </button>{" "}
      <button className="button" onClick={() => dispatch(decrement())}>
        -
      </button>{" "}
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
      <button className="button" onClick={() => dispatch(hungry())}>
        I am hungry?
      </button>
      <p>
        <strong style={hungry_style}>{hungry_text}</strong>
      </p>
      <h4>Ali Kamal</h4>
      <strong>Software Developer</strong>
    </div>
  );
}

export default App;
