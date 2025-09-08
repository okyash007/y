"use client";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useTheme } from "next-themes";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { Button } from "@/components/ui/button";

export default function MyEditor() {
  const { theme } = useTheme();

  const editor = useCreateBlockNote();

  // Helper function to save JSON content to localStorage

  async function getFullHTML() {
    const content = editor.document;
    const html = await editor.blocksToFullHTML(content);
    console.log(html);
    return html;
  }

  const saveContent = () => {
    if (!editor) return;
    
    const content = editor.document;
    
    console.log(
      "💾 Content to save in localStorage:",
      JSON.stringify(content, null, 2)
    );

    // Save content to localStorage
    try {
      localStorage.setItem('blog-content', JSON.stringify(content));
      console.log("✅ Content saved to localStorage successfully!");
    } catch (error) {
      console.error("❌ Failed to save to localStorage:", error);
    }
  };

  return (
    <>
      <div className="flex justify-end items-center mb-4">
        <Button onClick={saveContent}>
          Save to localStorage
        </Button>
        <Button onClick={getFullHTML}>
          get full html
        </Button>
      </div>

      <div className="w-full min-h-[500px] bg-background text-foreground rounded-lg editor-container">
        <BlockNoteView
          editor={editor}
          theme={theme === "dark" ? "dark" : "light"}
          className="bg-background text-foreground"
        />
        <style jsx>{`
        .editor-container :global(.bn-editor) {
          background-color: hsl(var(--background)) !important;
          color: hsl(var(--foreground)) !important;
        }

        .editor-container :global(.bn-block-outer) {
          background-color: hsl(var(--background)) !important;
        }

        .editor-container :global(.bn-block-content) {
          color: hsl(var(--foreground)) !important;
        }

        .editor-container :global(.mantine-Paper-root) {
          background-color: hsl(var(--background)) !important;
          color: hsl(var(--foreground)) !important;
        }

        .editor-container :global(.bn-editor .ProseMirror) {
          background-color: hsl(var(--background)) !important;
          color: hsl(var(--foreground)) !important;
        }

        .editor-container :global(.bn-editor .ProseMirror p) {
          color: hsl(var(--foreground)) !important;
        }
       `}</style>
      </div>
    </>
  );
}
