import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Toaster } from "../ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.title = "Product Management";
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 md:px-12 py-8">{children}</main>
      <Toaster />
    </div>
  );
}
