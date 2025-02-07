import { Job } from "@/lib/interfaces/job.interface";
import React from "react";

type FeaturedProps = {
  jobs: Job[];
};

const Featured = ({ jobs }: FeaturedProps) => {
  const featuredJobs = jobs.filter((job) => job.featured);

  return (
    <div className="sticky top-0 bg-primary-foreground rounded border border-gray-200 dark:border-gray-800 border-b-4 px-4 py-6">
      <h1 className="text-base font-bold mb-2">Featured</h1>

      <div className="flex flex-col gap-4">
        {featuredJobs.map((job, i) => (
          <div key={i} className="p-2 rounded border">
            <h3 className="text-sm font-semibold mb-1.5">{job.title}</h3>
            <p className="text-sm">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
