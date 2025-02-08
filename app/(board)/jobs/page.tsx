import React from "react";
import JobList from "./JobList";
import { Job } from "@/lib/interfaces/job.interface";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function JobsPage() {
  let jobs: Job[] = [];

  try {
    const data = await fetch(`${API_BASE_URL}/api`);
    jobs = await data.json();
  } catch (error: unknown) {
    console.warn(error);
  }

  if (!API_BASE_URL) return null;

  return (
    <div>
      <JobList state={{ jobs: jobs }} />
    </div>
  );
}
