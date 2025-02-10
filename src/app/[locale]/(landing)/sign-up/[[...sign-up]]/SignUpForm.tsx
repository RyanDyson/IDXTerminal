"use client";

import { DisplayFont } from "../../_components/DisplayFont";
import { Button } from "~/components/ui/button";
import { type SignUpTranslations } from "~/i18n/translations/SignUp";
import { Link } from "~/i18n/routing";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { SiClerk } from "react-icons/si";
import { FaGoogle } from "react-icons/fa6";
import { cn } from "~/lib/utils";
// import { SignUp } from "@clerk/nextjs";

type Props = {
  translation: SignUpTranslations;
};

export function SignUpForm(props: Props) {
  const { translation } = props;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-stone-950">
      {/* <SignUp /> */}
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
              <Clerk.Field name="username" className="space-y-2">
                <Clerk.Label>
                  <p>Username</p>
                </Clerk.Label>
                <Clerk.Input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="your name"
                  type="text"
                  required
                />
                <Clerk.FieldError className="block text-sm text-destructive" />
              </Clerk.Field>
              <Clerk.Field name="emailAddress" className="space-y-2">
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
                <div className="text-nowrap rounded-full bg-stone-50 px-4 py-2 text-sm font-bold text-stone-950 transition-colors hover:stroke-neutral-300">
                  {translation.title}
                </div>
              </SignUp.Action>
            </div>
            <div className="flex w-full flex-col space-y-4 pb-2 pt-4">
              <Clerk.Connection
                name="google"
                className="flex w-full items-center justify-center space-x-2 rounded-full border border-stone-700 bg-stone-900 py-2 transition-colors hover:bg-stone-950 hover:stroke-neutral-300"
              >
                <FaGoogle />
                <p>Sign up with google</p>
              </Clerk.Connection>
              <div className="flex w-full items-center justify-between space-x-2">
                <p>{translation.question}</p>
                <Link href={"/sign-in"}>
                  <Button className="rounded-full px-4 py-2 font-bold">
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

        <SignUp.Step name="verifications">
          <div className="flex min-w-96 flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
            <div>
              <div>
                <DisplayFont className="text-3xl">
                  Verify Email Address
                </DisplayFont>
              </div>
              <div>An OTP will be sent to your email</div>
            </div>

            <SignUp.Strategy name="email_code">
              <Clerk.Field name="code" className="space-y-2">
                <Clerk.Label className="w-full text-center">
                  <p className="pt-4">OTP</p>
                </Clerk.Label>
                <Clerk.Input
                  type="otp"
                  className="flex justify-center has-[:disabled]:opacity-50"
                  autoSubmit
                  render={({ value, status }) => {
                    return (
                      <div
                        data-status={status}
                        className={cn(
                          "relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                          {
                            "z-10 ring-2 ring-ring ring-offset-background":
                              status === "cursor" || status === "selected",
                          },
                        )}
                      >
                        {value}
                        {status === "cursor" && (
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
                          </div>
                        )}
                      </div>
                    );
                  }}
                />
                <Clerk.FieldError className="block text-sm text-destructive" />
                <Clerk.GlobalError className="block text-sm text-red-400" />
              </Clerk.Field>
              <SignUp.Action submit className="w-full py-2">
                <div className="text-nowrap rounded-full bg-stone-50 px-4 py-2 font-bold text-stone-950 transition-colors hover:stroke-neutral-300">
                  Verify
                </div>
              </SignUp.Action>
            </SignUp.Strategy>
            <div className="flex w-full items-center justify-between space-x-2 pt-4">
              <p>{translation.question}</p>
              <Link href={"/sign-in"}>
                <Button className="rounded-full px-4 py-2 font-bold">
                  {translation.cta}
                </Button>
              </Link>
            </div>
          </div>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}
