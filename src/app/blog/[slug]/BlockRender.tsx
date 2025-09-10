"use client";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import "../../blog/blocknote-theme.css";

interface BlockRenderProps {
  html: string;
}

const BlockRender = ({ html }: BlockRenderProps) => {
  return (
    <div 
      className="bn-container light bn-mantine bg-background text-foreground bn-theme-adaptive"
      data-color-scheme="light"
      data-mantine-color-scheme="light"
    >
      <div
        className="ProseMirror bn-editor bn-default-styles bg-background text-foreground"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default BlockRender;
