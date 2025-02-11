"use client";

import CandidateAdded from "@/components/form/CandidateAdded";
import FormDialog from "@/components/form/FormDialog";
import ProfilePreview from "@/components/form/ProfilePreview";
import {FileUpload} from "@/components/ui/file-upload";
import {useRouter, useSearchParams,} from "next/navigation";
import React, {Suspense, useState} from "react";

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
            "/dashboard/job/create/nefjkdbach-ewdsaf-fdceda"
        );
    };

    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log("this is file ", files);
    };
    if (formCompQuery === "get-started") {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div className="flex flex-col items-center justify-center w-full mx-auto p-10">
                    <FormDialog
                        title="Let's add a Candidate"
                        // description="description"
                        content={
                            <div className="min-w-72">
                                <div className="px-14 flex flex-col justify-center items-center">
                                    {/* <div className="flex flex-col justify-center items-center border border-white p-10 px-36 gap-y-6"> */}
                                    <div className="">
                                        <FileUpload
                                            onChange={handleFileUpload}
                                        />
                                    </div>
                                    {/* </div> */}
                                    {/* <div className="flex flex-col gap-y-2 justify-center items-center">
                  <span>
                    want to add multiple interview at once
                  </span>
                  <span>import multiple candidates</span>
                </div> */}
                                </div>
                            </div>
                        }
                        button1="Back"
                        onClickButton1={() =>
                            router.push(
                                "/dashboard/job/create?query=get-started"
                            )
                        }
                        button1Variant="outline"
                        button1Class="font-bold px-10"
                        button2="Next"
                        onClickButton2={() => setFormCompQuery("final")}
                        button2Variant="default"
                        button2Class="font-bold px-10"
                        displayButton={true}
                        displayOrBetweenButtons={false}
                    />
                </div>
            </Suspense>
        );
    } else if (formCompQuery === "final") {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <ProfilePreview
                    setFormCompQuery={setFormCompQuery}
                    files={files}
                />
            </Suspense>
        );
    } else if (formCompQuery === "candidate-added") {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <CandidateAdded/>;
            </Suspense>
        );
    }
};

const LoadableCreateJob = (props: Props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <CreateJob {...props} />
  </Suspense>
);

export default LoadableCreateJob;
