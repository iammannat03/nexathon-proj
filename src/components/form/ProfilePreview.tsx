"use client";
import React, { use, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Pencil, Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import FormDialog from "./FormDialog";
import { z } from "zod";
import DescriptionTextEditor from "./DescriptionTextEditor";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  setFormCompQuery: (value: string) => void;
  files: File[];
};

const form2Schema = z.object({
  title: z.string().min(1),
  code: z.string().min(1),
  experience: z.string().min(1),
  employmentType: z.string().min(1),
  jobType: z.string().min(1),
  officeLocation: z.string().min(1),
  department: z.string().min(1),
  industry: z.string().min(1),
  salary: z.string().min(1),
});

import DocViewer, {
  DocViewerRenderers,
} from "@cyntler/react-doc-viewer";

const ProfilePreview = ({
  setFormCompQuery,
  files,
}: Props) => {
  const [textEditor, setTextEditor] = useState(false);
  const [descType, setDescType] = useState<
    string | null | undefined
  >(null);

  const form2 = useForm<z.infer<typeof form2Schema>>({
    resolver: zodResolver(form2Schema),
    defaultValues: {
      title: "",
      code: "",
      experience: "",
      employmentType: "",
      jobType: "",
      officeLocation: "",
      department: "",
      industry: "",
      salary: "",
    },
  });

  const createJobDescManually = (
    values: z.infer<typeof form2Schema>
  ) => {
    // step 1: opening the text editor
    setDescType("manual");
    setTextEditor(true);
    console.log("manual");
    console.log(values);
    setDescType(undefined);
  };

  const createJobDescAI = (
    values: z.infer<typeof form2Schema>
  ) => {
    // step 1: opening the text editor
    setDescType("ai");
    setTextEditor(true);
    console.log("ai");
    console.log(values);
    setDescType(undefined);
  };

  const router = useRouter();
  console.log("preview ", files);

  const docs = [
    {
      uri: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
      fileType: "application/pdf",
      fileName: "Matty's Resume",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto p-10">
      <Form {...form2}>
        <form>
          <div>
            <FormDialog
              title="Profile Preview"
              className="min-w-[800px]"
              content={
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <div className="border border-white/50 py-36 px-24"></div>
                    <div>
                      <PDFViewer files={files} />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col justify-start items-center gap-y-3">
                    <div className="w-full border rounded-lg">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">
                            Light
                          </SelectItem>
                          <SelectItem value="dark">
                            Dark
                          </SelectItem>
                          <SelectItem value="system">
                            System
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="rounded-lg p-5 w-full flex flex-col items-start justify-center">
                      <h3 className="text-xl font-bold mb-3">
                        Application details
                      </h3>
                      <div className="grid grid-cols-2 gap-x-5">
                        <div className="col-span-1 flex flex-col gap-y-2">
                          <div>
                            <Label htmlFor="first-name">
                              First Name
                            </Label>
                            <Input
                              id="first-name"
                              type="text"
                              placeholder="Enter the first name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter the email"
                            />
                          </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-y-2">
                          <div>
                            <Label htmlFor="last-name">
                              Last Name
                            </Label>
                            <Input
                              id="last-name"
                              type="text"
                              placeholder="Enter the last name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">
                              Phone
                            </Label>
                            <Input
                              id="phone"
                              type="number"
                              placeholder="Enter the phone number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              button1="Back"
              button1Class="font-bold"
              onClickButton1={() =>
                setFormCompQuery("get-started")
              }
              onClickButton2={() =>
                setFormCompQuery("candidate-added")
              }
              button1Type="button"
              button2Type="button"
              button1Variant="outline"
              button2="Finish"
              displayButton={descType !== undefined}
              displayOrBetweenButtons={false}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfilePreview;

// import { Document, Page, pdfjs } from "react-pdf";

// const PDFViewer = ({ files }: { files: File[] }) => {
//   pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     "pdfjs-dist/build/pdf.worker.min.js",
//     import.meta.url
//   ).toString();

//   return (
//     <Document
//       file={files[0]}
//       onLoadSuccess={() => console.log("loaded pdf")}
//     >
//       <Page pageNumber={1} />
//     </Document>
//   );
// };

const PDFViewer = ({ files }: { files: File[] }) => {
  return (
    <>
      HSK Disabled this due to build error
    </>
  );
}