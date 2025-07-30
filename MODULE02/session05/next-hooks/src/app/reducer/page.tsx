"use client";
import CounterBox from "@/components/CounterBox";
import { useReducer } from "react";
import countReducer from "@/reducers/countReducer";

export default function ReducerPage() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: "increment", payload: 2 });
  };

  const decrement = () => {
    dispatch({ type: "decrement", payload: 2 });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <button style={{ width: 200 }} onClick={() => decrement()}>
          {" "}
          -{" "}
        </button>
        <h1>{state.count}</h1>
        <button style={{ width: 200 }} onClick={() => increment()}>
          {" "}
          +{" "}
        </button>
      </div>
      <CounterBox />
    </div>
  );
}
