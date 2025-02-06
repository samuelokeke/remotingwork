import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Job } from "@/lib/interfaces/job.interface";
import Link from "next/link";

type JobDetailModalProps = {
  params: { id: number };
};

const JobDetailModal = async ({ params }: JobDetailModalProps) => {
  const id = (await params)?.id;
  const data = await fetch(`http://localhost:3001/api/${id}`);
  const job: Job = await data.json();

  return (
    <div>
      <Dialog open>
        <DialogContent className="sm:max-w-3xl [&>button]:hidden">
          <DialogHeader>
            <DialogTitle>{job.title}</DialogTitle>
            <DialogDescription>{job.description}</DialogDescription>
          </DialogHeader>

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

          <DialogFooter>
            <Link href={`${job.jobUrl ? job.jobUrl : `/job/${id}/apply`}`}>
              <Button type="submit">Apply to this job</Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobDetailModal;
