import useCounter from "@/hooks/useCounter";

export default function CounterReducerBox() {
  const [count, increment, decrement] = useCounter(5, 2);

  return (
    <div style={{ border: "3px solid blue" }}>
      <button onClick={() => decrement()}> - </button>
      <h1>{count}</h1>
      <button onClick={() => increment()}> + </button>
    </div>
  );
}
