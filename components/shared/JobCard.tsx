import React from "react";
import Link from "next/link";
import { Job } from "@/lib/interfaces/job.interface";

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  return (
    <article className="relative group md:col-span-4 col-span-12 bg-[url('/images/card-particles.png')] bg-no-repeat bg-[length:100px] bg-right-bottom bg-primary-foreground p-4 border-2 rounded hover:bg-white hover:shadow">
      <div className="absolute -top-7 left-1/2 -translate-x-2/4 w-14 h-14 bg-white border-2 rounded-full"></div>

      <div className="h-full flex flex-col gap-4 justify-between items-start">
        <div>
          <p className="text-xs text-gray-400 mb-1">Company name</p>

          <Link
            href={`job/${job.id}`}
            className="text-primary font-semibold dark:group-hover:text-primary-foreground mb-2"
          >
            {job.title}
          </Link>

          <p className="text-sm text-gray-600 dark:group-hover:text-primary-foreground dark:text-gray-200 mb-1">
            Country
          </p>

          <p className="text-sm text-gray-600 dark:group-hover:text-primary-foreground dark:text-gray-200">
            300k &#8212; 800k
          </p>
        </div>

        <Link href={`job/${job.id}`}>
          <button className="bg-primary dark:border text-primary-foreground py-1 px-3 rounded">Apply</button>
        </Link>
      </div>
    </article>
  );
};

export default JobCard;
