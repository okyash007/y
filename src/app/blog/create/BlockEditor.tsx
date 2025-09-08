"use client";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useTheme } from "next-themes";
import { BlockNoteEditor, Block } from "@blocknote/core";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { useEffect, useState } from "react";
import "../../blog/blocknote-theme.css";

interface BlockEditorProps {
  initialContent?: string; // HTML string
  onChange?: (content: string) => void; // Callback for content changes
}

// Inner component that only renders when blocks are ready
function EditorWithBlocks({
  initialBlocks,
  onChange,
}: {
  initialBlocks: Block[] | undefined;
  onChange?: (content: string) => void;
}) {
  const { theme } = useTheme();

  const editor = useCreateBlockNote({
    initialContent: initialBlocks,
  });

  return (
    <BlockNoteView
      editor={editor}
      theme={theme === "dark" ? "dark" : "light"}
      className="bg-background text-foreground"
      onChange={async () => {
        if (onChange) {
          // Convert current blocks to HTML and call onChange
          const htmlContent = await editor.blocksToFullHTML(editor.document);
          onChange(htmlContent);
        }
      }}
    />
  );
}

export default function BlockEditor({
  initialContent,
  onChange,
}: BlockEditorProps) {
  const [initialBlocks, setInitialBlocks] = useState<Block[] | undefined>();
  const [isReady, setIsReady] = useState(!initialContent); // Ready immediately if no initial content

  // Parse initial HTML content to blocks
  useEffect(() => {
    if (initialContent) {
      const parseHTML = async () => {
        try {
          // Create a temporary editor to parse HTML
          const tempEditor = BlockNoteEditor.create();
          const blocks = await tempEditor.tryParseHTMLToBlocks(initialContent);
          setInitialBlocks(blocks);
          setIsReady(true);
        } catch (error) {
          console.error("Error parsing HTML:", error);
          setInitialBlocks(undefined);
          setIsReady(true);
        }
      };
      parseHTML();
    }
  }, [initialContent]);

  // Show loading state while parsing HTML
  if (!isReady) {
    return (
      <div className="w-full min-h-[500px] bg-background text-foreground rounded-lg editor-container flex items-center justify-center">
        <div className="text-muted-foreground">Loading editor...</div>
      </div>
    );
  }

  return <EditorWithBlocks initialBlocks={initialBlocks} onChange={onChange} />;
}
