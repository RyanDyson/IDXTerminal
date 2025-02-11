"use client";

import { DisplayFont } from "../../_components/DisplayFont";
import { Button } from "~/components/ui/button";
import { type LoginDialogTranslation } from "~/i18n/translations/LoginDialog";
import { Link } from "~/i18n/routing";
import { SiClerk } from "react-icons/si";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { FaGoogle } from "react-icons/fa";

type Props = {
  translation: LoginDialogTranslation;
};

export function SignInForm(props: Props) {
  const { translation } = props;

  return (
    <SignIn.Root>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-stone-950">
        <SignIn.Step name="start">
          <div className="flex min-w-96 flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
            <div>
              <div>
                <DisplayFont className="text-3xl">
                  {translation.title}
                </DisplayFont>
              </div>
              <div>{translation.description}</div>
            </div>
            <div className="flex flex-col space-y-2 py-4">
              <Clerk.Field name="identifier" className="space-y-2">
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
              <div className="flex w-full items-center justify-between space-y-2 text-sm">
                <p>{translation.reset}</p>
                <SignIn.Action
                  navigate={"start"}
                  className="transition-colors hover:text-stone-300"
                >
                  {translation.resetButton}
                </SignIn.Action>
              </div>
              <div />

              <Clerk.GlobalError className="block text-sm text-destructive" />
              <SignIn.Action submit className="w-min">
                <Button className="w-min rounded-full px-4 py-2 font-bold">
                  {translation.title}
                </Button>
              </SignIn.Action>
            </div>

            <div className="flex w-full flex-col space-y-4 pb-2 pt-4">
              <Clerk.Connection
                name="google"
                className="flex w-full items-center justify-center space-x-2 rounded-full border border-stone-700 bg-stone-900 py-2 transition-colors hover:bg-stone-950 hover:stroke-neutral-300"
              >
                <FaGoogle />
                <p>Sign In with google</p>
              </Clerk.Connection>
              <div className="flex w-full items-center justify-between space-x-2">
                <p>{translation.question}</p>
                <Link href={"/sign-up"}>
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
        </SignIn.Step>

        <SignIn.Step name={"forgot-password"}>
          <div className="flex min-w-96 flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
            <DisplayFont className="text-3xl">
              Forgot your password?
            </DisplayFont>

            <SignIn.SupportedStrategy name="reset_password_email_code">
              <Button>Reset Password</Button>
            </SignIn.SupportedStrategy>

            <SignIn.Action navigate="previous">Cancel</SignIn.Action>
          </div>
        </SignIn.Step>

        <SignIn.Step name="reset-password">
          <div className="flex min-w-96 flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
            <DisplayFont className="text-3xl">Reset your password</DisplayFont>

            <SignIn.SupportedStrategy name="reset_password_email_code">
              <Button>Reset Password</Button>
            </SignIn.SupportedStrategy>

            <SignIn.Action navigate="previous">Cancel</SignIn.Action>
          </div>
        </SignIn.Step>
      </div>
    </SignIn.Root>
  );
}
