import { Job } from "@/lib/interfaces/job.interface";
import * as data from "@/lib/constants/data.json";

export const revalidate = 60;

export async function GET() {
  const response: { jobs: Job[] } = data;

  return Response.json(response, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow all origins (change this for security)
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
