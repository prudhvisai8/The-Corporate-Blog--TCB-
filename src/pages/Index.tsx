import BlogLayout from "@/components/BlogLayout";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedAuthors from "@/components/FeaturedAuthors";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrendingPosts from "@/components/TrendingPosts";
import BackToTop from "@/components/BackToTop";
import { posts, categories, getFeaturedPost } from "@/data/mockPosts";
import { TrendingUp } from "lucide-react";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = posts.filter((p) => !p.featured);

  return (
    <BlogLayout>
      <HeroSection featuredPost={featuredPost} />

      {/* Categories Grid */}
      <CategoriesGrid categories={categories} />

      {/* Trending Posts */}
      <TrendingPosts />

      {/* Latest Articles */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-full bg-accent/10">
            <TrendingUp className="w-5 h-5 text-accent" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground">Latest Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Featured Authors */}
      <FeaturedAuthors />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-16">
        <NewsletterForm variant="standalone" />
      </section>

      <BackToTop />
    </BlogLayout>
  );
};

export default Index;
