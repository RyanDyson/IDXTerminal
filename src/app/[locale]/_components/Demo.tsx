import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { DisplayFont } from "./DisplayFont";
import { Input } from "~/components/ui/input";
import { useTranslations } from "next-intl";

const DemoButton = () => {
  return (
    <div className="rounded-full bg-stone-50 px-4 py-2 text-sm font-bold text-stone-950 transition-colors hover:bg-stone-200 active:bg-stone-400">
      Request a Demo
    </div>
  );
};

export const Demo = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <DemoButton />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>
            <DisplayFont className="text-3xl">Demo Request</DisplayFont>
          </DialogTitle>
          <DialogDescription>
            Contact us to schedule a demo with your enterprise
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-2 py-4">
          <p>Given Name(s)</p>
          <Input className="w-full" placeholder="John" type="text" required />
          <p>Surname</p>
          <Input className="w-full" placeholder="Doe" type="text" required />
          <p>Business Email</p>
          <Input
            className="w-full"
            placeholder="hotmail@yourcompany.com"
            type="email"
            required
          />
          <div />
          <p>How big is your team?</p>
          <Input
            className="w-full"
            placeholder="1-100"
            type="number"
            required
          />
          <p>What are you looking for in IDXTerminal Pro?</p>
          <Input
            className="w-full"
            placeholder="Short answer"
            type="text"
            required
          />
          <div />
          <Button
            className="w-min rounded-full px-4 py-2 font-bold"
            variant="secondary"
          >
            Submit
          </Button>
        </div>
        <DialogFooter className="flex w-full items-center pt-4">
          <p>We will reach out within 5 business days</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
