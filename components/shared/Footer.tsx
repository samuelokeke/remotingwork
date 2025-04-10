import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-6">
      <div className="h-full max-w-7xl mx-auto md:px-2 px-6 py-4">
        <div className="h-full flex md:flex-row flex-col justify-between md:items-center gap-6">
          <p>© 2020 &#8212; {currentYear} Remoting Work. All Rights Reserved.</p>

          <nav className="flex items-center justify-between gap-3">
            <Link href="" className="md:text-base text-sm text-foreground hover:text-primary">
              Terms & conditions
            </Link>

            <Link href="" className="md:text-base text-sm text-foreground hover:text-primary">
              Privacy policy
            </Link>

            <Link href="" className="md:text-base text-sm text-foreground hover:text-primary">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
