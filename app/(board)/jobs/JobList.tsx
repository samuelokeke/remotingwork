"use client";

import React, { useContext } from "react";
import JobCard from "@/components/shared/JobCard";
import { motion, Variants } from "framer-motion";
import { StateData } from "@/lib/interfaces/job.interface";
import Featured from "@/components/shared/Featured";
import FilterOptions from "@/components/shared/FilterOptions";
import { StoreContext } from "@/context/store.context";

type JobListProps = {
  state: StateData;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const JobList = (props: JobListProps) => {
  const { store, filteredJobs } = useContext(StoreContext)!;

  const jobsList = filteredJobs.jobs;

  const jobListVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 4,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <section>
      <div className="h-full max-w-7xl mx-auto md:px-2 px-6">
        <div className="mb-12">
          <FilterOptions />
        </div>

        <div className="grid grid-cols-[4fr_1.25fr] gap-6">
          <motion.div
            variants={jobListVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 col-span-2 grid grid-cols-12 gap-x-3 lg:gap-x-6 gap-y-12 place-content-start"
          >
            {jobsList.map((job, i) => (
              <JobCard key={i} job={job} index={i} />
            ))}
          </motion.div>

          <div className="lg:col-span-1 col-span-2">
            <Featured jobs={store.jobs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobList;
