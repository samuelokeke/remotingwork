"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MAX_SIZE = 1000000;

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  phone_number: z.string().min(10, {
    message: "Phone number must be at least 2 characters.",
  }),
  years: z.string({ required_error: "years of experience must be at least 1 characters." }),
  cover_letter: z.string().min(2, {
    message: "Username must be at least 50 characters.",
  }),
  resume: z.instanceof(File).refine(
    (file) => {
      if (file.size < MAX_SIZE) {
        return true;
      }
      return false;
    },
    {
      message: "Resume must be below 1mb",
    }
  ),
});

const ApplyForm = () => {
  const experienceYears = 10;
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      years: "",
      phone_number: "",
      cover_letter: "",
      resume: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.info(values);

    await toast({
      title: "Job application sent!",
      description: "Your application is on the fastest to the company HR departmemnt",
    });

    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="Enter first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resume"
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { value, onChange, ...fieldOptions } }) => (
              <FormItem>
                <FormLabel>Resume</FormLabel>
                <FormControl>
                  <Input
                    id="picture"
                    type="file"
                    {...fieldOptions}
                    onChange={({ target }) => onChange(target.files && target.files[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="years"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of experience</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your year of experience" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {[...Array(experienceYears).keys()].map((_, i) => (
                      <SelectItem key={i} value={(i + 1).toString()}>
                        {i + 1} year{i > 0 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cover_letter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover letter</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplyForm;
