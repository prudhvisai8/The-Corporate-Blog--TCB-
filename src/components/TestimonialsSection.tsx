import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TCB has become my go-to source for thoughtful business insights. Every article feels meticulously researched and deeply relevant.",
    name: "Elena Rodriguez",
    role: "VP of Strategy, TechCorp",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "The quality of writing here is exceptional. It's rare to find a publication that combines depth with accessibility so well.",
    name: "David Kim",
    role: "CEO, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "I recommend TCB to every leader on my team. The perspectives shared here have genuinely influenced how we approach strategy.",
    name: "Priya Sharma",
    role: "Director of Operations, GlobalFin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">What Readers Say</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">Trusted by Leaders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-5">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
