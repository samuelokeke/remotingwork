"use client";

import React, { useContext } from "react";
import JobCard from "@/components/shared/JobCard";
import { Job } from "@/lib/interfaces/job.interface";
import Featured from "@/components/shared/Featured";
import SearchBar from "@/components/shared/SearchBar";
import { JobContext } from "@/context/job.context";

type JobListProps = {
  jobs: Job[];
};

const JobList = (props: JobListProps) => {
  const { jobs, filteredJobs } = useContext(JobContext)!;

  const jobsList = filteredJobs.jobs?.length ? filteredJobs.jobs : jobs.jobs;

  return (
    <section>
      <div className="h-full max-w-7xl mx-auto md:px-2 px-6">
        <div className="mb-12">
          <SearchBar />
        </div>

        <div className="grid grid-cols-[4fr_1.25fr] gap-6">
          <div className="lg:col-span-1 col-span-2 grid grid-cols-12 gap-x-3 lg:gap-x-6 gap-y-10 items-start">
            {jobsList.map((job, i) => (
              <JobCard key={i} job={job} />
            ))}
          </div>

          <div className="lg:col-span-1 col-span-2">
            <Featured jobs={jobs.jobs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobList;
