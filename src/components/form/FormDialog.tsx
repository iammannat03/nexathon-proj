import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type Props = {
  title: string;
  description?: string;
  className?: string;
  content: React.ReactNode;
  button1: React.ReactNode;
  button1Icon?: React.ReactNode;
  button2Icon?: React.ReactNode;
  onClickButton1?: () => void;
  onClickButton2?: () => void;
  button1Type?: "button" | "submit" | "reset" | undefined;
  button2Type?: "button" | "submit" | "reset" | undefined;
  button1Class: string;
  button2?: React.ReactNode;
  button2Class?: string;
  button1Variant:
    | "link"
    | "ghost"
    | "default"
    | "destructive"
    | "outline"
    | "secondary";
  button2Variant?:
    | "link"
    | "ghost"
    | "default"
    | "destructive"
    | "outline"
    | "secondary";
  displayButton?: boolean;
  displayOrBetweenButtons?: boolean;
};

const FormDialog = ({
  title,
  description,
  content,
  button1,
  button1Class,
  button1Variant,
  button1Type,
  button2Type,
  onClickButton1,
  onClickButton2,
  button2,
  button2Class,
  button2Variant,
  button1Icon,
  button2Icon,
  displayButton,
  displayOrBetweenButtons = true,
  className,
}: Props) => {
  return (
    <Card className={`px-12 flex flex-col ${className}`}>
      {/* add a modal for confirmation */}
      <div className="self-end relative top-4 -right-6 border border-white/30 rounded-full p-1 cursor-pointer group hover:border-white/50">
        <X className="h-5 w-5 text-white/50 group-hover:text-white/70" />
      </div>
      <CardHeader className="">
        <CardTitle className="text-center text-2xl font-bold flex justify-center items-center">
          <span className="flex-1">{title}</span>
        </CardTitle>
        <CardDescription className="text-center">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter
        className={cn(
          "justify-center items-center gap-x-5",
          displayButton ? "flex" : "hidden"
        )}
      >
        {/* <CardFooter className={!button2 ? "flex items-center justify-center" : ""}> */}
        {!button2 ? (
          <>
            <Button
              className={`${button1Class}`}
              variant={button1Variant}
              type={button1Type}
              onClick={onClickButton1}
            >
              <span className="flex items-center justify-center gap-2">
                {button1Icon}
                <span>{button1}</span>
              </span>
            </Button>
          </>
        ) : (
          <>
            <Button
              className={button1Class}
              variant={button1Variant}
              type={button1Type}
              onClick={onClickButton1}
            >
              <span className="flex items-center justify-center gap-2">
                {button1Icon}
                <span>{button1}</span>
              </span>
            </Button>
            <span
              className={cn(
                `text-gray-500 text-sm`,
                displayOrBetweenButtons ? "block" : "hidden"
              )}
            >
              or
            </span>
            <Button
              className={button2Class}
              variant={button2Variant}
              type={button2Type}
              onClick={onClickButton2}
            >
              <span className="flex items-center justify-center gap-2">
                {button2Icon}
                <span>{button2}</span>
              </span>
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default FormDialog;
