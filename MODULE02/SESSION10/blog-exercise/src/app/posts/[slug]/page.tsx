"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";

import style from "./slug.module.css";

interface IBlogDetail {
  params: {
    slug: string;
  };
}

interface IBlog {
  summary: string;
  created: number;
  ___class: string;
  description: string;
  ownerId: null;
  title: string;
  image: string;
  updated: null;
  objectId: string;
  slug: string;
}

export default function BlogDetail(props: IBlogDetail) {
  const [blog, setBlog] = useState<IBlog>();

  const fetchBlog = async () => {
    const res = await axios.get(
      "https://jestinghole-us.backendless.app/api/data/posts/" +
        props.params.slug
    );
    const blogData = res.data;
    setBlog(blogData);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <main>
      <Header title={blog?.title} image={blog?.image} />
      <section className={style.section}>{blog?.description}</section>
    </main>
  );
}
