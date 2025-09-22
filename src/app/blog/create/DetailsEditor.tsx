import {
  MoreHorizontal,
  Save,
  Calendar,
  User,
  Eye,
  Settings,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PublishModal from "./PublishModal";
import SettingsComponent from "./SettingsComponent";
import { useBlogEditorStore } from "@/lib/blogEditorStore";

const DetailsEditor = () => {
  const { blog, setBlog, updateBlogLoading, setUpdateBlogLoading } =
    useBlogEditorStore();

  const handleSave = async () => {
    setUpdateBlogLoading(true);
    try {
      // Simulate saving with a 1.5 second delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setUpdateBlogLoading(false);
    }
  };
  return (
    <div className="px-6 py-4 bg-secondary/20 backdrop-blur-2xl border border-border/40 rounded-lg">
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
          <PublishModal blog={blog} />
          <SettingsComponent />
          <Button
            size="sm"
            className="min-w-[120px]"
            onClick={handleSave}
            disabled={updateBlogLoading}
          >
            {updateBlogLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-secondary border-t-transparent rounded-full animate-spin mr-2" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Draft
              </>
            )}
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
          onChange={(e) => setBlog({ ...blog!, title: e.target.value })}
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
  );
};

export default DetailsEditor;
