"use client";

import { JobContext } from "@/context/job.context";
import React, { useContext } from "react";
import { z } from "zod";
import { debounce } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  search: z.optional(
    z.string({
      message: "Search query must be at least 2 characters.",
    })
  ),
  location: z.string({ required_error: "location must be selected." }),
  salary: z.string({ required_error: "Salary range must be selected." }),
});

const SearchBar = () => {
  const { jobs, updateFilteredJobs } = useContext(JobContext)!;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      location: "",
      salary: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const search = values.search;
    const location = values.location;
    const [low, high] = values.salary?.split(" — ");

    const jobsFiltered = jobs.jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(search!.toLowerCase()) &&
        job.location.toLowerCase() === location?.toLowerCase() &&
        job.salary >= +low &&
        job.salary <= +high
      );
    });

    updateFilteredJobs(jobsFiltered);
  }

  const debouncedChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value?.toLowerCase();

    const jobsFiltered = jobs.jobs.filter((job) => job.title.toLowerCase().includes(search));

    updateFilteredJobs(jobsFiltered);
  }, 500);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3">
        <div className="group bg-secondary flex items-center focus-within:ring-1 focus-within:ring-ring rounded">
          <FormField
            control={form.control}
            name="search"
            render={({ field: { value, ...fieldOptions } }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input
                    {...fieldOptions}
                    type="search"
                    placeholder="Search job..."
                    className="flex h-9 w-full rounded-s border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    defaultValue={value}
                    onChange={debouncedChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="bg-primary text-primary-foreground rounded-e shadow hover:bg-primary/90 h-9 px-4 py-1"
          >
            Search
          </button>
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {jobs.locations?.map((location, i) => (
                    <SelectItem key={i} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a salary range" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {jobs.salaryRanges?.map((salary, i) => (
                    <SelectItem key={i} value={salary}>
                      {salary}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded shadow hover:bg-primary/90 h-9 px-4 py-1"
        >
          Search
        </button>
      </form>
    </Form>
  );
};

export default SearchBar;
