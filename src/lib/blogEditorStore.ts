import { create } from "zustand";

interface Blog {
  title: string;
  content: string;
  isPublished: boolean;
  slug: string;
  updatedAt: string;
  tags: string[];
}

interface Config {
  autoSave: boolean;
  autoSaveInterval: number;
}

interface BlogEditorState {
  blog: Blog | null;
  setBlog: (blog: Blog) => void;
  updateBlogLoading: boolean;
  setUpdateBlogLoading: (loading: boolean) => void;
  config: Config;
  setConfig: (config: Config) => void;
}

export const useBlogEditorStore = create<BlogEditorState>((set) => ({
  blog: null,
  setBlog: (blog) => set({ blog }),
  updateBlogLoading: false,
  setUpdateBlogLoading: (loading) => set({ updateBlogLoading: loading }),
  config: {
    autoSave: true,
    autoSaveInterval: 30,
  },
  setConfig: (config) => set({ config }),
}));
