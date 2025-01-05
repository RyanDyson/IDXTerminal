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

const LoginButton = () => {
  return (
    <Button className="rounded-full px-4 py-2 font-bold" variant="secondary">
      Login
    </Button>
  );
};

export const Login = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <LoginButton />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>
            <DisplayFont className="text-3xl">Login</DisplayFont>
          </DialogTitle>
          <DialogDescription>
            Join us to catapult your trading experience
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-2 py-4">
          <p>Email</p>
          <Input className="w-full" placeholder="Email" type="email" required />
          <p>Password</p>
          <Input
            className="w-full"
            placeholder="Password"
            type="password"
            required
          />
          <div />
          <Button
            className="w-min rounded-full px-4 py-2 font-bold"
            variant="secondary"
          >
            Login
          </Button>
        </div>
        <DialogFooter className="flex w-full items-center pt-4">
          <p>Don&apos;t have an account?</p>
          <Button
            className="rounded-full px-4 py-2 font-bold"
            variant="secondary"
          >
            Sign up
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
