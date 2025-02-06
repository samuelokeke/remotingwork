import { Job } from "@/lib/interfaces/job.interface";
import * as data from "@/lib/constants/data.json";

export const revalidate = 60;

export async function GET() {
  const response: { jobs: Job[] } = data;

  return Response.json(response);
}
