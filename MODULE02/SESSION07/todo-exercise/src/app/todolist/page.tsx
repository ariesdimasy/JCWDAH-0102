"use client";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import style from "./todolist.module.css";
import {
  Alert,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
// import { ExpandMoreIcon } from "@mui/icons-material";

const TodoSchema = yup.object().shape({
  title: yup.string().min(5, "title min char are 5").required(),
  description: yup.string().min(10, "description min char are 10").required(),
});

export default function Todolist() {
  const [todolist, setTodolist] = useState([]);

  //   const [title, setTitle] = useState<string>("");
  //   const [description, setDescription] = useState<string>("");

  const formik = useFormik({
    validationSchema: TodoSchema,
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      addTodoList({
        title: values.title,
        description: values.description,
      });
      fetchTodolist();
    },
  });

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
          value={formik.values.title}
          className={style.input}
          id="title"
          label="Title"
          variant="outlined"
          onChange={formik.handleChange}
        />
        {formik.errors.title && (
          <Alert severity="error">{formik.errors.title}</Alert>
        )}
        <TextField
          value={formik.values.description}
          className={style.input}
          id="description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          onChange={formik.handleChange}
        />
        {formik.errors.description && (
          <Alert severity="error">{formik.errors.description}</Alert>
        )}
        <Button
          type="button"
          onClick={formik.handleSubmit}
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
