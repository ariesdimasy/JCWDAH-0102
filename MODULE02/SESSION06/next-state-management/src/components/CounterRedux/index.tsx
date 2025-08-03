"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/redux-store/counterSlice";

export default function CounterRedux() {
  const count = useSelector((state: { counter: { value: number } }) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px double blue",
          padding: 20,
        }}
      >
        <button onClick={() => dispatch(decrement())}> - </button>
        {count}
        <button onClick={() => dispatch(increment())}> + </button>
      </div>
    </div>
  );
}
