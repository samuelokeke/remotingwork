import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitcher";
import Image from "next/image";

const Appbar = () => {
  return (
    <header className="h-16 bg-primary-foreground border-b">
      <div className="h-full max-w-7xl mx-auto md:px-2 px-6">
        <div className="h-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-6">
          <Link href="/">
            <Image src="/logo.png" width={48} height={48} className="w-12 h-12" priority alt="logo" />
          </Link>

          <nav className="md:flex hidden items-center gap-6">
            <ThemeSwitch />

            <Link href="/jobs" className="text-primary">
              Find jobs
            </Link>

            <div className="flex items-center gap-2 rounded-lg p-1 border">
              <Link
                href="/login"
                className="h-10 grid place-content-center py-2 px-4 rounded-md text-sm bg-secondary text-secondary-foreground"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="h-10 grid place-content-center py-2 px-4 rounded-md text-sm bg-primary text-primary-foreground"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Appbar;
