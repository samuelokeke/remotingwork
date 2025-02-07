import { Job } from "./job.interface";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  skills: string[];
  favorites: Job[];
}
