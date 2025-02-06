"use client";

import { Job } from "@/lib/interfaces/job.interface";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type CreateContextType = {
  jobs: { jobs: Job[]; locations: []; salaryRanges: [] };
  updateJobs: (jobs: Job[]) => void;
  filteredJobs: { jobs: Job[] };
  updateFilteredJobs: (jobs: Job[]) => void;
};

export const JobContext = createContext<CreateContextType | null>(null);

export function JobContextProvider({ children }: PropsWithChildren) {
  const [jobs, setJobs] = useState<{ jobs: Job[]; locations: []; salaryRanges: [] }>({
    jobs: [],
    locations: [],
    salaryRanges: [],
  });
  const [filteredJobs, setFilteredJobs] = useState<{ jobs: Job[] }>({ jobs: [] });

  const updateJobs = (jobs: Job[]) => {
    setJobs((prev) => ({
      ...prev,
      jobs: jobs,
    }));
  };

  const updateFilteredJobs = (jobs: Job[]) => {
    setFilteredJobs((prev) => ({
      ...prev,
      jobs: jobs,
    }));
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/api");
      const data = await response.json();

      setJobs(data);
    })();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, updateJobs, filteredJobs, updateFilteredJobs }}>{children}</JobContext.Provider>
  );
}
