import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Leaf } from "lucide-react";

interface NewsletterFormProps {
  variant?: "footer" | "standalone";
}

const NewsletterForm = ({ variant = "footer" }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Mock subscription
    setTimeout(() => {
      toast({ title: "Welcome aboard! 🌿", description: "You'll receive our latest articles in your inbox." });
      setEmail("");
      setLoading(false);
    }, 500);
  };

  if (variant === "standalone") {
    return (
      <div className="bg-primary rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute top-4 right-4 text-primary-foreground/10">
          <Leaf size={120} />
        </div>
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Newsletter</span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Stay in the loop</h3>
          <p className="text-sm text-primary-foreground/60 mb-8 max-w-md mx-auto">
            Get the latest insights delivered straight to your inbox. No spam, unsubscribe anytime.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
              className="flex-1 px-4 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all disabled:opacity-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        maxLength={255}
        className="flex-1 px-4 py-2.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        Join
      </button>
    </form>
  );
};

export default NewsletterForm;
