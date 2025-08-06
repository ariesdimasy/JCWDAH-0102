"use client";
import { Button, TextField } from "@mui/material";
import axios from "axios";

import * as yup from "yup";
import { useFormik } from "formik";

import style from "./post-add.module.css";

interface IPostData {
  title: string;
  slug: string;
  summary: string;
  description: string;
}

const postSchema = yup.object().shape({
  title: yup.string().required().min(15).max(250),
  slug: yup
    .string()
    .required()
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/, // Regular expression for a valid slug
      "Slug must be lowercase, alphanumeric, and use hyphens for spaces"
    ),
  summary: yup.string().required().min(50).max(250),
  description: yup.string().required().min(150).max(1000),
});

export default function PostAdd() {
  const formik = useFormik({
    validationSchema: postSchema,
    initialValues: {
      title: "",
      slug: "",
      summary: "",
      description: "",
    },
    onSubmit: (values: IPostData) => {
      postSubmit(values);
    },
  });

  const postSubmit = async (values: IPostData) => {
    const res = await axios.post(
      "https://jestinghole-us.backendless.app/api/data/posts",
      {
        title: values.title,
        slug: values.slug,
        summary: values.summary,
        description: values.description,
      }
    );

    return res;
  };

  return (
    <main>
      <header>
        <h1 hidden> Post Add </h1>
        <h2 hidden> add new post </h2>
      </header>
      <section className={style.section}>
        <TextField
          sx={{ margin: "10px 0" }}
          fullWidth
          name="title"
          label="title"
          variant="outlined"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title && (
          <div style={{ color: "red" }}>{formik.errors.title}</div>
        )}
        <TextField
          sx={{ margin: "10px 0" }}
          fullWidth
          name="slug"
          label="slug"
          variant="outlined"
          value={formik.values.slug}
          onChange={formik.handleChange}
        />
        {formik.errors.slug && (
          <div style={{ color: "red" }}>{formik.errors.slug}</div>
        )}
        <TextField
          sx={{ margin: "10px 0" }}
          fullWidth
          name="summary"
          label="summary"
          variant="outlined"
          value={formik.values.summary}
          onChange={formik.handleChange}
        />
        {formik.errors.summary && (
          <div style={{ color: "red" }}>{formik.errors.summary}</div>
        )}
        <TextField
          sx={{ margin: "10px 0" }}
          fullWidth
          name="description"
          label="description"
          variant="outlined"
          multiline
          rows={7}
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        {formik.errors.description && (
          <div style={{ color: "red" }}>{formik.errors.description}</div>
        )}
        <div style={{ float: "right" }}>
          <Button
            sx={{ width: "100px" }}
            variant="outlined"
            type="button"
            onClick={() => formik.handleSubmit()}
          >
            {" "}
            Post{" "}
          </Button>
        </div>
      </section>
    </main>
  );
}
