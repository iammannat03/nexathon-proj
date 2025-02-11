import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillEditor = dynamic(() => import("react-quill"), {
  ssr: false,
});

const NonStrictWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default function Home() {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
      ],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  return (
    <main>
      <div className="flex items-center flex-col">
        <div className="h-full w-full">
          {/* <NonStrictWrapper>
            <QuillEditor
              value={content}
              onChange={handleEditorChange}
              modules={quillModules}
              formats={quillFormats}
              className="w-full h-[70%] mt-10 bg-white"
            />
          </NonStrictWrapper> */}
        </div>
      </div>
    </main>
  );
}
