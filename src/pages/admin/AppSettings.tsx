import AdminLayout from "@/components/admin/AdminLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Settings, Globe, Palette, Search, MessageSquare } from "lucide-react";

const AppSettings = () => {
  const [blogName, setBlogName] = useState("The Corporate Blog");
  const [blogTagline, setBlogTagline] = useState("Insights for Modern Business Leaders");
  const [darkMode, setDarkMode] = useState(true);
  const [seoTitle, setSeoTitle] = useState("The Corporate Blog | Business & Tech Insights");
  const [seoDesc, setSeoDesc] = useState("A production-grade, SEO-first blogging platform featuring articles on technology, business, leadership, and innovation.");
  const [ogImage, setOgImage] = useState("");
  const [commentsEnabled, setCommentsEnabled] = useState(false);

  const saveAll = () => {
    toast({ title: "Settings saved" });
  };

  return (
    <AdminLayout>
      <div className="flex items-center gap-3 mb-8">
        <Settings size={24} className="text-accent-foreground" />
        <h1 className="font-serif text-2xl font-bold text-foreground">Application Settings</h1>
      </div>

      <div className="space-y-8 max-w-2xl">
        <section className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={18} className="text-accent-foreground" />
            <h2 className="font-semibold text-foreground">Blog Identity</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="blogName">Blog Name</Label>
              <Input id="blogName" value={blogName} onChange={(e) => setBlogName(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="blogTagline">Tagline</Label>
              <Input id="blogTagline" value={blogTagline} onChange={(e) => setBlogTagline(e.target.value)} className="mt-1" />
            </div>
          </div>
        </section>

        <section className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Palette size={18} className="text-accent-foreground" />
            <h2 className="font-semibold text-foreground">Appearance</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Dark Mode Toggle</p>
              <p className="text-xs text-muted-foreground">Show dark mode toggle in header for visitors</p>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
        </section>

        <section className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Search size={18} className="text-accent-foreground" />
            <h2 className="font-semibold text-foreground">SEO Defaults</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="seoTitle">Default Meta Title</Label>
              <Input id="seoTitle" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="mt-1" />
              <p className="text-xs text-muted-foreground mt-1">{seoTitle.length}/60 characters</p>
            </div>
            <div>
              <Label htmlFor="seoDesc">Default Meta Description</Label>
              <Textarea id="seoDesc" value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} rows={2} className="mt-1" />
              <p className="text-xs text-muted-foreground mt-1">{seoDesc.length}/160 characters</p>
            </div>
            <div>
              <Label htmlFor="ogImage">Default OG Image URL</Label>
              <Input id="ogImage" value={ogImage} onChange={(e) => setOgImage(e.target.value)} placeholder="https://..." className="mt-1" />
            </div>
          </div>
        </section>

        <section className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare size={18} className="text-accent-foreground" />
            <h2 className="font-semibold text-foreground">Comments</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Enable Comments</p>
              <p className="text-xs text-muted-foreground">Allow readers to comment on blog posts</p>
            </div>
            <Switch checked={commentsEnabled} onCheckedChange={setCommentsEnabled} />
          </div>
        </section>

        <Button onClick={saveAll} size="lg" className="w-full">
          Save All Settings
        </Button>
      </div>
    </AdminLayout>
  );
};

export default AppSettings;
