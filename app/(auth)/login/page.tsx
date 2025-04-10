import { Button } from "@/components/ui/button";
import React from "react";
import Form from "./form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Login as a job seeker</h1>
        <span className="text-lg">We make the process of finding job a walk in the park</span>
      </div>

      <Form />

      <p className="relative after:absolute after:w-full after:h-px after:bg-gray-500 after:left-0 after:bottom-[14px] after:z-[-1] text-center my-8">
        <span className="bg-background text-lg text-gray-500 px-3">OR</span>
      </p>

      <div className="flex justify-center my-4">
        <h3 className="text-base font-light text-foreground">Sign in with</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-transparent dark:bg-primaryx px-1 shadow-none">
          <Image src="icons/google.svg" width={32} height={32} alt="google" />
        </Button>

        <Button className="bg-transparent dark:bg-primaryx px-1 shadow-none">
          <Image src="icons/linkedin.svg" width={32} height={32} alt="linkedin" />
        </Button>

        <Button className="bg-transparent dark:bg-primaryx px-1 shadow-none">
          <Image src="icons/x.svg" width={32} height={32} alt="x" />
        </Button>
      </div>
    </section>
  );
};

export default LoginPage;
