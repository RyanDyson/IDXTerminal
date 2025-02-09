"use client";

import { DisplayFont } from "../../_components/DisplayFont";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { type SignUpTranslations } from "~/i18n/translations/SignUp";
import { Link } from "~/i18n/routing";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { SiClerk } from "react-icons/si";

type Props = {
  translation: SignUpTranslations;
};

export function SignUpForm(props: Props) {
  const { translation } = props;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-stone-950">
      <SignUp.Root>
        <SignUp.Step name="start">
          <div className="flex min-w-96 flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
            <div>
              <div>
                <DisplayFont className="text-3xl">Sign Up</DisplayFont>
              </div>
              <div>{translation.description}</div>
            </div>
            <div className="flex flex-col space-y-2 py-4">
              {/* <p>{translation.name}</p>
              <Input
                className="w-full"
                placeholder="Your Display Name"
                type="name"
                required
              /> */}
              <Clerk.Field name="emailAdress" className="space-y-2">
                <Clerk.Label>
                  <p>{translation.email}</p>
                </Clerk.Label>
                <Clerk.Input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="user@nextmail.com"
                  type="email"
                  required
                />
                <Clerk.FieldError className="block text-sm text-destructive" />
              </Clerk.Field>
              <Clerk.Field name="password" className="space-y-2">
                <Clerk.Label>
                  <p>{translation.password}</p>
                </Clerk.Label>
                <Clerk.Input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="Password"
                  type="password"
                  required
                />
                <Clerk.FieldError className="block text-sm text-destructive" />
              </Clerk.Field>
              <div />
              <Clerk.GlobalError className="block text-sm text-red-400" />
              <SignUp.Captcha className="empty:hidden" />
              <SignUp.Action submit className="w-min">
                <div className="text-nowrap rounded-full bg-stone-50 px-4 py-2 font-bold text-stone-950 transition-colors hover:stroke-neutral-300">
                  {translation.title}
                </div>
              </SignUp.Action>
            </div>
            <div className="flex w-full flex-col space-y-4 pb-2 pt-4">
              <div className="flex w-full items-center justify-between space-x-2">
                <p>{translation.question}</p>
                <Link href={"/sign-in"}>
                  <Button
                    className="rounded-full px-4 py-2 font-bold"
                    variant="secondary"
                  >
                    {translation.cta}
                  </Button>
                </Link>
              </div>
              <div className="flex w-full items-center justify-end space-x-2 text-sm text-stone-300">
                <SiClerk />
                <span>Secured by Clerk</span>
              </div>
            </div>
          </div>
        </SignUp.Step>
        <SignUp.Step name="continue" className="text-white">
          <h1>Fill in missing fields</h1>

          <Clerk.Field name="username">
            <Clerk.Label>Username</Clerk.Label>
            <Clerk.Input />
            <Clerk.FieldError />
          </Clerk.Field>

          <SignUp.Action submit>Continue</SignUp.Action>
        </SignUp.Step>
        <SignUp.Step
          name="verifications"
          className="w-full space-y-6 rounded-2xl bg-neutral-100 px-4 py-10 ring-1 ring-inset ring-white/5 sm:w-96 sm:px-8"
        >
          <header className="text-center">
            <h1 className="mt-4 text-xl font-medium tracking-tight text-white">
              Verify email code
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <SignUp.Strategy name="email_code">
            <Clerk.Field name="code" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-white">
                Email code
              </Clerk.Label>
              <Clerk.Input
                required
                className="w-full rounded-md bg-neutral-900 px-3.5 py-2 text-sm text-white outline-none ring-1 ring-inset ring-zinc-700 hover:ring-zinc-600 focus:bg-transparent focus:ring-[1.5px] focus:ring-blue-400 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <SignUp.Action
              submit
              className="relative isolate w-full rounded-md bg-blue-500 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/10%)_inset,0_0_0_1px_theme(colors.white/5%)] outline-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-white/5 before:opacity-0 hover:before:opacity-100 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:text-white/70 active:before:bg-black/10"
            >
              Finish registration
            </SignUp.Action>
          </SignUp.Strategy>
          <p className="text-center text-sm text-zinc-400">
            Have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className="font-medium text-white decoration-white/20 underline-offset-4 outline-none hover:underline focus-visible:underline"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}
