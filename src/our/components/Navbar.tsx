import { ThemeToggle } from "@/components/theme-toggle";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-b from-background to-transparent">
      <div></div>
      <div></div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
