import { ThemeToggle } from "@/components/theme-toggle";
import React from "react";
import Auth from "./Auth";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-b from-background to-transparent">
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
  );
};

export default Navbar;
