'use client'
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const technicalSkillsOptions = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "TypeScript",
  "SQL",
  "AWS",
  "Docker",
  "Git",
  "HTML/CSS",
] as const

const softSkillsOptions = [
  "Communication",
  "Leadership",
  "Problem Solving",
  "Team Work",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Project Management",
  "Conflict Resolution",
  "Emotional Intelligence",
] as const

// Zod schemas
const personalInfoSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  location: z.string().min(2, { message: "Please enter your location." }),
  portfolio: z.string().url().optional(),
  summary: z.string().min(50, { message: "Summary should be at least 50 characters." }),
})

const experienceSchema = z.object({
  experiences: z.array(z.object({
    company: z.string().min(2, { message: "Company name is required." }),
    position: z.string().min(2, { message: "Position is required." }),
    startDate: z.string().min(1, { message: "Start date is required." }),
    endDate: z.string().min(1, { message: "End date is required." }),
    description: z.string().min(50, { message: "Description should be at least 50 characters." }),
  })).min(1)
})

const educationSchema = z.object({
  education: z.array(z.object({
    institution: z.string().min(2, { message: "Institution name is required." }),
    degree: z.string().min(2, { message: "Degree is required." }),
    field: z.string().min(2, { message: "Field of study is required." }),
    graduationDate: z.string().min(1, { message: "Graduation date is required." }),
    gpa: z.string().optional(),
  })).min(1)
})

const skillsSchema = z.object({
  technicalSkills: z.array(z.enum(technicalSkillsOptions)).min(1, { message: "Please select at least one technical skill." }),
  softSkills: z.array(z.enum(softSkillsOptions)).min(1, { message: "Please select at least one soft skill." }),
})

const projectsSchema = z.object({
  projects: z.array(z.object({
    name: z.string().min(2, { message: "Project name is required." }),
    description: z.string().min(50, { message: "Project description should be at least 50 characters." }),
    technologies: z.string().min(2, { message: "Please list technologies used." }),
    link: z.string().url().optional(),
  })).min(1)
})

const formSchema = z.object({
  ...personalInfoSchema.shape,
  ...experienceSchema.shape,
  ...educationSchema.shape,
  ...skillsSchema.shape,
  ...projectsSchema.shape,
})

type FormData = z.infer<typeof formSchema>

interface Field {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'date' | 'textarea' | 'multiselect';
  options?: readonly string[];
}

interface BaseStep {
  title: string;
  fields: Field[];
}

interface SingleStep extends BaseStep {
  type: 'single';
}

interface ArrayStep extends BaseStep {
  type: 'array';
  arrayField: keyof Pick<FormData, 'experiences' | 'education' | 'projects'>;
}

type FormStep = SingleStep | ArrayStep;

const formSteps: FormStep[] = [
  {
    title: "Personal Information",
    type: "single",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "location", label: "Location", type: "text" },
      { name: "portfolio", label: "Portfolio Website", type: "url" },
      { name: "summary", label: "Professional Summary", type: "textarea" },
    ],
  },
  {
    title: "Professional Experience",
    type: "array",
    arrayField: "experiences",
    fields: [
      { name: "company", label: "Company", type: "text" },
      { name: "position", label: "Position", type: "text" },
      { name: "startDate", label: "Start Date", type: "date" },
      { name: "endDate", label: "End Date", type: "date" },
      { name: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    title: "Education",
    type: "array",
    arrayField: "education",
    fields: [
      { name: "institution", label: "Institution", type: "text" },
      { name: "degree", label: "Degree", type: "text" },
      { name: "field", label: "Field of Study", type: "text" },
      { name: "graduationDate", label: "Graduation Date", type: "date" },
      { name: "gpa", label: "GPA (Optional)", type: "text" },
    ],
  },
  {
    title: "Skills",
    type: "single",
    fields: [
      { name: "technicalSkills", label: "Technical Skills", type: "multiselect", options: technicalSkillsOptions },
      { name: "softSkills", label: "Soft Skills", type: "multiselect", options: softSkillsOptions },
    ],
  },
  {
    title: "Projects",
    type: "array",
    arrayField: "projects",
    fields: [
      { name: "name", label: "Project Name", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "technologies", label: "Technologies Used", type: "text" },
      { name: "link", label: "Project Link (Optional)", type: "url" },
    ],
  },
]

const ResumeBuilder = () => {
  const [step, setStep] = useState(0)
  const progress = ((step + 1) / formSteps.length) * 100

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      portfolio: "",
      summary: "",
      experiences: [{
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      }],
      education: [{
        institution: "",
        degree: "",
        field: "",
        graduationDate: "",
        gpa: "",
      }],
      technicalSkills: [],
      softSkills: [],
      projects: [{
        name: "",
        description: "",
        technologies: "",
        link: "",
      }],
    },
  })

  const onSubmit = (values: FormData) => {
    const generateJakeResume = (data: FormData) => {
      return {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        location: data.location,
        portfolio: data.portfolio,
        summary: data.summary,
        experience: data.experiences.map(exp => ({
          company: exp.company,
          position: exp.position,
          startDate: exp.startDate,
          endDate: exp.endDate,
          description: exp.description,
        })),
        education: data.education.map(edu => ({
          institution: edu.institution,
          degree: edu.degree,
          field: edu.field,
          graduationDate: edu.graduationDate,
          gpa: edu.gpa,
        })),
        skills: {
          technical: data.technicalSkills,
          soft: data.softSkills,
        },
        projects: data.projects.map(project => ({
          name: project.name,
          description: project.description,
          technologies: project.technologies,
          link: project.link,
        })),
      };
    };
  
    const resumeData = generateJakeResume(values);
    
    // Optionally, log the generated resume data to see its structure
    console.log("Generated Jake's Resume:", resumeData);
    
    // Optionally, save the resume data to a file or handle it further
    // For example, you could use file-saver to download it as a JSON or PDF
    // or send it to a server for saving or processing.
  };

  const renderField = (
    fieldConfig: Field,
    fieldProps: Record<string, any>
  ) => {
    if (fieldConfig.type === "multiselect") {
      return (
        <FormItem className="space-y-2">
          <FormLabel>{fieldConfig.label}</FormLabel>
          <FormControl>
            <Select
              {...fieldProps}
              value={fieldProps.value?.join(",")}
              onValueChange={(value) => {
                const selectedValues = value.split(",").filter(Boolean)
                fieldProps.onChange(selectedValues)
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${fieldConfig.label}`} />
              </SelectTrigger>
              <SelectContent>
                {fieldConfig.options?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )
    }

    return (
      <FormItem className="space-y-2">
        <FormLabel>{fieldConfig.label}</FormLabel>
        <FormControl>
          {fieldConfig.type === "textarea" ? (
            <Textarea className="min-h-[100px]" {...fieldProps} />
          ) : (
            <Input type={fieldConfig.type} {...fieldProps} />
          )}
        </FormControl>
        <FormMessage />
      </FormItem>
    )
  }

  const currentStep = formSteps[step]

  const handleAddItem = (arrayField: keyof Pick<FormData, 'experiences' | 'education' | 'projects'>) => {
    const currentArray = form.getValues(arrayField)
    if (currentArray) {
      const emptyItem = Object.fromEntries(
        Object.keys(currentArray[0]).map(key => [key, ""])
      )
      form.setValue(arrayField, [...currentArray, emptyItem])
    }
  }

  const handleRemoveItem = (
    arrayField: keyof Pick<FormData, 'experiences' | 'education' | 'projects'>,
    index: number
  ) => {
    const currentArray = form.getValues(arrayField)
    if (currentArray && currentArray.length > 1) {
      form.setValue(
        arrayField,
        currentArray.filter((_, i) => i !== index)
      )
    }
  }

  return (
    <div className="w-[75vh] mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Progress</h2>
        <Progress value={progress} className="h-2" />
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{currentStep.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep.type === "array" ? (
                <div className="space-y-6">
                  {form.getValues(currentStep.arrayField)?.map((_, index) => (
                    <div key={index} className="space-y-4 p-6 border rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">
                          {currentStep.title} {index + 1}
                        </h3>
                        {form.getValues(currentStep.arrayField).length > 1 && (
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => handleRemoveItem(currentStep.arrayField, index)}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                      <div className="space-y-4">
                        {currentStep.fields.map((field) => (
                          <FormField
                            key={field.name}
                            control={form.control}
                            name={`${currentStep.arrayField}.${index}.${field.name}`}
                            render={({ field: fieldProps }) => renderField(field, fieldProps)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleAddItem(currentStep.arrayField)}
                    className="w-full"
                  >
                    Add Another {currentStep.title}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {currentStep.fields.map((field) => (
                    <FormField
                      key={field.name}
                      control={form.control}
                      name={field.name as keyof FormData}
                      render={({ field: fieldProps }) => renderField(field, fieldProps)}
                    />
                  ))}
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(prev => Math.max(0, prev - 1))}
                  disabled={step === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                {step === formSteps.length - 1 ? (
                  <Button type="submit">
                    Submit Resume
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setStep(prev => Math.min(formSteps.length - 1, prev + 1))}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
}

export default ResumeBuilder