import React from "react";
import { Counter } from "./components/Counter/Counter";
import { CounterFC } from "./components/CounterFC/CounterFC";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        fontSize: "40px",
      }}
    >
      <Counter initialCount={15} />
      <CounterFC initialCount={15} />
    </div>
  );
};

export default App;
