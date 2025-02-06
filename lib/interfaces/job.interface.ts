export interface Job {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  company: string;
  bonus: string[];
  requirements: any[];
  qualifications: any[];
  jobUrl: string;
}
