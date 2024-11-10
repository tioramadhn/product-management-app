import React from "react";
import { Navbar } from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 md:px-12 py-8">{children}</main>
    </div>
  );
}
