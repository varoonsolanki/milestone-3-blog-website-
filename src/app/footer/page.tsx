import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <Link target='_blank' href="https://github.com/varoonsolanki">
          <Button variant="link" className=" text-white hover:text-gray-200" >
            About
          </Button>
        </Link>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dynamic Blog by Varoon Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;