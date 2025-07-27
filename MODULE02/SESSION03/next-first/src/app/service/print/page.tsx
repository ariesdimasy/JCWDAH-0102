import Link from "next/link";

export default function Service() {
  return (
    <div>
      <h1> Service </h1>
      <hr />
      <Link href="/"> Home </Link>
      <Link href="/service"> Service </Link>
      <Link href="/service/print"> Service / Print </Link>
      <Link href="/service/print/something"> Service / Print / Somthing </Link>
      <hr />
      <p> This is print, submenu service</p>
    </div>
  );
}
