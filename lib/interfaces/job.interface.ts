export interface Job {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  company: string;
  bonus: string[];
  requirements: string[];
  qualifications: string[];
  jobUrl: string;
}

export type StateData = { jobs: Job[]; locations?: []; salaryRanges?: [] };
