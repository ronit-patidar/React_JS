import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const result = useMemo(() => {
    console.log("Calculating...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += number;
    }

    return result;
  }, [number]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h2>Number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;