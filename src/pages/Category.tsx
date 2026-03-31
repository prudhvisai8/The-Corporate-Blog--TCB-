import { useParams, Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import ArticleCard from "@/components/ArticleCard";
import { getCategoryBySlug, getPostsByCategory } from "@/data/mockPosts";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const cat = getCategoryBySlug(category || "");
  const categoryPosts = getPostsByCategory(category || "");

  return (
    <BlogLayout>
      <section className="container mx-auto px-4 py-16">
        <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors mb-4 inline-block">
          ← All Articles
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
          {cat?.name || category}
        </h1>
        <p className="text-muted-foreground mb-12">
          {categoryPosts.length} article{categoryPosts.length !== 1 ? "s" : ""}
        </p>

        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-20">No articles in this category yet.</p>
        )}
      </section>
    </BlogLayout>
  );
};

export default Category;
