import BlogLayout from "@/components/BlogLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Users, Target, BookOpen, Heart } from "lucide-react";

const About = () => {
  return (
    <BlogLayout>
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      <section className="container mx-auto px-4 pb-20 max-w-4xl">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">About Us</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-5">
            Stories that matter,<br />insights that last.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            The Corporate Blog is a publication dedicated to delivering sharp, thoughtful insights for modern business leaders navigating an increasingly complex world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Target, title: "Our Mission", desc: "To empower leaders with the knowledge and perspectives they need to make better decisions.", color: "bg-accent/10 text-accent" },
            { icon: BookOpen, title: "What We Cover", desc: "Technology, strategy, leadership, innovation, culture — through the lens of practical application.", color: "bg-warm-green/10 text-warm-green" },
            { icon: Users, title: "Our Team", desc: "A curated team of editors, analysts, and writers with deep industry experience.", color: "bg-warm-clay/20 text-foreground" },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color} mb-4`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-12">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-accent" />
            <h2 className="font-serif text-2xl font-bold text-foreground">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Depth over speed", desc: "We take the time to research thoroughly and present nuanced perspectives." },
              { title: "Practical relevance", desc: "Every article is written with the reader's real-world challenges in mind." },
              { title: "Intellectual honesty", desc: "We challenge conventional wisdom when the evidence demands it." },
              { title: "Inclusive perspective", desc: "We actively seek diverse voices and viewpoints to enrich our coverage." },
            ].map(({ title, desc }) => (
              <div key={title} className="group">
                <h4 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default About;
