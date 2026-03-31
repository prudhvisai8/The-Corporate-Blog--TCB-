import { useParams, Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import BackToTop from "@/components/BackToTop";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import ShareButtons from "@/components/ShareButtons";
import AdSlot from "@/components/AdSlot";
import SponsoredBanner from "@/components/SponsoredBanner";
import { getPostBySlug, getRelatedPosts } from "@/data/mockPosts";
import { useMetaTags } from "@/hooks/useMetaTags";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  const metaOrigin = typeof window !== "undefined" ? window.location.origin : "";
  const metaPostUrl = post ? `${metaOrigin}/post/${post.slug}` : "";

  useMetaTags({
    title: post ? (post.metaTitle || post.title) : undefined,
    description: post ? (post.metaDescription || post.excerpt || "") : undefined,
    ogImage: post?.coverImage || undefined,
    ogType: "article",
    canonicalUrl: metaPostUrl || undefined,
    authorName: post?.author?.name || undefined,
    publishedAt: post?.publishedAt || undefined,
  });

  if (!post) {
    return (
      <BlogLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
        </div>
      </BlogLayout>
    );
  }

  const related = getRelatedPosts(post, 3);
  const origin = window.location.origin;
  const postUrl = `${origin}/post/${post.slug}`;

  return (
    <BlogLayout>
      <article>
        {/* Structured Data */}
        <ArticleJsonLd
          title={post.title}
          description={post.excerpt}
          url={postUrl}
          imageUrl={post.coverImage}
          publishedAt={post.publishedAt}
          authorName={post.author.name}
        />
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: origin },
            { name: post.category, url: `${origin}/category/${post.categorySlug}` },
            { name: post.title, url: postUrl },
          ]}
        />

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: post.category, href: `/category/${post.categorySlug}` },
            { label: post.title },
          ]} />
        </div>

        {/* Top Ad Slot */}
        <div className="container mx-auto px-4 mb-6">
          <div className="max-w-4xl mx-auto">
            <AdSlot position="top" />
          </div>
        </div>

        {/* Cover */}
        <div className="container mx-auto px-4 mb-10">
          <div className="max-w-4xl mx-auto">
            {post.isSponsored && <SponsoredBanner />}
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              {post.title}
            </h1>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-border" />
                <div>
                  <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime} min read
                  </p>
                </div>
              </div>
              <ShareButtons url={postUrl} title={post.title} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src={post.coverImage} alt={post.title} className="w-full h-[50vh] min-h-[300px] object-cover" loading="lazy" width="800" height="450" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-12">
          <div
            className="prose prose-lg max-w-3xl mx-auto text-foreground
              prose-headings:font-serif prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          {post.author.bio && (
            <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
              <div className="flex gap-4 items-start bg-secondary/50 rounded-2xl p-6">
                <img src={post.author.avatar} alt={post.author.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-border" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Written by</p>
                  <p className="font-serif text-lg font-bold text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{post.author.bio}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="container mx-auto px-4 pb-20">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 border-t border-border pt-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <ArticleCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}

      <BackToTop />
    </BlogLayout>
  );
};

export default BlogPost;
