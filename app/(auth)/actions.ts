"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Email should be valid" }),
  password: z.string().regex(/[a-bA-Z0-9\\_@!&\-$]/i, { message: "Password strength is not strong" }),
});

export async function login(prevState: unknown, formData: FormData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const parsedData = schema.safeParse({ email, password });

    if (!parsedData.success) {
      return {
        errors: parsedData.error.flatten().fieldErrors,
      };
    }
  } catch (error) {
    console.log(error);
  }

  console.log(prevState, formData);
}
