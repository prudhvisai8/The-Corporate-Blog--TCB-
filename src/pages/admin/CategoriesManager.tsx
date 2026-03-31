import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { toast } from "sonner";
import { Plus, Trash2, Edit2, Check, X } from "lucide-react";
import { categories as mockCategories } from "@/data/mockPosts";

const CategoriesManager = () => {
  const [categories, setCategories] = useState(mockCategories.map((c) => ({ ...c })));
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const addCategory = () => {
    if (!newName.trim()) return;
    const slug = newName.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
    setCategories([...categories, { id: `cat-${Date.now()}`, name: newName, slug, description: "" }]);
    setNewName("");
    toast.success("Category added");
  };

  const updateCategory = (id: string) => {
    const slug = editName.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
    setCategories(categories.map((c) => c.id === id ? { ...c, name: editName, slug } : c));
    setEditingId(null);
    toast.success("Updated");
  };

  const deleteCategory = (id: string) => {
    if (!confirm("Delete?")) return;
    setCategories(categories.filter((c) => c.id !== id));
    toast.success("Deleted");
  };

  return (
    <AdminLayout>
      <h1 className="font-serif text-3xl font-bold text-foreground mb-6">Categories</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New category name…"
          className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent/30"
          onKeyDown={(e) => e.key === "Enter" && addCategory()}
        />
        <button
          onClick={addCategory}
          disabled={!newName.trim()}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          <Plus size={16} /> Add
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl divide-y divide-border">
        {categories.map((cat) => (
          <div key={cat.id} className="flex items-center gap-3 px-4 py-3">
            {editingId === cat.id ? (
              <>
                <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="flex-1 px-3 py-1.5 rounded border border-border bg-transparent text-sm text-foreground outline-none" autoFocus />
                <button onClick={() => updateCategory(cat.id)} className="p-1.5 text-warm-green hover:bg-secondary rounded"><Check size={14} /></button>
                <button onClick={() => setEditingId(null)} className="p-1.5 text-muted-foreground hover:bg-secondary rounded"><X size={14} /></button>
              </>
            ) : (
              <>
                <span className="flex-1 text-sm text-foreground">{cat.name}</span>
                <span className="text-xs text-muted-foreground">/{cat.slug}</span>
                <button onClick={() => { setEditingId(cat.id); setEditName(cat.name); }} className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"><Edit2 size={14} /></button>
                <button onClick={() => deleteCategory(cat.id)} className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-secondary rounded transition-colors"><Trash2 size={14} /></button>
              </>
            )}
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default CategoriesManager;
