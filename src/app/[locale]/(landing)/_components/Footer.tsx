import { DisplayFont } from "./DisplayFont";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex h-max w-screen flex-col justify-between bg-stone-900 p-8 text-stone-50 md:p-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <DisplayFont className="text-3xl md:text-4xl">
              <span className="italic">IDX</span>Terminal
            </DisplayFont>
            <p className="text-sm text-stone-400">
              Professional trading platform for the Indonesian stock market.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="text-stone-400 hover:text-white"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-stone-400 hover:text-white"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://github.com"
                className="text-stone-400 hover:text-white"
              >
                <FaGithub size={20} />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Product</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/features"
                className="text-sm text-stone-400 hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-stone-400 hover:text-white"
              >
                Pricing
              </Link>
              <Link
                href="/integrations"
                className="text-sm text-stone-400 hover:text-white"
              >
                Integrations
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Company</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-stone-400 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="text-sm text-stone-400 hover:text-white"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="text-sm text-stone-400 hover:text-white"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/privacy-policy"
                className="text-sm text-stone-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-stone-400 hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact-us"
                className="text-sm text-stone-400 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-800 pt-8 text-center text-sm text-stone-400">
          © 2024 IDXTerminal. All rights reserved.
        </div>
      </div>
    </div>
  );
};
