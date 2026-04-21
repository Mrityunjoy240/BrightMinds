import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Student Dashboard | BrightMinds Academy",
  description: "Your personalized learning dashboard",
};

export default function DashboardLayout({
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