import React from "react";
import JobList from "./JobList";

export default async function JobsPage() {
  /** use this instead if you use an API */
  const data = await fetch("http://localhost:3001/api");
  const jobs = await data.json();

  return (
    <div>
      <JobList jobs={jobs} />
    </div>
  );
}
