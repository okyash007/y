import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Globe,
  Lock,
  Calendar,
  Tag,
  Eye,
  Rocket,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";

interface PublishModalProps {
  blog: {
    title: string;
    content: string;
    isPublished: boolean;
    slug: string;
    updatedAt: string;
    tags: string[];
  } | null;
}

const PublishModal = ({ blog }: PublishModalProps) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [visibility, setVisibility] = useState<"public" | "private">("public");

  const handlePublish = async () => {
    setIsPublishing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsPublishing(false);
  };

  const wordCount = blog?.content ? blog.content.split(/\s+/).length : 0;
  const readTime = Math.ceil(wordCount / 200); // Average reading speed

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Eye className="h-4 w-4" />
          Publish
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[600px] p-0 overflow-hidden"
        // onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Header Section */}
        <div className="p-6 border-b">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Rocket className="w-6 h-6" />
              Ready to Publish?
            </DialogTitle>
            <DialogDescription className="">
              Review your blog post details before sharing it with the world
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Blog Title Preview */}
          <div className="bg-muted/50 rounded-lg p-4 border">
            <h3 className="text-lg font-semibold mb-2">
              {blog?.title || "Untitled Post"}
            </h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {wordCount} words
              </span>
            </div>
          </div>

          {/* Visibility Options */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Visibility</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setVisibility("public")}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                  visibility === "public"
                    ? "border-primary bg-accent"
                    : "border hover:bg-accent"
                }`}
              >
                <Globe className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-medium">Public</p>
                  <p className="text-xs text-muted-foreground">
                    Anyone can view
                  </p>
                </div>
              </button>
              <button
                onClick={() => setVisibility("private")}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                  visibility === "private"
                    ? "border-primary bg-accent"
                    : "border hover:bg-accent"
                }`}
              >
                <Lock className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-medium">Private</p>
                  <p className="text-xs text-muted-foreground">
                    Only you can view
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Tags Section */}
          {blog?.tags && blog.tags.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                <Tag className="w-4 h-4" />
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Publishing Info */}
          <div className="bg-muted/50 border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-foreground/70 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium mb-1">Before you publish</p>
                <ul className="text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" />
                    Your blog will be{" "}
                    {visibility === "public"
                      ? "visible to everyone"
                      : "only visible to you"}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" />
                    URL will be: /blog/{blog?.slug || "your-post-slug"}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" />
                    You can edit or unpublish anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-muted/50 px-6 py-4 border-t">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => {}} disabled={isPublishing}>
              Save as Draft
            </Button>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {}}
                disabled={isPublishing}
              >
                Cancel
              </Button>
              <Button
                onClick={handlePublish}
                disabled={isPublishing}
                className="min-w-[120px]"
              >
                {isPublishing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-secondary border-t-transparent rounded-full animate-spin mr-2" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <Rocket className="w-4 h-4 mr-2" />
                    Publish Now
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PublishModal;
