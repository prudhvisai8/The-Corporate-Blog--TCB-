import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { toast } from "sonner";
import {
  Save,
  Eye,
  Send,
  Plus,
  GripVertical,
  Type,
  AlignLeft,
  Heading2,
  Heading3,
  List,
  Quote,
  Code,
  Youtube,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { getPostBySlug, categories } from "@/data/mockPosts";

interface ContentBlock {
  id: string;
  type: "paragraph" | "heading" | "heading3" | "list" | "blockquote" | "code" | "image" | "youtube" | "faq" | "highlight" | "table";
  text?: string;
  items?: string[];
  url?: string;
  alt?: string;
  caption?: string;
  question?: string;
  answer?: string;
  rows?: string[][];
}

const generateId = () => Math.random().toString(36).slice(2, 10);

const BLOCK_TYPES = [
  { type: "paragraph", label: "Paragraph", icon: AlignLeft },
  { type: "heading", label: "Heading 2", icon: Heading2 },
  { type: "heading3", label: "Heading 3", icon: Heading3 },
  { type: "list", label: "List", icon: List },
  { type: "blockquote", label: "Quote", icon: Quote },
  { type: "code", label: "Code", icon: Code },
  { type: "image", label: "Image", icon: ImageIcon },
  { type: "youtube", label: "YouTube", icon: Youtube },
  { type: "faq", label: "FAQ", icon: Type },
  { type: "highlight", label: "Highlight", icon: Type },
  { type: "table", label: "Table", icon: Type },
] as const;

const PostEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isNew = id === "new";
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    { id: generateId(), type: "paragraph", text: "" },
  ]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [showSeoPanel, setShowSeoPanel] = useState(false);
  const [showBlockMenu, setShowBlockMenu] = useState(false);

  // Auto-generate slug from title
  const autoSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);

  const displaySlug = slug || autoSlug;

  const wordCount = blocks
    .map((b) => (b.text || "").split(/\s+/).filter(Boolean).length + (b.items || []).join(" ").split(/\s+/).filter(Boolean).length)
    .reduce((a, b) => a + b, 0);

  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const handleSave = (status: string) => {
    toast.success(`Post ${status === "published" ? "published" : "saved"}!`);
    if (isNew) navigate("/admin/posts", { replace: true });
  };

  const addBlock = (type: ContentBlock["type"]) => {
    const newBlock: ContentBlock = {
      id: generateId(),
      type,
      text: "",
      ...(type === "list" ? { items: [""] } : {}),
      ...(type === "faq" ? { question: "", answer: "" } : {}),
      ...(type === "table" ? { rows: [["", ""], ["", ""]] } : {}),
    };
    setBlocks((prev) => [...prev, newBlock]);
    setShowBlockMenu(false);
  };

  const updateBlock = (id: string, updates: Partial<ContentBlock>) => {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updates } : b))
    );
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  const renderBlock = (block: ContentBlock) => {
    const commonClasses = "w-full bg-transparent border-0 outline-none resize-none text-foreground placeholder:text-muted-foreground";

    switch (block.type) {
      case "heading":
        return <input type="text" value={block.text || ""} onChange={(e) => updateBlock(block.id, { text: e.target.value })} placeholder="Heading 2…" className={`${commonClasses} font-serif text-2xl font-bold`} />;
      case "heading3":
        return <input type="text" value={block.text || ""} onChange={(e) => updateBlock(block.id, { text: e.target.value })} placeholder="Heading 3…" className={`${commonClasses} font-serif text-xl font-semibold`} />;
      case "paragraph":
        return <textarea value={block.text || ""} onChange={(e) => updateBlock(block.id, { text: e.target.value })} placeholder="Start writing…" rows={3} className={`${commonClasses} text-base leading-relaxed`} />;
      case "blockquote":
        return <div className="border-l-4 border-accent pl-4"><textarea value={block.text || ""} onChange={(e) => updateBlock(block.id, { text: e.target.value })} placeholder="Quote…" rows={2} className={`${commonClasses} italic text-muted-foreground`} /></div>;
      case "code":
        return <textarea value={block.text || ""} onChange={(e) => updateBlock(block.id, { text: e.target.value })} placeholder="Code…" rows={4} className={`${commonClasses} font-mono text-sm bg-secondary/50 rounded-lg p-3`} />;
      case "list":
        return (
          <div className="space-y-1">
            {(block.items || [""]).map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">•</span>
                <input type="text" value={item} onChange={(e) => { const newItems = [...(block.items || [])]; newItems[i] = e.target.value; updateBlock(block.id, { items: newItems }); }} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); const newItems = [...(block.items || [])]; newItems.splice(i + 1, 0, ""); updateBlock(block.id, { items: newItems }); } }} placeholder="List item…" className={`${commonClasses} text-sm`} />
              </div>
            ))}
          </div>
        );
      case "image":
        return (
          <div>
            <input type="text" value={block.url || ""} onChange={(e) => updateBlock(block.id, { url: e.target.value })} placeholder="Image URL…" className={`${commonClasses} text-sm mb-2`} />
            {block.url && <img src={block.url} alt={block.alt || ""} className="max-w-full rounded-lg max-h-64 object-cover" />}
          </div>
        );
      case "youtube":
        return <input type="text" value={block.url || ""} onChange={(e) => updateBlock(block.id, { url: e.target.value })} placeholder="YouTube URL…" className={`${commonClasses} text-sm`} />;
      case "faq":
        return (
          <div className="space-y-2 border-l-4 border-primary pl-4">
            <input type="text" value={block.question || ""} onChange={(e) => updateBlock(block.id, { question: e.target.value })} placeholder="FAQ Question…" className={`${commonClasses} text-sm font-semibold`} />
            <textarea value={block.answer || ""} onChange={(e) => updateBlock(block.id, { answer: e.target.value })} placeholder="FAQ Answer…" rows={2} className={`${commonClasses} text-sm`} />
          </div>
        );
      case "highlight":
        return <div className="bg-warm-clay/10 border-l-4 border-warm-clay rounded-r-lg p-3"><textarea value={block.text || ""} onChange={(e) => updateBlock(block.id, { text: e.target.value })} placeholder="Highlight text…" rows={2} className={`${commonClasses} text-sm font-medium`} /></div>;
      case "table":
        return (
          <div className="space-y-2">
            <table className="w-full text-sm border border-border rounded-lg">
              <tbody>
                {(block.rows || [["", ""]]).map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="border border-border p-1">
                        <input type="text" value={cell} onChange={(e) => { const newRows = (block.rows || []).map((r) => [...r]); newRows[ri][ci] = e.target.value; updateBlock(block.id, { rows: newRows }); }} className={`${commonClasses} text-xs px-1`} placeholder="Cell…" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-2">
              <button type="button" onClick={() => updateBlock(block.id, { rows: [...(block.rows || []), new Array(block.rows?.[0]?.length || 2).fill("")] })} className="text-xs text-accent hover:underline">+ Row</button>
              <button type="button" onClick={() => updateBlock(block.id, { rows: (block.rows || []).map((r) => [...r, ""]) })} className="text-xs text-accent hover:underline">+ Column</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl font-bold text-foreground">
          {isNew ? "New Post" : "Edit Post"}
        </h1>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowSeoPanel(!showSeoPanel)} className="px-3 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">SEO</button>
          <button onClick={() => handleSave("draft")} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"><Save size={14} /> Save Draft</button>
          <button onClick={() => handleSave("review")} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-warm-clay/20 text-warm-clay text-sm font-medium hover:bg-warm-clay/30 transition-colors"><Send size={14} /> Submit</button>
          <button onClick={() => handleSave("published")} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"><Eye size={14} /> Publish</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); if (!slug) setSlug(""); }} placeholder="Post title…" className="w-full bg-transparent font-serif text-3xl font-bold text-foreground placeholder:text-muted-foreground outline-none border-0" />
          <div className="text-xs text-muted-foreground">/{displaySlug || "post-slug"}</div>
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Write a brief excerpt…" rows={2} className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent/30 resize-none" />

          <div className="space-y-3">
            {blocks.map((block) => (
              <div key={block.id} className="group relative bg-card border border-border rounded-xl p-4 hover:border-accent/20 transition-colors">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <GripVertical size={14} className="text-muted-foreground" />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-secondary px-2 py-0.5 rounded">{block.type}</span>
                  <button onClick={() => removeBlock(block.id)} className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"><X size={14} /></button>
                </div>
                {renderBlock(block)}
              </div>
            ))}
          </div>

          <div className="relative">
            <button onClick={() => setShowBlockMenu(!showBlockMenu)} className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-border text-sm text-muted-foreground hover:border-accent/40 hover:text-accent transition-colors w-full justify-center">
              <Plus size={16} /> Add Block
            </button>
            {showBlockMenu && (
              <div className="absolute bottom-full mb-2 left-0 right-0 bg-card border border-border rounded-xl shadow-lg p-2 grid grid-cols-4 gap-1 z-10">
                {BLOCK_TYPES.map((bt) => (
                  <button key={bt.type} onClick={() => addBlock(bt.type as ContentBlock["type"])} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                    <bt.icon size={18} />
                    <span className="text-[10px] font-medium">{bt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
            <span>{wordCount} words</span>
            <span>{readTime} min read</span>
            <span>{blocks.length} blocks</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Cover Image</h3>
            <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="Cover image URL…" className="w-full px-3 py-2 rounded-lg border border-border bg-transparent text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/30 mb-2" />
            {coverImage && <img src={coverImage} alt="" className="w-full h-40 object-cover rounded-lg" />}
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Categories</h3>
            <div className="space-y-1.5">
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={selectedCats.includes(cat.id)} onChange={(e) => setSelectedCats((prev) => e.target.checked ? [...prev, cat.id] : prev.filter((id) => id !== cat.id))} className="rounded border-border text-accent focus:ring-accent/30" />
                  <span className="text-sm text-foreground">{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {showSeoPanel && (
            <div className="bg-card border border-border rounded-xl p-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">SEO Preview</h3>
              <div className="bg-secondary/50 rounded-lg p-3">
                <p className="text-blue-600 text-sm font-medium truncate">{metaTitle || title || "Post Title"}</p>
                <p className="text-green-700 text-xs truncate">thecorporateblog.com/post/{displaySlug || "post-slug"}</p>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{metaDescription || excerpt || "Post description…"}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Meta Title ({(metaTitle || title).length}/60)</label>
                <input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder={title || "Meta title…"} maxLength={60} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-transparent text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Meta Description ({(metaDescription || excerpt).length}/160)</label>
                <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder={excerpt || "Meta description…"} maxLength={160} rows={3} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-transparent text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default PostEditor;
