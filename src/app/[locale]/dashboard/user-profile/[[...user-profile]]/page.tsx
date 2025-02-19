import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function userProfilePage() {
  return (
    // <div className="h-full w-full">
    //   <DisplayFont className="text-2xl">Profile</DisplayFont>
    <UserProfile appearance={{ baseTheme: dark }} />
    /* </div> */
  );
}
