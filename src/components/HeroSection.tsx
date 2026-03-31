import { Link } from "react-router-dom";
import { getFeaturedPost } from "@/data/mockPosts";
import { ArrowRight } from "lucide-react";

interface FeaturedPostData {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  author: { name: string; avatar: string };
  readTime: number;
}

interface HeroSectionProps {
  featuredPost?: FeaturedPostData;
}

const HeroSection = ({ featuredPost }: HeroSectionProps) => {
  const featured = featuredPost || getFeaturedPost();
  const coverImage = "coverImage" in featured ? (featured as any).coverImage : "/placeholder.svg";

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-6 border border-accent/20">
              Featured Article
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5 text-balance">
              {featured.title}
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-5">
              <Link
                to={`/post/${featured.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-lg hover:shadow-accent/25 transition-all"
              >
                Read Article <ArrowRight size={16} />
              </Link>
              <div className="flex items-center gap-3">
                <img
                  src={featured.author.avatar}
                  alt={featured.author.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-foreground/20"
                />
                <div>
                  <p className="text-sm font-medium text-primary-foreground">{featured.author.name}</p>
                  <p className="text-xs text-primary-foreground/50">{featured.readTime} min read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl rotate-2" />
              <img
                src={coverImage}
                alt={featured.title}
                className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Organic wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
