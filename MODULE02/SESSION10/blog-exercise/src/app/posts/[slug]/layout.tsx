import type { Metadata } from "next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

export const metadata: Metadata = {
  title: "My Blog",
  description: "My secret blog",
};

export default function BlogDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
    </div>
  );
}
