import Appbar from "@/components/shared/Appbar";
import Footer from "@/components/shared/Footer";
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
  return (
    <div>
      <Appbar />

      {children}

      <Footer />
    </div>
  );
}
