import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightMinds Academy | Best Coaching for Class 10, 11 & 12 - CBSE, ICSE",
  description: "Expert coaching for CBSE, ICSE & State Boards. Class 10, 11 & 12 with proven results and personal attention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
