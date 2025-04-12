import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from "~/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";
import { api } from "~/trpc/react";
import { blockTypes, type Block } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "~/components/ui/button";
import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import { Select } from "~/components/ui/select";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";

type Props = {
  addNewBlock: () => void;
  tabId: string;
};

const formSchema = z.object({
  blockType: z.nativeEnum(blockTypes),
  equity: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export function AddBlocks({ addNewBlock, tabId }: Props) {
  const { data: blockTypes } = api.blocks.getBlockTypes.useQuery();
  const createBlock = api.blocks.createBlock.useMutation();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blockType: blockTypes?.[0]?.type,
      equity: "",
    },
  });

  const onSubmit = (data: FormData) => {
    createBlock.mutate({
      type: data.blockType,
      tabId: tabId,
      equity: "",
      layout: { i: "", x: 0, y: 0, w: 0, h: 0 },
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="absolute bottom-4 right-0 cursor-pointer rounded-full"
          size="icon"
        >
          <FaPlus size={10} onClick={addNewBlock} />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>
            <DisplayFont className="text-3xl">Add Block</DisplayFont>
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => onSubmit({ ...data }))}>
              <FormField
                control={form.control}
                name="blockType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Block Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a block type" />
                        </SelectTrigger>
                        <SelectContent>
                          {blockTypes?.map((type) => (
                            <SelectItem
                              className="max-w-full"
                              key={type.id}
                              value={type.type}
                            >
                              {type.name}
                              <p className="text-wrap text-xs text-stone-400">
                                {type.description}
                              </p>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="equity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Block Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a block type" />
                        </SelectTrigger>
                        <SelectContent>
                          {blockTypes?.map((type) => (
                            <SelectItem
                              className="max-w-full"
                              key={type.id}
                              value={type.type}
                            >
                              {type.name}
                              <p className="text-wrap text-xs text-stone-400">
                                {type.description}
                              </p>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4">
                Add Block
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
