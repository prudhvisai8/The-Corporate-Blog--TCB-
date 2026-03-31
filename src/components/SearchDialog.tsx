import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { searchPosts } from "@/data/mockPosts";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = query.trim() ? searchPosts(query).slice(0, 8) : [];

  const handleSelect = (slug: string) => {
    onOpenChange(false);
    setQuery("");
    navigate(`/post/${slug}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-border">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full py-4 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
          />
        </div>

        {query.trim() && (
          <div className="max-h-80 overflow-y-auto p-2">
            {results.length === 0 ? (
              <p className="text-sm text-muted-foreground p-3">No articles found</p>
            ) : (
              results.map((r) => (
                <button
                  key={r.id}
                  onClick={() => handleSelect(r.slug)}
                  className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <p className="text-sm font-medium text-foreground leading-snug">{r.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{r.excerpt}</p>
                </button>
              ))
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
