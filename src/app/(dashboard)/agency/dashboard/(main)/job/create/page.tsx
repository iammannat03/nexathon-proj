"use client";

import FormDialog from "@/components/form/FormDialog";
import JobCreated from "@/components/form/JobCreated";
import JobCreateDesc from "@/components/form/JobCreateDesc";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { Suspense, useState } from "react";

type Props = {};

const CreateJob = (props: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [formCompQuery, setFormCompQuery] = useState(query);
  console.log(formCompQuery);
  const router = useRouter();

  const createJobDescManually = () => {
    console.log("Create Job Description Manually");
    router.push(
      "/agency/dashboard/job/create/nefjkdbach-ewdsaf-fdceda",
    );
  };
  if (formCompQuery === "get-started") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col items-center justify-center w-full mx-auto p-10">
          <FormDialog
            title="Let's craft a Job Title"
            // description="description"
            content={
              <div className="w-72">
                <Label htmlFor="job-title">Job Title</Label>
                <Input
                  type="text"
                  id="job-title"
                  placeholder="Enter Job Title"
                  className=""
                />
              </div>
            }
            button1="Next"
            onClickButton1={() => setFormCompQuery("desc")}
            button1Variant="default"
            button1Class="font-bold px-10"
            displayButton={true}
          />
        </div>
      </Suspense>
    );
  } else if (formCompQuery === "desc") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {
          <JobCreateDesc
            setFormCompQuery={setFormCompQuery}
          />
        }
        {/*<p>HSK Disabled this due to build errors</p>*/}
      </Suspense>
    );
  } else if (formCompQuery === "job-created") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <JobCreated />;
      </Suspense>
    );
  }
};

const WrappedCreateJob = (props: Props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <CreateJob {...props} />
  </Suspense>
);

export default WrappedCreateJob;
