import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.scss";
import { Toaster } from "@/components/ui/toaster";
import { ThemeSwitchProvider } from "@/components/ThemeSwitchProvider";
import { StoreContextProvider } from "@/context/store.context";
import Appbar from "@/components/shared/Appbar";
import Footer from "@/components/shared/Footer";

const InterSans = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} ${InterSans.className} antialiased`}>
        <ThemeSwitchProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <StoreContextProvider>
            <Appbar />

            {children}

            <Footer />
          </StoreContextProvider>

          <Toaster />
        </ThemeSwitchProvider>
      </body>
    </html>
  );
}
