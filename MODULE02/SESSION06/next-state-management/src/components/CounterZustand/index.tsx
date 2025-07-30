import useCounterStore from "@/store/counterStore";

export default function CounterZustand() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div style={{ border: "1px solid red", padding: 20 }}>
      <hr />
      <button onClick={() => decrement()}> - </button>
      <h1> {count} </h1>
      <button onClick={() => increment()}> + </button>
    </div>
  );
}
