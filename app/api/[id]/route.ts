import * as data from "@/lib/constants/data.json";
import { Job } from "@/lib/interfaces/job.interface";

export async function GET(request: Request, { params }: { params: Promise<{ id: number }> }) {
  const response: { jobs: Job[] } = data;

  const id = (await params)?.id;

  const job = response.jobs.find((job) => job.id == id);

  return Response.json(job, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow all origins (change this for security)
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(request: Request) {
  const newJob = await request.json();

  return Response.json(newJob, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow all origins (change this for security)
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
