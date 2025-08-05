import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "My secret blog",
};

export default function BlogDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
