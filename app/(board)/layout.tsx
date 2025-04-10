import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remoting.work | Board",
  description: "Work your dream job from home",
};

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
