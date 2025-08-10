import axios from "axios";
import Header from "@/components/Header";

import style from "./slug.module.css";

interface IBlogProps {
  params: {
    slug: string;
  };
}

interface IBlogDetail {
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

export async function generateMetadata({ params, searchParams }, parent) {
  try {
    const slug = params.slug;

    const blog = await axios.get(
      `https://jestinghole-us.backendless.app/api/data/posts/${slug}`
    );

    return {
      title: blog.data.title,
      description: blog.data.summary,
      author: "",
      openGraph: {
        images: [blog.data.image],
      },
    };
  } catch (err) {
    return err;
  }
}

// server component
export default async function BlogDetail(props: IBlogProps) {
  // Example within a server component
  async function fetchData() {
    const { slug } = props.params;

    try {
      const response = await axios.get(
        `https://jestinghole-us.backendless.app/api/data/posts/${slug}`
      );
      return response.data as IBlogDetail; // The data you want to use
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error appropriately, e.g., return null or throw an error
      return null;
    }
  }

  const data = await fetchData();

  if (!data) {
    return <div>Failed to load data.</div>;
  }

  return (
    <main>
      <Header title={data?.title} image={data?.image} />
      <section className={style.section}>{data?.description}</section>
    </main>
  );
}
