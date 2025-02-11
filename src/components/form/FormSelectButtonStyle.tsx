"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Label } from "../ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { id: "recents", label: "Recents" },
  { id: "home", label: "Home" },
  { id: "applications", label: "Applications" },
  { id: "desktop", label: "Desktop" },
  { id: "downloads", label: "Downloads" },
  { id: "documents", label: "Documents" },
] as const;

const FormSchema = z.object({
  items: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

export function CheckboxReactHookFormMultiple() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">
                  Sidebar
                </FormLabel>
                <FormDescription>
                  Select the items you want to display in
                  the sidebar.
                </FormDescription>
              </div>
              <div className="flex gap-x-3 bg-black border p-2 rounded-lg">
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => (
                      <Label htmlFor={item.id}>
                        <FormItem
                          key={item.id}
                          className={cn(
                            "flex flex-row items-start space-x-2 space-y-0 p-2 rounded-lg border",
                            field.value?.includes(item.id)
                              ? "bg-blue-500/30 text-blue-400 border border-blue-500"
                              : "bg-white/10"
                          )}
                        >
                          <FormControl>
                            <Checkbox
                              className="text-green-500"
                              id={item.id}
                              checked={field.value?.includes(
                                item.id
                              )}
                              onCheckedChange={(
                                checked
                              ) => {
                                return checked
                                  ? field.onChange([
                                      ...field.value,
                                      item.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) =>
                                          value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel
                            className="font-normal cursor-pointer"
                            htmlFor={item.id}
                          >
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      </Label>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
