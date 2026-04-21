import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Teacher Dashboard | BrightMinds Academy",
  description: "Teacher management dashboard",
};

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}