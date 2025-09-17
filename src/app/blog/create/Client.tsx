"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  Save,
  Calendar,
  User,
  Eye,
  Settings,
} from "lucide-react";
import axios from "axios";

const BlockEditor = dynamic(() => import("./BlockEditor"), {
  ssr: false,
  loading: () => (
    <div>
      <Skeleton className="w-full h-[300px] rounded-lg" />
    </div>
  ),
});

const Client = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<{
    title: string;
    content: string;
    isPublished: boolean;
    slug: string;
    updatedAt: string;
    tags: string[];
  } | null>(null);

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

  async function updateBlog(
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

  return (
    <>
      {/* Enhanced Header Section */}
      <div className="mx-auto max-w-4xl sticky top-16 z-50">
        <div className="px-6 py-4 bg-secondary/20 backdrop-blur-2xl border border-border/40 rounded-lg mx-4">
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Draft</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <Calendar className="h-4 w-4" />
              <span>
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
              <Button size="sm" className="gap-2">
                <Save className="h-4 w-4" />
                Save Draft
              </Button>
            </div>
          </div>

          {/* Title Input */}
          <div className="space-y-4">
            <input
              type="text"
              className="w-full bg-transparent border-none focus:outline-none text-4xl font-bold text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 resize-none"
              placeholder="Untitled Post"
              value={blog?.title}
              onChange={(e) =>
                setBlog((prev) =>
                  prev ? { ...prev, title: e.target.value } : null
                )
              }
            />

            {/* Subtitle/Description */}
            <input
              type="text"
              className="w-full bg-transparent border-none focus:outline-none text-lg text-muted-foreground placeholder:text-muted-foreground/40 transition-all duration-200"
              placeholder="Add a subtitle or brief description..."
            />

            {/* Tags Input */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Tags:</span>
              <input
                type="text"
                className="flex-1 bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground/40"
                placeholder="Add tags separated by commas..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Editor Section */}
      <div className="mx-auto max-w-4xl px-4 py-4">
        <BlockEditor
          initialContent={initialHTML}
          onChange={handleContentChange}
        />
      </div>
    </>
  );
};

export default Client;
