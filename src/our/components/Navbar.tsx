import { ThemeToggle } from "@/components/theme-toggle";
import React from "react";
import Auth from "./Auth";

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center p-4 bg-gradient-to-b from-background to-transparent">
      {/* <div className="absolute inset-0 backdrop-blur-2xl h-36" style={{
        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
      }}></div> */}
      <div className="relative z-10 flex justify-between items-center w-full">
        <div></div>
        <div></div>
        <div className="flex items-center gap-2">
          <div>
            <Auth />
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
