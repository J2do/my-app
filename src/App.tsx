import React from "react";
import { CounterFC } from "./components/CounterFC/CounterFC";

const App: React.FC = () => {
  const arr = [1, 2, 31, 4, 5, 65];

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
      {arr.map((count) => (
        <CounterFC initialCount={count} />
      ))}
    </div>
  );
};

export default App;
