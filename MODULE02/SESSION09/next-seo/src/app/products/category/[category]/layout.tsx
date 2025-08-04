import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How BYD expand to europe",
  description: `BYD, a leading Chinese electric vehicle manufacturer, has expanded to
          Europe to tap into the continent's rapidly growing demand for
          sustainable transportation. `,
  viewport: "width=device-width, initial-scale=1",
};

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
