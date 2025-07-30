"use client";
import useCounterStore from "@/store/counterStore";
// import StateManagement from "../state-management/page";
import CounterZustand from "@/components/CounterZustand";

export default function ZustandSample() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <h1> Zustand Sample </h1>
      <hr />
      <button onClick={() => decrement()}> - </button>
      <h1> {count} </h1>
      <button onClick={() => increment()}> + </button>
      <CounterZustand />
    </div>
  );
}
