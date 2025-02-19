import type { Context } from "@netlify/functions";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: Request, context: Context) => {
  console.log(req, context);
  return new Response("Hello, world");
};
