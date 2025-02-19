import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";

const formValidation = z.object({
  email: z.string().email({ message: "Email should be valid" }),
  password: z.string().regex(/[a-bA-Z0-9\\_@!&\-$]/i),
});

const LoginPage = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    try {
      const email = formData.get("email");
      const password = formData.get("password");

      const parsedData = formValidation.parse({ email, password });

      console.log(parsedData, 'parsedData');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Login as a job seeker</h1>
        <span className="text-lg">We make the process of finding job a walk in the park</span>
      </div>

      <form action={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-6">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mb-6">
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default LoginPage;
