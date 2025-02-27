import React from "react";
import Link from "next/link";
import { Job } from "@/lib/interfaces/job.interface";
import { formatCurrency } from "@/lib/utils";
import { ShieldHalf } from "lucide-react";
import { motion, Variants } from "framer-motion";

type JobCardProps = {
  job: Job;
  index?: number;
};

const JobCard = ({ job }: JobCardProps) => {
  const jobVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.article
      variants={jobVariants}
      className="relative group md:col-span-4 col-span-12 bg-[url('/images/card-particles.png')] bg-no-repeat bg-[length:100px] bg-right-bottom bg-primary-foreground p-4 border-2 rounded hover:bg-white hover:shadow"
    >
      <div className="absolute -top-7 left-1/2 -translate-x-2/4 w-14 h-14 bg-primary grid place-content-center border-2 rounded-full">
        <ShieldHalf className="text-primary-foreground" />
      </div>

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
            {job.location}
          </p>

          <p className="text-sm text-gray-600 dark:group-hover:text-primary-foreground dark:text-gray-200">
            {formatCurrency(job.salary)}
          </p>
        </div>

        <Link href={`job/${job.id}`}>
          <button className="bg-primary dark:border text-primary-foreground py-1 px-3 rounded">Apply</button>
        </Link>
      </div>
    </motion.article>
  );
};

export default JobCard;
