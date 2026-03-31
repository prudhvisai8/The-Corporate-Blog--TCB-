import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/usePosts";
import NewsletterForm from "./NewsletterForm";
import { Leaf } from "lucide-react";

const BlogFooter = () => {
  const { data: categories } = useCategories();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-accent" />
              <h3 className="font-serif text-xl font-bold">TCB</h3>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              The Corporate Blog — insights, analysis, and thought leadership for modern business leaders.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Categories</h4>
            <ul className="space-y-2.5">
              {(categories || []).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/auth" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Sign In</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/60 mb-4">Get the latest insights delivered to your inbox.</p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} The Corporate Blog. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/40">
            <span className="hover:text-primary-foreground/60 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-primary-foreground/60 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-primary-foreground/60 cursor-pointer transition-colors">RSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
