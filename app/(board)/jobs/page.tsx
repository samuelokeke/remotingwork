import React from "react";
import JobList from "./JobList";
import { Job } from "@/lib/interfaces/job.interface";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function JobsPage() {
  let jobs: Job[] = [];

  try {
    const data = await fetch(`${API_BASE_URL}`);
    jobs = await data.json();
  } catch (error: unknown) {
    console.warn(error);
  }

  return (
    <div>
      <JobList state={{ jobs: jobs }} />
    </div>
  );
}
