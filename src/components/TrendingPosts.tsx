import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import { getTrendingPosts } from "@/data/mockPosts";

const TrendingPosts = () => {
  const posts = getTrendingPosts(5);

  if (!posts.length) return null;

  const [top, ...rest] = posts;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-full bg-destructive/10">
          <Flame className="w-5 h-5 text-destructive" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground">Trending Now</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Featured trending post */}
        <Link to={`/post/${top.slug}`} className="lg:col-span-3 group block">
          <div className="overflow-hidden rounded-2xl mb-4 bg-muted relative">
            <img
              src={top.coverImage}
              alt={top.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1.5 rounded-full">
              <Flame className="w-3.5 h-3.5" /> {top.views.toLocaleString()} views
            </span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 inline-block">
            {top.category}
          </span>
          <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">
            {top.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{top.excerpt}</p>
          <div className="flex items-center gap-2.5">
            <img src={top.author.avatar} alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-border" />
            <span className="text-xs text-muted-foreground">
              {top.author.name} · {top.readTime} min read
            </span>
          </div>
        </Link>

        {/* Sidebar trending list */}
        <div className="lg:col-span-2 space-y-1">
          {rest.map((post, i) => (
            <Link
              key={post.id}
              to={`/post/${post.slug}`}
              className="group flex gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <span className="text-3xl font-serif font-bold text-muted-foreground/40 leading-none mt-1 w-8 flex-shrink-0">
                {String(i + 2).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {post.category}
                </span>
                <h4 className="font-serif text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug line-clamp-2 mt-0.5">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                  <span>{post.author.name}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-destructive" /> {post.views.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPosts;
