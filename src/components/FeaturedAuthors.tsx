import { authors } from "@/data/mockPosts";

const FeaturedAuthors = () => {
  const featured = authors.slice(0, 3);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Meet the Team</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">Our Writers</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {featured.map((author) => (
          <div
            key={author.id}
            className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-warm-sand"
            />
            <h3 className="font-serif text-lg font-bold text-foreground">
              {author.name}
            </h3>
            <p className="text-xs text-accent font-medium mb-2">{author.role}</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
              {author.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAuthors;
