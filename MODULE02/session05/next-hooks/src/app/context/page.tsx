"use client";
import { useState, useContext, createContext } from "react";
import Box from "@/components/Box";

const UserContext = createContext("Jessy Hall");

export default function Context() {
  const [numbers, setNumbers] = useState([1, 2, 3, 10, 5, 6]);

  return (
    <>
      <h1> Context </h1>
      <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        {numbers.map((item, index) => (
          <Box key={index} index={item} />
        ))}
      </div>
      <button
        onClick={() => {
          setNumbers([...numbers, 12]);
        }}
      >
        {" "}
        Add Data numbers{" "}
      </button>
      <ComponentOne />
    </>
  );
}

function ComponentOne() {
  const [user] = useState("Jessy Hall");
  return (
    <UserContext.Provider value={user}>
      <div
        style={{
          border: "1px solid blue",
          width: 200,
          height: 200,
          padding: 20,
        }}
      >
        Name Component One : {user}
        <ComponentTwo />
      </div>
    </UserContext.Provider>
  );
}

function ComponentTwo() {
  const user = useContext<string>(UserContext);
  return (
    <div
      style={{
        border: "1px solid brown",
        width: 200,
        height: 200,
        padding: 20,
      }}
    >
      Name Component Two : {user}
      <ComponentThree />
    </div>
  );
}

function ComponentThree() {
  const user = useContext<string>(UserContext);
  return (
    <div style={{ border: "1px solid red", width: 200, height: 200 }}>
      Name Component Three : {user}
    </div>
  );
}
