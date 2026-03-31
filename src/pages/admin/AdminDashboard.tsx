import AdminLayout from "@/components/admin/AdminLayout";
import { FileText, Eye, Users, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { posts, categories } from "@/data/mockPosts";

const AdminDashboard = () => {
  const publishedPosts = posts.filter((p) => p.featured || true); // all mock posts are "published"
  const statCards = [
    { label: "Total Posts", value: posts.length, icon: FileText, color: "text-accent" },
    { label: "Published", value: publishedPosts.length, icon: Eye, color: "text-warm-green" },
    { label: "Categories", value: categories.length, icon: FolderOpen, color: "text-warm-clay" },
    { label: "Subscribers", value: 247, icon: Users, color: "text-primary" },
  ];

  const recentPosts = posts.slice(0, 5);

  return (
    <AdminLayout>
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {statCards.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon size={18} className={s.color} />
            </div>
            <p className="text-3xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl font-bold text-foreground">Recent Posts</h2>
        <Link to="/admin/posts/new" className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          New Post
        </Link>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Title</th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Status</th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentPosts.map((post) => (
              <tr key={post.id} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                <td className="px-4 py-3">
                  <Link to={`/admin/posts/${post.id}`} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-warm-green/10 text-warm-green">
                    published
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
