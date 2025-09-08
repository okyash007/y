"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const BlockEditor = dynamic(() => import("./BlockEditor"), {
  ssr: false,
  loading: () => (
    <div className="px-[54px]">
      <Skeleton className="w-full h-[500px] rounded-lg" />
    </div>
  ),
});

const Client = () => {
  // Example initial HTML content - you can replace this with content from your database/API
  const [initialHTML] = useState(`
    <h1>Welcome to My Blog Editor</h1>
    <p>This content was loaded from HTML! You can initialize the editor with any HTML content.</p>
    
    <h2>Supported HTML Elements:</h2>
    <ul>
      <li><strong>Headers</strong> (h1, h2, h3, etc.)</li>
      <li><em>Paragraphs</em> with formatting</li>
      <li>Lists (ordered and unordered)</li>
      <li>Links and other inline elements</li>
    </ul>
    
    <h3>How to use:</h3>
    <ol>
      <li>Pass your HTML string to the <code>initialContent</code> prop</li>
      <li>The editor will automatically parse and render it</li>
      <li>Users can then edit the content normally</li>
      <li>Use the <code>onChange</code> callback to capture changes</li>
    </ol>
    
    <p>Try editing this content - all changes will be logged to the console!</p>
  `);

  const handleContentChange = (content: string) => {
    console.log("Content changed:", content);
  };

  return (
    <>
      <div className="sticky top-16 mx-[42px] p-4 z-10 rounded-lg bg-card shadow-md">
        <input
          type="text"
          className="focus:outline-none text-4xl font-bold"
          placeholder="Title"
        />
      </div>
      <div className="mt-4">
        <BlockEditor
          initialContent={initialHTML}
          onChange={handleContentChange}
        />
      </div>
    </>
  );
};

export default Client;
