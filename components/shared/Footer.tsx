import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-6">
      <div className="h-full max-w-7xl mx-auto md:px-2 px-6 py-4">
        <div className="h-full flex md:flex-row flex-col justify-between items-center">
          <p>© 2020 &#8212; {currentYear} Remoting Work. All Rights Reserved.</p>

          <nav className="flex items-center gap-3">
            <a href="" className="text-foreground hover:text-primary">
              Terms & conditions
            </a>

            <Separator orientation="vertical" />

            <a href="" className="text-foreground hover:text-primary">
              Privacy policy
            </a>

            <Separator orientation="vertical" />

            <a href="" className="text-foreground hover:text-primary">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
