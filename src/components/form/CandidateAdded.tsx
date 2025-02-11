import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const CandidateAdded = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto p-10">
      <Card>
        <CardContent className="py-6">
          <div className="flex gap-x-6">
            <div className="rounded-lg  flex flex-col justify-center items-center gap-y-3">
              <span className="text-4xl font-extrabold">
                Thank you
              </span>
              <span className="flex flex-col gap-y-0 justify-center items-center">
                <span className="text-sm">
                  Candidate has been added.
                </span>
                <span className="text-sm">
                  You can now move to the next step.
                </span>
              </span>
            </div>
            <div className="border-l rounded-lg px-8 flex flex-col gap-y-5">
              <CardHeader className="text-2xl font-bold spacing-y-0 py-3 px-6">
                Next Steps
              </CardHeader>
              <Button
              //   todo: visible only if interview is created
              // onClick={() =>
              //   router.push(
              //     "/dashboard/job/add-candidate?query=get-started"
              //   )
              // }
              >
                Invite a Candidate
              </Button>
              {/* <Button>Create Interview</Button> */}
              <Button
                onClick={() =>
                  router.push("/agency/dashboard")
                }
              >
                Go back to Dashboard
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidateAdded;
