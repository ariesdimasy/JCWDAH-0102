import { useReducer } from "react";
import countReducer from "@/reducers/countReducer";

export default function CounterBox() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: "increment", payload: 2 });
  };

  const decrement = () => {
    dispatch({ type: "decrement", payload: 2 });
  };

  return (
    <div style={{ border: "5px solid red" }}>
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
    </div>
  );
}
