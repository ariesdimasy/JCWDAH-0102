"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function TodoID(props: any) {
  const router = useRouter();
  const [numbers, setNumbers] = useState([]);

  const fetchAPIRoute = async () => {
    const res = await axios.get("http://localhost:3000/api");
    const data = res.data;
    setNumbers(data);
  };

  useEffect(() => {
    fetchAPIRoute();
  });

  return (
    <div style={{ padding: 20 }}>
      <div>
        <h1>{props?.params?.id}</h1>
        <hr></hr>
        <p> Content </p>
        <p>{JSON.stringify(numbers)}</p>
        <button onClick={() => router.push("/todolist")}> Back to List</button>
      </div>
    </div>
  );
}
