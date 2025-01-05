import { DisplayFont } from "./DisplayFont";

export const About = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-stone-500">
      <DisplayFont className="text-3xl">About</DisplayFont>
      <p className="text-stone-50">This is the about page</p>
    </div>
  );
};
