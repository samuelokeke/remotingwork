import React from "react";
import JobList from "./JobList";
import { Job } from "@/lib/interfaces/job.interface";

export default async function JobsPage() {
  let jobs: Job[] = [];

  try {
    const data = await fetch("http://localhost:3001/api");
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
