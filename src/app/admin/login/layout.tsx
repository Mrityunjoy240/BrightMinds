import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Admin Login | BrightMinds Academy",
  description: "Admin login page",
};

export default function AdminLoginLayout({
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