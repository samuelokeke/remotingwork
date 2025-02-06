import type { Metadata } from "next";
import Hero from "./Hero";

export const metadata: Metadata = {
  title: "Remoting | Board",
  description: "All the jobs in one place",
};

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Hero />

      {children}
    </div>
  );
}
