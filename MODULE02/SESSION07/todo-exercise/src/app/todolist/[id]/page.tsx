"use client";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function TodoID(props: {
  params: {
    id:
      | string
      | number
      | bigint
      | boolean
      | ReactElement<unknown, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | Promise<
          | string
          | number
          | bigint
          | boolean
          | ReactPortal
          | ReactElement<unknown, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | null
          | undefined
        >
      | null
      | undefined;
  };
}) {
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
