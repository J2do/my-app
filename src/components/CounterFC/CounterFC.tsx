import { useEffect } from "react";
import { useState } from "react";

interface IProps {
  initialCount: number;
}

export const CounterFC: React.FC<IProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 100)}>
        -
      </button>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 100)}>
        +
      </button>
    </div>
  );
};
