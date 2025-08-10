"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import supabase from "./../../../../supabase";
import { Button, TextField } from "@mui/material";
import style from "./../../register/register.module.css";

export default function AuthLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    alert(email + " " + password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Error during Email sign-in", error.message);
      router.push("/supaauth/login");
      return false;
    }

    router.push("/posts/add");
  };

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.log("Error during Google sign-in", error.message);
      router.push("/supaauth/login");
      return false;
    }

    router.push("/posts/add");
  };

  return (
    <main className={style.main}>
      <header>
        <h1> Login </h1>
        <h2> Login by Supabase </h2>
      </header>
      <section>
        <form action={() => signInWithEmail()}>
          <TextField
            sx={{ margin: "10px 0" }}
            label="username"
            type={"email"}
            name="username"
            variant="outlined"
            placeholder="Please insert your email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            sx={{ margin: "10px 0" }}
            label="password"
            type={"password"}
            name="password"
            variant="outlined"
            placeholder="Please insert your password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <Button
            onClick={() => signInWithGoogle()}
            type="button"
            sx={{ margin: "10px 0" }}
            size="large"
            variant="outlined"
            fullWidth
          >
            Google
          </Button>
        </form>
      </section>
    </main>
  );
}
