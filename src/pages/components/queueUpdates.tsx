import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1); // n = 0 (initial)
          setNumber((n) => n + 1); // n = 1
          setNumber((n) => n + 1); // n = 2
        }}
      >
        +3
      </button>
    </>
  );
}
