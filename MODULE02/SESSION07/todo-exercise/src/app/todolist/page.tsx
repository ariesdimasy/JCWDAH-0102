"use client";
import { useState, useEffect } from "react";
import style from "./todolist.module.css";
import {
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
// import { ExpandMoreIcon } from "@mui/icons-material";

export default function Todolist() {
  const [todolist, setTodolist] = useState([]);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const fetchTodolist = async () => {
    const res = await axios.get(
      "https://jestinghole-us.backendless.app/api/data/todolist"
    );
    const todolist = res.data;
    setTodolist(todolist);
  };

  const addTodoList = async (values: {
    title: string;
    description: string;
  }) => {
    const res = await axios.post(
      "https://jestinghole-us.backendless.app/api/data/todolist",
      {
        title: values.title,
        description: values.description,
      }
    );
    setTitle("");
    setDescription("");
    fetchTodolist();
  };

  useEffect(() => {
    fetchTodolist();
  }, []);

  return (
    <div className={style.todolist}>
      <div className={style.header}></div>
      <div className={style.container}>
        <h1 className={style.h1}> TODO </h1>
        <TextField
          value={title}
          className={style.input}
          id="title"
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          value={description}
          className={style.input}
          id="description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          type="button"
          onClick={() =>
            addTodoList({
              title: title,
              description: description,
            })
          }
          style={{ width: "100%" }}
          variant="contained"
        >
          Submit
        </Button>
        <div style={{ marginTop: 50 }}>
          {todolist.map(
            (item: { title: string; description: string }, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={" > "}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">{item?.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{item?.description}</AccordionDetails>
              </Accordion>
            )
          )}
        </div>
      </div>
    </div>
  );
}
