import AdminLayout from "@/components/admin/AdminLayout";
import { Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { posts } from "@/data/mockPosts";

const PostsList = () => {
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-3xl font-bold text-foreground">Posts</h1>
        <Link
          to="/admin/posts/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus size={16} /> New Post
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search posts…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>

      <div className="space-y-2">
        {filtered.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.slug}`}
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-accent/30 transition-colors group"
          >
            <img
              src={post.coverImage}
              alt=""
              className="w-20 h-14 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                {post.excerpt}
              </p>
            </div>
            <span className="shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium bg-warm-green/10 text-warm-green">
              published
            </span>
            <span className="shrink-0 text-xs text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No posts found.
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default PostsList;
