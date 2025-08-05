"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import style from "./post.module.css";
import MediaCard from "@/components/MediaCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get(
      "https://jestinghole-us.backendless.app/api/data/posts"
    );
    const postsData = res.data;
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main>
      <header className={style.header}>
        <h1> Blog List </h1>
      </header>
      <section className={style.section}>
        {posts.map((item, index) => (
          <MediaCard item={item} key={index} />
        ))}
      </section>
    </main>
  );
}
