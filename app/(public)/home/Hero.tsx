import React from "react";
import FlipText from "./FlippingText";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-primary text-white text-center">
      <div className="w-full h-full md:h-[calc(100vh-4rem)] lg:max-w-7xl mx-auto px-6 lg:px-4 py-20">
        <div className="h-full grid place-content-center place-items-center gap-12">
          <h1 className="text-6xl font-normal leading-normal mb-12">
            Work & recruit like a professional, become a <FlipText />.
          </h1>

          <div className="text-2xl font-light my-12">
            <a href="fluttuts://home">My flutter app</a>
          </div>

          <h3 className="text-4xl font-light">Eat your cake, and have it!</h3>

          <Button className="bg-foreground hover:bg-foreground text-2xl py-7 px-12">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
