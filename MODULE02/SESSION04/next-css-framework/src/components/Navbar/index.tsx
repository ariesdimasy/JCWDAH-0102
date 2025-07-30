import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[50px] bg-blue-700 w-[100%] text-white">
      <span className="ml-[20px]">YDH</span>
      <Link href={"/"}> Home </Link> | <Link href={"/service"}> Service </Link>
    </nav>
  );
}
