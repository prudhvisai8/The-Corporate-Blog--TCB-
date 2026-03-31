import { Link } from "react-router-dom";
import type { Post } from "@/data/mockPosts";

interface ArticleCardProps {
  post: Post;
  variant?: "default" | "compact";
}

const ArticleCard = ({ post, variant = "default" }: ArticleCardProps) => {
  if (variant === "compact") {
    return (
      <Link to={`/post/${post.slug}`} className="group flex gap-4 py-4 border-b border-border last:border-0">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex flex-col justify-center min-w-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
            {post.category}
          </span>
          <h3 className="font-serif text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{post.readTime} min read</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.slug}`} className="group block animate-fade-in">
      <div className="overflow-hidden rounded-2xl mb-4 bg-muted">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">
        {post.category}
      </span>
      <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-2.5">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-7 h-7 rounded-full object-cover ring-2 ring-border"
        />
        <span className="text-xs text-muted-foreground">
          {post.author.name} · {post.readTime} min read
        </span>
      </div>
    </Link>
  );
};

export default ArticleCard;
