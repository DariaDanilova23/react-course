import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function incriment() {
    setCount(count + 1);
  }
  function decriment() {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={decriment}>-</button>
        <button onClick={incriment}>+</button>
      </div>
    </>
  );
}
