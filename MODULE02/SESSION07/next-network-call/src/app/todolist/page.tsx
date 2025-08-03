"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const TodolistSchema = yup.object().shape({
  title: yup
    .string()
    .min(5, " title must be min 5 chars")
    .required("title is required"),
  description: yup
    .string()
    .min(10, "description min 10 chars")
    .required("description is required"),
});

export default function Todolist() {
  const [todolist, setTodolist] = useState([]);

  const formik = useFormik({
    validationSchema: TodolistSchema,
    initialValues: {
      title: "default",
      description: "default desc",
    },
    onSubmit: (values) => {
      addTodo(values);
      getTodolist();
      alert("success");
    },
  });

  const fetchTodolist = async () => {
    const data = await fetch(
      "https://jestinghole-us.backendless.app/api/data/todolist",
      {
        method: "post",
      }
    );
    const dataJson = await data.json();
    setTodolist(dataJson);
  };

  const getTodolist = async () => {
    const res = await axios.get(
      "https://jestinghole-us.backendless.app/api/data/todolist"
    );
    const data = res.data;
    setTodolist(data);
  };

  const addTodo = async (values: { title: string; description: string }) => {
    const res = await axios.post(
      "https://jestinghole-us.backendless.app/api/data/todolist",
      {
        title: values.title,
        description: values.description,
        done: false,
      }
    );
    getTodolist();
  };

  useEffect(() => {
    // fetchTodolist();
    getTodolist();
  }, []);

  return (
    <div>
      <h1> Todolist </h1>
      <hr />

      <div>
        <form>
          <div>
            <label> Title </label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <div style={{ color: "red" }}>{formik.errors.title}</div>
          </div>
          <div>
            <label> Description </label>
            <textarea
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
            <div style={{ color: "red" }}>{formik.errors.description}</div>
          </div>
          <div>
            <button type="button" onClick={() => formik.handleSubmit()}>
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
        <hr />
        <ul>
          {todolist.map(
            (
              item: {
                title: string;
                description: string;
                done: boolean;
              },
              index
            ) => (
              <li key={index}>{item.title}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
