"use client";
// import { cookies } from "next/headers";
import { useState } from "react";

export default function StateManagement() {
  //   const cookieStore = cookies();
  const [name, setName] = useState("");

  return (
    <div>
      <h1> State Management </h1>
      <hr />
      <div style={{ border: "1px solid red", padding: 10 }}>
        <input
          value={name}
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            localStorage.setItem("name", name);
          }}
        >
          {" "}
          Submit to Localstorage{" "}
        </button>
        <button
          onClick={() => {
            alert(localStorage.getItem("name"));
          }}
        >
          {" "}
          get name{" "}
        </button>
      </div>
      <div style={{ border: "1px solid red", padding: 10 }}>
        <input
          value={name}
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            sessionStorage.setItem("name", name);
          }}
        >
          {" "}
          Submit to SessionStorage{" "}
        </button>
        <button
          onClick={() => {
            alert(sessionStorage.getItem("name"));
          }}
        >
          {" "}
          get name{" "}
        </button>
      </div>
    </div>
  );
}
