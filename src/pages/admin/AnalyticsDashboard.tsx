import AdminLayout from "@/components/admin/AdminLayout";
import { BarChart3, TrendingUp, Eye } from "lucide-react";
import { posts } from "@/data/mockPosts";

const AnalyticsDashboard = () => {
  const totalViews = posts.reduce((sum, p) => sum + p.views, 0);
  const topPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 10);

  return (
    <AdminLayout>
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Total Page Views</span>
            <Eye size={18} className="text-accent" />
          </div>
          <p className="text-3xl font-bold text-foreground">{totalViews.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} className="text-accent" />
          <h2 className="font-serif text-lg font-bold text-foreground">Top Posts by Views</h2>
        </div>

        <div className="space-y-2">
          {topPosts.map((post, i) => (
            <div key={post.id} className="flex items-center gap-3 py-2">
              <span className="text-xs font-bold text-muted-foreground w-6">{i + 1}</span>
              <span className="flex-1 text-sm text-foreground truncate">{post.title}</span>
              <span className="text-sm font-medium text-accent">{post.views.toLocaleString()} views</span>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AnalyticsDashboard;
