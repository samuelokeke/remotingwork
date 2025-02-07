export interface Job {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  company: string;
  companyLogoUrl: string;
  location: string;
  salary: number;
  bonus: string[];
  requirements: string[];
  qualifications: string[];
  jobUrl: string;
  contractType: string;
}

export type StateData = { jobs: Job[]; locations?: string[]; salaryRanges?: string[] };
