import ApplyForm from "@/components/shared/ApplyForm";
import Featured from "@/components/shared/Featured";
import React from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const ApplyFormPage = async () => {
  const data = await fetch(`${API_BASE_URL}`);
  const jobs = await data.json();

  return (
    <div>
      <div className="h-full max-w-7xl mx-auto md:px-2 px-6 py-12">
        <div className="grid grid-cols-[4fr_1.25fr] gap-6">
          <ApplyForm />

          <div>
            <Featured jobs={jobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyFormPage;
