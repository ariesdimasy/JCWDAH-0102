import Link from "next/link";

export default function About() {
  return (
    <nav>
      <h1> About </h1>
      <Link href={"/"}> Homepage </Link>
    </nav>
  );
}
