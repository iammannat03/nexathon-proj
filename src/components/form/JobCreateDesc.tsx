"use client";
import React, { useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Pencil, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import FormDialog from "./FormDialog";
import { z } from "zod";

import { useJobsData } from "@/hooks/useJobsData";

type Props = {
  setFormCompQuery: (value: string) => void;
};

const form2Schema = z.object({
  title: z.string().min(1),
  code: z.string().min(1),
  experience: z.string().min(1),
  employmentType: z.string().min(1),
  jobType: z.string().min(1),
  officeLocation: z.string().min(1),
  company: z.string().min(1),
  industry: z.string().min(1),
  salary: z.string().min(1),
});

enum RESPONSE_STATUS {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

const JobCreateDesc = ({ setFormCompQuery }: Props) => {
  const [textEditor, setTextEditor] = useState(false);
  const [descType, setDescType] = useState<
    string | null | undefined
  >(null);
  const [readOnly, setReadOnly] = useState(false);

  // Use a ref to access the quill instance directly
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  const form2 = useForm<z.infer<typeof form2Schema>>({
    resolver: zodResolver(form2Schema),
    defaultValues: {
      title: "",
      code: "",
      experience: "",
      employmentType: "",
      jobType: "",
      officeLocation: "",
      company: "",
      industry: "",
      salary: "",
    },
  });

  const createJobDescManually = (
    values: z.infer<typeof form2Schema>,
  ) => {
    // step 1: opening the text editor
    setDescType("manual");
    setTextEditor(true);
    console.log("manual");
    console.log(values);
    setDescType(undefined);
  };

  const createJobDescAI = (
    values: z.infer<typeof form2Schema>,
  ) => {
    // step 1: opening the text editor
    setDescType("ai");
    setTextEditor(true);
    console.log("ai");
    console.log(values);
    setDescType(undefined);
  };

  const [responseState, setResponseState] =
    React.useState<RESPONSE_STATUS>(RESPONSE_STATUS.IDLE);

  const { addJob } = useJobsData();

  async function handleAddJob() {
    try {
      setResponseState(RESPONSE_STATUS.LOADING);
      // await addJob({})
      setResponseState(RESPONSE_STATUS.SUCCESS);
    } catch (e) {
      setResponseState(RESPONSE_STATUS.ERROR);
      alert("Error Occur");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto p-10">
      <Form {...form2}>
        <form>
          <FormDialog
            title="What's the job all about?"
            className="min-w-[800px]"
            content={
              <div className="flex flex-col gap-y-5">
                {/* Job Title */}
                <div className="flex justify-between w-full gap-x-5">
                  <FormField
                    control={form2.control}
                    name="title"
                    render={({ field }: any) => (
                      <FormItem className="flex-1">
                        <FormLabel className="font-bold">
                          Job Title
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Job Title"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Experience */}
                <FormField
                  control={form2.control}
                  name="experience"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Experience Required
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Experience Required"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Employment Type */}
                <FormField
                  control={form2.control}
                  name="employmentType"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Employment Type
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Employment Type"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Job Type & Office Location */}
                <div className="grid grid-cols-2 gap-x-5">
                  <FormField
                    control={form2.control}
                    name="jobType"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          Job Type
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Job Type"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form2.control}
                    name="industry"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          Industry
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Industry"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Department & Industry */}
                <div className="grid grid-cols-2 gap-x-5">
                  <FormField
                    control={form2.control}
                    name="company"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          Company{" "}
                          <span
                            className={
                              "text-xs text-gray-400"
                            }
                          >
                            (Optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Company"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form2.control}
                    name="officeLocation"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          Office Location{" "}
                          <span
                            className={
                              "text-xs text-gray-400"
                            }
                          >
                            (Optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Office Location"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Salary */}
                <FormField
                  control={form2.control}
                  name="salary"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Salary Details{" "}
                        <span className="text-xs text-gray-400">
                          (Optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Salary Details"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            }
            button1="Create Manually"
            button1Icon={<Pencil />}
            button1Class="font-bold"
            onClickButton1={() =>
              setFormCompQuery("job-created")
            }
            onClickButton2={() =>
              setFormCompQuery("job-created")
            }
            button1Type="button"
            button2Type="button"
            button1Variant="outline"
            button2="Generate with AI"
            button2Icon={
              <Sparkles className="fill-black" />
            }
            displayButton={true}
          />
        </form>
      </Form>
    </div>
  );
};

export default JobCreateDesc;
