import { useParams, Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { getAuthorById, getPostsByAuthor } from "@/data/mockPosts";
import { User, BookOpen, Calendar } from "lucide-react";

const AuthorPage = () => {
  const { id } = useParams<{ id: string }>();
  const author = getAuthorById(id || "");
  const authorPosts = author ? getPostsByAuthor(author.id) : [];

  if (!author) {
    return (
      <BlogLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Author Not Found</h1>
          <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
        </div>
      </BlogLayout>
    );
  }

  const memberSince = new Date(author.memberSince).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <BlogLayout>
      {/* Author Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-28 h-28 rounded-full object-cover ring-4 ring-primary-foreground/20 mx-auto mb-5"
          />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            {author.name}
          </h1>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">{author.role}</p>
          {author.bio && (
            <p className="text-primary-foreground/70 max-w-lg mx-auto text-base leading-relaxed mb-4">
              {author.bio}
            </p>
          )}
          <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/60">
            <span className="inline-flex items-center gap-1.5">
              <BookOpen size={14} /> {authorPosts.length} article{authorPosts.length !== 1 ? "s" : ""}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> Member since {memberSince}
            </span>
          </div>
        </div>
      </section>

      {/* Author's Posts */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
          Articles by {author.name}
        </h2>
        {authorPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-12">No published articles yet.</p>
        )}
      </section>

      <BackToTop />
    </BlogLayout>
  );
};

export default AuthorPage;
