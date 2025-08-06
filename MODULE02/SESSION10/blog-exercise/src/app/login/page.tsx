"use client";
import { redirect } from "next/navigation";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import style from "../register/register.module.css";

const registerSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

interface ILoginInitialValues {
  email: string;
  password: string;
}

export default function Register() {
  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: ILoginInitialValues) => {
      const res = userLogin(values);
      alert(JSON.stringify(res));
      redirect("/post/add");
    },
  });

  const userLogin = async (data: ILoginInitialValues) => {
    const res = await axios.post(
      "https://jestinghole-us.backendless.app/api/users/login",
      {
        login: data.email,
        password: data.password,
      }
    );

    return res;
  };

  return (
    <main className={style.main}>
      <header>
        <h1> Login </h1>
        <h2> Login for users </h2>
      </header>
      <section>
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

        <Button
          sx={{ margin: "10px 0" }}
          size="large"
          variant="outlined"
          fullWidth
          onClick={() => formik.handleSubmit()}
        >
          {" "}
          Login{" "}
        </Button>
      </section>
    </main>
  );
}
