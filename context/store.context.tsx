"use client";

import { Job, StateData } from "@/lib/interfaces/job.interface";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type CreateContextType = {
  store: StateData;
  updateStore: (data: Job[]) => void;
  filteredJobs: { jobs: Job[] };
  updateFilteredJobs: (jobs: Job[]) => void;
};

const initialState = {
  jobs: [],
  locations: [],
  salaryRanges: [],
};

export const StoreContext = createContext<CreateContextType | null>(null);

export function StoreContextProvider({ children }: PropsWithChildren) {
  const [store, setStore] = useState<StateData>(initialState);
  const [filteredJobs, setFilteredJobs] = useState<{ jobs: Job[] }>({ jobs: [] });

  const updateStore = (jobs: Job[]) => {
    setStore((prev) => ({
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
        const response = await fetch(`${API_BASE_URL}/api`);
        const data = await response.json();

        setStore(data);
        updateFilteredJobs(data.jobs);
      } catch (error) {
        if (error instanceof Error) {
          setStore(initialState);
        }
      }
    })();
  }, []);

  return (
    <StoreContext.Provider value={{ store, updateStore, filteredJobs, updateFilteredJobs }}>
      {children}
    </StoreContext.Provider>
  );
}
