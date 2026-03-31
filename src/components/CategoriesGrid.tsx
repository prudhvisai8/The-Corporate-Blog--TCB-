import { Link } from "react-router-dom";
import { Lightbulb, Briefcase, Users, Cpu, Globe, Target } from "lucide-react";

const categoryIcons: Record<string, any> = {
  technology: Cpu,
  business: Briefcase,
  leadership: Users,
  innovation: Lightbulb,
  culture: Globe,
  strategy: Target,
};

const categoryImages: Record<string, string> = {
  technology: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
  business: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  leadership: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  innovation: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  culture: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
  strategy: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
};

interface CategoriesGridProps {
  categories: { id: string; name: string; slug: string; description?: string | null }[];
}

const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  if (!categories.length) return null;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Explore Topics</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">Browse by Category</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat.slug] || Briefcase;
          return (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex items-end"
            >
              <img
                src={categoryImages[cat.slug] || "/placeholder.svg"}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="relative p-5 w-full">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-accent" />
                  <h3 className="font-serif text-lg font-bold text-background">{cat.name}</h3>
                </div>
                {cat.description && (
                  <p className="text-xs text-background/70 line-clamp-1">{cat.description}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesGrid;
