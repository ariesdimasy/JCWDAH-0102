"use client";
import { redirect } from "next/navigation";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import style from "./register.module.css";

const registerSchema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "password confirmation doesnt match"),
});

interface IRegisterInitialValues {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function Register() {
  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit: (values: IRegisterInitialValues) => {
      userRegister(values);
      alert(" register success ");
      redirect("/login");
    },
  });

  const userRegister = async (data: IRegisterInitialValues) => {
    const res = await axios.post(
      "https://jestinghole-us.backendless.app/api/data/users",
      {
        name: data.name,
        email: data.email,
        password: data.password,
      }
    );
  };

  return (
    <main className={style.main}>
      <header>
        <h1> Register </h1>
        <h2> Register for users </h2>
      </header>
      <section>
        <TextField
          sx={{ margin: "10px 0" }}
          label="name"
          type={"text"}
          name="name"
          variant="outlined"
          placeholder="Please insert your name"
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        )}
        <TextField
          sx={{ margin: "10px 0" }}
          label="email"
          type={"email"}
          name="email"
          variant="outlined"
          placeholder="Please insert your email"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
        <TextField
          sx={{ margin: "10px 0" }}
          label="password"
          type={"password"}
          name="password"
          variant="outlined"
          placeholder="Please insert your password"
          fullWidth
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
        <TextField
          sx={{ margin: "10px 0" }}
          label="password confirmation"
          type={"password"}
          name="password_confirmation"
          variant="outlined"
          placeholder="Please insert your password confirmation"
          fullWidth
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
        />
        {formik.errors.password_confirmation && (
          <div style={{ color: "red" }}>
            {formik.errors.password_confirmation}
          </div>
        )}
        <Button
          sx={{ margin: "10px 0" }}
          size="large"
          variant="outlined"
          fullWidth
          onClick={() => formik.handleSubmit()}
        >
          {" "}
          Register{" "}
        </Button>
      </section>
    </main>
  );
}
