"use client";

import { Button, TextField } from "@mui/material";
import style from "./../../register/register.module.css";

import { signIn } from "@/auth";

export default function AuthLogin() {
  const credentialsAction = async (formData: FormData) => {
    try {
      await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        redirectTo: "/",
      });
    } catch (err) {
      alert(" error happened ");
      if (err instanceof Error) alert(err.message);
    }
  };

  return (
    <main className={style.main}>
      <header>
        <h1> Login </h1>
        <h2> Login for users </h2>
      </header>
      <section>
        <form action={credentialsAction}>
          <TextField
            sx={{ margin: "10px 0" }}
            label="username"
            type={"email"}
            name="username"
            variant="outlined"
            placeholder="Please insert your email"
            fullWidth
          />

          <TextField
            sx={{ margin: "10px 0" }}
            label="password"
            type={"password"}
            name="password"
            variant="outlined"
            placeholder="Please insert your password"
            fullWidth
          />

          <Button
            type="submit"
            sx={{ margin: "10px 0" }}
            size="large"
            variant="outlined"
            fullWidth
          >
            {" "}
            Login{" "}
          </Button>
        </form>
      </section>
    </main>
  );
}
