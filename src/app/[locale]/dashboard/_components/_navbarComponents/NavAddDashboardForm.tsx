"use client";

import { z } from "zod";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { type User } from "@prisma/client";

const formSchema = z.object({
  name: z.string(),
  equity: z.string(),
});

type Props = {
  user: User | null;
  handleSubmit: (data: {
    name: string;
    equity: string;
    userId: string;
  }) => Promise<void>;
};

export function NavAddDashboardForm(props: Props) {
  const { handleSubmit, user } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      equity: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          handleSubmit({ ...data, userId: user?.id ?? "" }),
        )}
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
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
}
