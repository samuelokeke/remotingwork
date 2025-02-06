"use client";

import { Job, StateData } from "@/lib/interfaces/job.interface";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type CreateContextType = {
  jobs: StateData;
  updateJobs: (jobs: Job[]) => void;
  filteredJobs: { jobs: Job[] };
  updateFilteredJobs: (jobs: Job[]) => void;
};

const initialState = {
  jobs: [],
  locations: [],
  salaryRanges: [],
};

export const JobContext = createContext<CreateContextType | null>(null);

export function JobContextProvider({ children }: PropsWithChildren) {
  const [jobs, setJobs] = useState<StateData>(initialState);
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
      try {
        const response = await fetch(`${API_BASE_URL}`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        if (error instanceof Error) {
          setJobs(initialState);
        }
      }
    })();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, updateJobs, filteredJobs, updateFilteredJobs }}>{children}</JobContext.Provider>
  );
}
