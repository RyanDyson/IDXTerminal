"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type User } from "@prisma/client";

const formSchema = z.object({
  name: z.string(),
  equity: z.string(),
  userId: z.string(),
});

type FormData = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (data: FormData) => Promise<void>;
  user: User | null;
  isSubmitting: boolean;
};

export function NavAddDashboardForm({ onSubmit, user, isSubmitting }: Props) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      equity: "",
      userId: user?.id ?? "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          onSubmit({ ...data, userId: user?.id ?? "" }),
        )}
        className="flex flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dashboard Name</FormLabel>
              <FormControl>
                <Input placeholder="Dashboard name" {...field} />
              </FormControl>
              <FormDescription>This can be changed later</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="equity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Equity</FormLabel>
              <FormControl>
                <Input placeholder="Equity Code" {...field} />
              </FormControl>
              <FormDescription>
                A Dashboard will be form using this equity and our default
                template
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-min self-end"
        >
          {isSubmitting ? "Adding..." : "Add"}
        </Button>
      </form>
    </Form>
  );
}
