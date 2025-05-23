import { Job } from "@/lib/interfaces/job.interface";
import Link from "next/link";
import React from "react";

type JobDetailProps = {
  params: Promise<{ id: number }>;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const JobDetail = async ({ params }: JobDetailProps) => {
  const id = (await params)?.id;
  const data = await fetch(`${API_BASE_URL}/api/${id}`);
  const job: Job = await data.json();

  return (
    <div className="relative bg-secondary">
      <div className="h-full max-w-7xl mx-auto md:px-4 px-6 py-12">
        <div className="flex md:flex-row flex-col justify-between items-start gap-4 mb-8">
          <h1 className="text-xl font-bold">{job.title}</h1>

          <Link
            href={`${job.jobUrl ?? `/job/${id}/apply`}`}
            target={job.jobUrl ? "_blank" : "_self"}
            rel={job.jobUrl ? "noopener noreferrer" : undefined}
          >
            <button className="bg-primary text-primary-foreground py-1 px-3 rounded">Apply for this role</button>
          </Link>
        </div>

        <div className="grid gap-10">
          <div>
            <h2 className="text-base font-semibold mb-1">Description</h2>

            <p>{job?.description}</p>
          </div>

          <div>
            <h2 className="text-base font-semibold mb-1">Requirements</h2>

            <ul>
              {job.requirements.map((requirement, i) => (
                <li key={i}>{requirement}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold mb-1">Qualifications</h2>

            <ul>
              {job.qualifications.map((qualification, i) => (
                <li key={i}>{qualification}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 z-20 md:hidden w-full h-14 md:px-2 px-6 bg-secondary border-t flex items-center">
        <Link
          href={`${job.jobUrl ?? `/job/${id}/apply`}`}
          target={job.jobUrl ? "_blank" : "_self"}
          rel={job.jobUrl ? "noopener noreferrer" : undefined}
        >
          <button className="bg-primary text-primary-foreground py-1 px-3 rounded">Apply for this role</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetail;
