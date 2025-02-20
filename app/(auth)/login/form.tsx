"use client";

import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "../actions";

const Form = () => {
  const [state, formAction] = useActionState(login, null);

  console.log(state, 'state');

  return (
    <form action={formAction}>
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
  );
};

export default Form;
