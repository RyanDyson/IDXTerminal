import { DisplayFont } from "./DisplayFont";

export const Footer = () => {
  return (
    <div className="flex h-max w-screen flex-col justify-between bg-stone-900 p-16 text-stone-50">
      <div className="flex flex-col gap-y-1">
        <DisplayFont className="text-4xl">IDXTerminal</DisplayFont>
        <p className="mt-4 text-sm">
          © 2023 IDXTerminal. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-4">
          <a href="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-sm hover:underline">
            Terms of Service
          </a>
          <a href="/contact-us" className="text-sm hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
