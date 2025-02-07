"use client";

import { StoreContext } from "@/context/store.context";
import React, { useContext } from "react";
import { z } from "zod";
import { debounce } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  search: z.optional(
    z.string({
      message: "Search query must be at least 2 characters.",
    })
  ),
  country: z.string().min(2, { message: "Country must be selected." }),
  salary: z.string().min(2, { message: "Salary range must be selected." }),
});

const FilterOptions = () => {
  const [key, setKey] = React.useState(+new Date());
  const { store, updateFilteredJobs } = useContext(StoreContext)!;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      country: "",
      salary: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const search = values.search;
    const country = values.country;
    const [low, high] = values.salary ? values.salary.split(" — ") : [0, Number.MAX_VALUE];

    const jobsFiltered = store.jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(search!.toLowerCase()) &&
        job.country.toLowerCase() === country?.toLowerCase() &&
        job.salary >= +low &&
        job.salary <= +high
      );
    });

    updateFilteredJobs(jobsFiltered);
  }

  const debouncedChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value?.toLowerCase();

    const jobsFiltered = store.jobs.filter((job) => job.title.toLowerCase().includes(search));

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
                    className="flex h-9 w-full rounded border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    defaultValue={value}
                    onChange={debouncedChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <Select key={key} onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <Button
                    className="w-full px-2"
                    variant="secondary"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      form.setValue("country", "");
                      setKey(+new Date());
                    }}
                  >
                    Clear
                  </Button>

                  <SelectSeparator />

                  <SelectGroup>
                    {store.locations?.map((location, i) => (
                      <SelectItem key={i} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectGroup>
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
                  <Button
                    className="w-full px-2"
                    variant="secondary"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      form.setValue("salary", "");
                      setKey(+new Date());
                    }}
                  >
                    Clear
                  </Button>

                  <SelectSeparator />

                  <SelectGroup>
                    {store.salaryRanges?.map((salary, i) => (
                      <SelectItem key={i} value={salary}>
                        {salary}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <button
          disabled={!form.formState.isValid}
          type="submit"
          className="bg-primary text-primary-foreground rounded shadow hover:bg-primary/90 h-9 px-4 py-1"
        >
          Search
        </button>
      </form>
    </Form>
  );
};

export default FilterOptions;
