"use client"

import * as React from "react"
import { CgDarkMode } from "react-icons/cg";

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10"
    >
      <CgDarkMode className="!size-6" />
    </Button>
  )
}
