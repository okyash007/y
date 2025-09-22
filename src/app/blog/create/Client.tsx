"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import DetailsEditor from "./DetailsEditor";
import { useBlogEditorStore } from "@/lib/blogEditorStore";

const BlockEditor = dynamic(() => import("./BlockEditor"), {
  ssr: false,
  loading: () => (
    <div>
      <Skeleton className="w-full h-[300px] rounded-lg" />
    </div>
  ),
});

const initialHTML = `
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
`;

async function createBlog() {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/create`,
    {
      title: "Untitled Post",
      content: initialHTML,
    }
  );
  if (response.data?.success) {
    return response.data?.data;
  }
  return null;
}

export async function updateBlog(
  blogId: string,
  blogData: { title: string; content: string }
) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/update/${blogId}`,
    blogData
  );
  if (response.data?.success) {
    return response.data?.data;
  }
  return null;
}

const Client = () => {
  const [loading, setLoading] = useState(true);
  const { blog, setBlog } = useBlogEditorStore();

  // Example initial HTML content - you can replace this with content from your database/API

  useEffect(() => {
    (async () => {
      const data = await createBlog();
      const { title, content, isPublished, slug, updatedAt, tags } = data;
      setBlog({ title, content, isPublished, slug, updatedAt, tags });
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl space-y-4 px-4">
        <Skeleton className="w-full h-[200px] rounded-lg" />
        <Skeleton className="w-full h-[400px] rounded-lg" />
      </div>
    );
  }

  console.log(blog);

  return (
    <>
      {/* Enhanced Header Section */}
      <div className="mx-auto max-w-4xl sticky top-16 z-50 px-4">
        <DetailsEditor />
      </div>

      {/* Editor Section */}
      <div className="mx-auto max-w-4xl px-4 py-4">
        <BlockEditor
          initialContent={blog?.content}
          onChange={(content) => setBlog({ ...blog!, content })}
        />
      </div>
    </>
  );
};

export default Client;
