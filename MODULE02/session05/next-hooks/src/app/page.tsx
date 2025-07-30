"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState(0); // count = 0
  const [say, setSay] = useState("dimas");

  const inputRef = useRef<null | HTMLInputElement>(null);
  const renderCount = useRef(0);

  useEffect(() => {
    alert(" loading finish");
    inputRef.current?.focus();
    renderCount.current = renderCount.current + 1;
  }, []); // first load component

  useEffect(() => {
    console.log(say);
    if (say === "hello") {
      alert("hello juga");
    }
  }, [say]);

  useEffect(() => {
    console.log("3rd useEffect => ", say, count);
  }, [say, count]);

  return (
    <>
      <div className={styles.page}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            style={{ margin: 10, width: 50 }}
          >
            {" "}
            -{" "}
          </button>
          <div style={{ margin: 10, width: 50 }}> {count} </div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            style={{ margin: 10, width: 50 }}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          renderCount : {renderCount.current}
        </div>
        <div>
          <input
            type="text"
            value={say}
            onChange={(e) => setSay(e.target.value)}
          />
          <button
            onClick={() => {
              alert(say);
            }}
          >
            {" "}
            Say It
          </button>
          <div> {say}</div>
        </div>
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={() => inputRef.current?.focus()}>
            {" "}
            Focus on Input{" "}
          </button>
        </div>
      </div>
    </>
  );
}
